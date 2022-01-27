pragma solidity 0.7.4;
pragma experimental ABIEncoderV2;

import '../../utils/Ownable.sol';

import '@0xsequence/erc-1155/contracts/tokens/ERC1155PackedBalance/ERC1155MintBurnPackedBalance.sol';
import '@0xsequence/erc-1155/contracts/tokens/ERC1155/ERC1155Metadata.sol';
import '@0xsequence/erc-1155/contracts/tokens/ERC2981/ERC2981Global.sol';
import '@0xsequence/erc-1155/contracts/utils/SafeMath.sol';

import '../common/ContextMixin.sol';

/**
 * ERC-1155 token contract for metacana assets.
 * This contract manages the various SW asset factories
 * and ensures that each factory has constraint access in
 * terms of the id space they are allowed to mint.
 * @dev Mint permissions use range because factory contracts
 *      could be minting large numbers of NFTs or be built
 *      with granular, but efficient permission checks.
 */
contract MetacanaAssets is ContextMixin, ERC1155MintBurnPackedBalance, ERC1155Metadata, ERC2981Global, Ownable {
  using SafeMath for uint256;

  /***********************************|
  |             Variables             |
  |__________________________________*/

  mapping(uint256 => address) public creators;
  mapping(uint256 => uint256) public tokenSupply;

  // Factory mapping variables
  mapping(address => bool) internal isFactoryActive; // Whether an address can print tokens or not
  mapping(address => AssetRange[]) internal mintAccessRanges; // Contains the ID ranges factories are allowed to mint
  AssetRange[] internal lockedRanges; // Ranges of IDs that can't be granted permission to mint

  // Issuance mapping variables
  mapping(uint256 => uint256) internal currentIssuance; // Current Issuance of token for tokens that have max issuance ONLY
  mapping(uint256 => uint256) internal maxIssuance; // Issuance is counted and capped to associated maxIssuance if it's non-zero

  // Struct for mint ID ranges permissions
  struct AssetRange {
    uint64 minID; // Minimum value the ID need to be to fall in the range
    uint64 maxID; // Maximum value the ID need to be to fall in the range
    uint64 startTime; // Timestamp when the range becomes valid
    uint64 endTime; // Timestamp after which the range is no longer valid
  }

  /***********************************|
  |               Events              |
  |__________________________________*/

  event FactoryActivation(address indexed factory);
  event FactoryShutdown(address indexed factory);
  event MaxIssuancesChanged(uint256[] ids, uint256[] newMaxIssuances);
  event MintPermissionAdded(address indexed factory, AssetRange new_range);
  event MintPermissionRemoved(address indexed factory, AssetRange deleted_range);
  event RangeLocked(AssetRange locked_range);

  /***********************************|
  |             Constuctor            |
  |__________________________________*/

  constructor(address _firstOwner) public ERC1155Metadata('Metacana', '') Ownable(_firstOwner) {}

  /***********************************|
  |     Factory Management Methods    |
  |__________________________________*/

  /**
   * @dev Require _msgSender() to be the creator of the token id
   */
  modifier creatorOnly(uint256 _id) {
    require(creators[_id] == _msgSender(), 'ERC1155Tradable#creatorOnly: ONLY_CREATOR_ALLOWED');
    _;
  }

  /**
   * @dev Require _msgSender() to own more than 0 of the token id
   */
  modifier ownersOnly(uint256 _id) {
    require(balanceOf(_msgSender(), _id) > 0, 'ERC1155Tradable#ownersOnly: ONLY_OWNERS_ALLOWED');
    _;
  }

  /**
   * @dev Returns the total quantity for a token ID
   * @param _id uint256 ID of the token to query
   * @return amount of token in existence
   */
  function totalSupply(uint256 _id) public view returns (uint256) {
    return tokenSupply[_id];
  }

  /**
   * @dev Change the creator address for given tokens
   * @param _to   Address of the new creator
   * @param _ids  Array of Token IDs to change creator
   */
  function setCreator(address _to, uint256[] memory _ids) public {
    require(_to != address(0), 'ERC1155Tradable#setCreator: INVALID_ADDRESS.');
    for (uint256 i = 0; i < _ids.length; i++) {
      uint256 id = _ids[i];
      _setCreator(_to, id);
    }
  }

  /**
   * @dev Change the creator address for given token
   * @param _to   Address of the new creator
   * @param _id  Token IDs to change creator of
   */
  function _setCreator(address _to, uint256 _id) internal creatorOnly(_id) {
    creators[_id] = _to;
  }

  /**
   * @dev Returns whether the specified token exists by checking to see if it has a creator
   * @param _id uint256 ID of the token to query the existence of
   * @return bool whether the token exists
   */
  function _exists(uint256 _id) internal view returns (bool) {
    return creators[_id] != address(0);
  }

  function exists(uint256 _id) external view returns (bool) {
    return _exists(_id);
  }

  /**
   * @notice Will ALLOW factory to print some assets specified in `canPrint` mapping
   * @param _factory Address of the factory to activate
   */
  function activateFactory(address _factory) external onlyOwner {
    isFactoryActive[_factory] = true;
    emit FactoryActivation(_factory);
  }

  /**
   * @notice Will DISALLOW factory to print any asset
   * @param _factory Address of the factory to shutdown
   */
  function shutdownFactory(address _factory) external onlyOwner {
    isFactoryActive[_factory] = false;
    emit FactoryShutdown(_factory);
  }

  /**
   * @notice Will allow a factory to mint some token ids
   * @param _factory   Address of the factory to update permission
   * @param _minRange  Minimum ID (inclusive) in id range that factory will be able to mint
   * @param _maxRange  Maximum ID (inclusive) in id range that factory will be able to mint
   * @param _startTime Timestamp when the range becomes valid
   * @param _endTime   Timestamp after which the range is no longer valid
   */
  function addMintPermission(
    address _factory,
    uint64 _minRange,
    uint64 _maxRange,
    uint64 _startTime,
    uint64 _endTime
  ) external onlyOwner {
    require(_maxRange > 0, 'MetacanaAssets#addMintPermission: NULL_RANGE');
    require(_minRange <= _maxRange, 'MetacanaAssets#addMintPermission: INVALID_RANGE');
    require(_startTime < _endTime, 'MetacanaAssets#addMintPermission: START_TIME_IS_NOT_LESSER_THEN_END_TIME');

    // Check if new range has an overlap with locked ranges.
    // lockedRanges is expected to be a small array
    for (uint256 i = 0; i < lockedRanges.length; i++) {
      AssetRange memory locked_range = lockedRanges[i];
      require(
        (_maxRange < locked_range.minID) || (locked_range.maxID < _minRange),
        'MetacanaAssets#addMintPermission: OVERLAP_WITH_LOCKED_RANGE'
      );
    }

    // Create and store range struct for _factory
    AssetRange memory range = AssetRange(_minRange, _maxRange, _startTime, _endTime);
    mintAccessRanges[_factory].push(range);
    emit MintPermissionAdded(_factory, range);
  }

  /**
   * @notice Will remove the permission a factory has to mint some token ids
   * @param _factory    Address of the factory to update permission
   * @param _rangeIndex Array's index where the range to delete is located for _factory
   */
  function removeMintPermission(address _factory, uint256 _rangeIndex) external onlyOwner {
    // Will take the last range and put it where the "hole" will be after
    // the AssetRange struct at _rangeIndex is deleted
    uint256 last_index = mintAccessRanges[_factory].length - 1; // won't underflow because of require() statement above
    AssetRange memory range_to_delete = mintAccessRanges[_factory][_rangeIndex]; // Stored for log

    if (_rangeIndex != last_index) {
      AssetRange memory last_range = mintAccessRanges[_factory][last_index]; // Retrieve the range that will be moved
      mintAccessRanges[_factory][_rangeIndex] = last_range; // Overwrite the "to-be-deleted" range
    }

    // Delete last element of the array
    mintAccessRanges[_factory].pop();
    emit MintPermissionRemoved(_factory, range_to_delete);
  }

  /**
   * @notice Will forever prevent new mint permissions for provided ids
   * @dev THIS ACTION IS IRREVERSIBLE, USE WITH CAUTION
   * @dev In order to forever restrict minting of certain ids to a set of factories,
   *      one first needs to call `addMintPermission()` for the corresponding factory
   *      and the corresponding ids, then call this method to prevent further mint
   *      permissions to be granted. One can also remove mint permissions after ids
   *      mint permissions where locked down.
   * @param _range AssetRange struct for range of asset that can't be granted
   *               new mint permission to
   */
  function lockRangeMintPermissions(AssetRange memory _range) public onlyOwner {
    lockedRanges.push(_range);
    emit RangeLocked(_range);
  }

  /***********************************|
  |    Supplies Management Methods    |
  |__________________________________*/

  /**
   * @notice Set max issuance for some token IDs that can't ever be increased
   * @dev Can only decrease the max issuance if already set, but can't set it *back* to 0.
   * @param _ids Array of token IDs to set the max issuance
   * @param _newMaxIssuances Array of max issuances for each corresponding ID
   */
  function setMaxIssuances(uint256[] calldata _ids, uint256[] calldata _newMaxIssuances) external onlyOwner {
    require(_ids.length == _newMaxIssuances.length, 'MetacanaAssets#setMaxIssuances: INVALID_ARRAYS_LENGTH');

    // Can only *decrease* a max issuance
    // Can't set max issuance back to 0
    for (uint256 i = 0; i < _ids.length; i++) {
      if (maxIssuance[_ids[i]] > 0) {
        require(
          0 < _newMaxIssuances[i] && _newMaxIssuances[i] < maxIssuance[_ids[i]],
          'MetacanaAssets#setMaxIssuances: INVALID_NEW_MAX_ISSUANCE'
        );
      }
      maxIssuance[_ids[i]] = _newMaxIssuances[i];
    }

    emit MaxIssuancesChanged(_ids, _newMaxIssuances);
  }

  /***********************************|
  |    Royalty Management Methods     |
  |__________________________________*/

  /**
   * @notice Will set the basis point and royalty recipient that is applied to all Metacana assets
   * @param _receiver Fee recipient that will receive the royalty payments
   * @param _royaltyBasisPoints Basis points with 3 decimals representing the fee %
   *        e.g. a fee of 2% would be 20 (i.e. 20 / 1000 == 0.02, or 2%)
   */
  function setGlobalRoyaltyInfo(address _receiver, uint256 _royaltyBasisPoints) external onlyOwner {
    _setGlobalRoyaltyInfo(_receiver, _royaltyBasisPoints);
  }

  /***********************************|
  |      Receiver Method Handler      |
  |__________________________________*/

  /**
   * @notice Prevents receiving Ether or calls to unsuported methods
   */
  fallback() external {
    revert('UNSUPPORTED_METHOD');
  }

  /***********************************|
  |          Minting Function         |
  |__________________________________*/

  /**
   * @notice Mint tokens for each ids in _ids
   * @dev This methods assumes ids are sorted by how the ranges are sorted in
   *      the corresponding mintAccessRanges[msg.sender] array. Call might throw
   *      if they are not.
   * @param _to      The address to mint tokens to.
   * @param _ids     Array of ids to mint
   * @param _amounts Array of amount of tokens to mint per id
   * @param _data    Byte array of data to pass to recipient if it's a contract
   */
  function batchMint(
    address _to,
    uint256[] memory _ids,
    uint256[] memory _amounts,
    bytes memory _data
  ) public {
    // Validate assets to be minted
    _validateMints(_ids, _amounts);

    // If hasn't reverted yet, all IDs are allowed for factory
    _batchMint(_to, _ids, _amounts, _data);
    for (uint256 i = 0; i < _ids.length; i++) {
      uint256 _id = _ids[i];
      require(creators[_id] == _msgSender(), 'ERC1155Tradable#batchMint: ONLY_CREATOR_ALLOWED');
      uint256 _amount = _amounts[i];
      tokenSupply[_id] = tokenSupply[_id].add(_amount);
    }
  }

  /**
   * @dev Creates a new token type and assigns _initialSupply to an address
   * NOTE: remove onlyOwner if you want third parties to create new tokens on
   *       your contract (which may change your IDs)
   * NOTE: The token id must be passed. This allows lazy creation of tokens or
   *       creating NFTs by setting the id's high bits with the method
   *       described in ERC1155 or to use ids representing values other than
   *       successive small integers. If you wish to create ids as successive
   *       small integers you can either subclass this class to count onchain
   *       or maintain the offchain cache of identifiers recommended in
   *       ERC1155 and calculate successive ids from that.
   * @param _initialOwner address of the first owner of the token
   * @param _id The id of the token to create (must not currenty exist).
   * @param _initialSupply amount to supply the first owner
   * @param _data Data to pass if receiver is contract
   * @return The newly created token ID
   */
  function create(
    address _initialOwner,
    uint256 _id,
    uint256 _initialSupply,
    bytes memory _data
  ) public onlyOwner returns (uint256) {
    require(!_exists(_id), 'token _id already exists');
    uint256[] memory ids = new uint256[](1);
    uint256[] memory amounts = new uint256[](1);
    ids[0] = _id;
    amounts[0] = _initialSupply;
    _validateMints(ids, amounts);
    creators[_id] = _msgSender();

    _mint(_initialOwner, _id, _initialSupply, _data);

    tokenSupply[_id] = _initialSupply;
    return _id;
  }

  /**
   * @notice Mint _amount of tokens of a given id, if allowed.
   * @param _to      The address to mint tokens to
   * @param _id      Token id to mint
   * @param _amount  The amount to be minted
   * @param _data    Data to pass if receiver is contract
   */
  function mint(
    address _to,
    uint256 _id,
    uint256 _amount,
    bytes calldata _data
  ) external virtual {
    // Put into array for validation
    uint256[] memory ids = new uint256[](1);
    uint256[] memory amounts = new uint256[](1);
    ids[0] = _id;
    amounts[0] = _amount;

    // Validate and mint
    _validateMints(ids, amounts);
    _mint(_to, _id, _amount, _data);
    tokenSupply[_id] = tokenSupply[_id].add(_amount);
  }

  /**
   * @notice Will validate the ids and amounts to mint
   * @dev This methods assumes ids are sorted by how the ranges are sorted in
   *      the corresponding mintAccessRanges[msg.sender] array. Call will revert
   *      if they are not.
   * @dev When the maxIssuance of an asset is set to a non-zero value, the
   *      supply manager contract will start keeping track of how many of that
   *      token are minted, until the maxIssuance hit.
   * @param _ids     Array of ids to mint
   * @param _amounts Array of amount of tokens to mint per id
   */
  function _validateMints(uint256[] memory _ids, uint256[] memory _amounts) internal {
    require(isFactoryActive[msg.sender], 'MetacanaAssets#_validateMints: FACTORY_NOT_ACTIVE');

    // Number of mint ranges
    uint256 n_ranges = mintAccessRanges[msg.sender].length;

    // Load factory's default range
    AssetRange memory range = mintAccessRanges[msg.sender][0];
    uint256 range_index = 0;

    // Will make sure that factory is allowed to print all ids
    // and that no max issuance is exceeded
    for (uint256 i = 0; i < _ids.length; i++) {
      uint256 id = _ids[i];
      uint256 amount = _amounts[i];
      uint256 max_issuance = maxIssuance[id];

      // If ID is out of current range, move to next range, else skip.
      // This function only moves forwards in the AssetRange array,
      // hence if _ids are not sorted correctly, the call will fail.
      while (block.timestamp < range.startTime || block.timestamp > range.endTime || id < range.minID || range.maxID < id) {
        range_index += 1;

        // Load next range. If none left, ID is assumed to be out of all ranges
        require(range_index < n_ranges, 'MetacanaAssets#_validateMints: ID_OUT_OF_RANGE');
        range = mintAccessRanges[msg.sender][range_index];
      }

      // If max supply is specified for id
      if (max_issuance > 0) {
        uint256 new_current_issuance = currentIssuance[id].add(amount);
        require(new_current_issuance <= max_issuance, 'MetacanaAssets#_validateMints: MAX_ISSUANCE_EXCEEDED');
        currentIssuance[id] = new_current_issuance;
      }
    }
  }

  /***********************************|
  |         Getter Functions          |
  |__________________________________*/

  /**
   * @notice Get the max issuance of multiple asset IDs
   * @dev The max issuance of a token does not reflect the maximum supply, only
   *      how many tokens can be minted once the maxIssuance for a token is set.
   * @param _ids Array containing the assets IDs
   * @return The current max issuance of each asset ID in _ids
   */
  function getMaxIssuances(uint256[] calldata _ids) external view returns (uint256[] memory) {
    uint256 nIds = _ids.length;
    uint256[] memory max_issuances = new uint256[](nIds);

    // Iterate over each owner and token ID
    for (uint256 i = 0; i < nIds; i++) {
      max_issuances[i] = maxIssuance[_ids[i]];
    }

    return max_issuances;
  }

  /**
   * @notice Get the current issuanc of multiple asset ID
   * @dev The current issuance of a token does not reflect the current supply, only
   *      how many tokens since a max issuance was set for a given token id.
   * @param _ids Array containing the assets IDs
   * @return The current issuance of each asset ID in _ids
   */
  function getCurrentIssuances(uint256[] calldata _ids) external view returns (uint256[] memory) {
    uint256 nIds = _ids.length;
    uint256[] memory current_issuances = new uint256[](nIds);

    // Iterate over each owner and token ID
    for (uint256 i = 0; i < nIds; i++) {
      current_issuances[i] = currentIssuance[_ids[i]];
    }

    return current_issuances;
  }

  /**
   * @return Returns whether a factory is active or not
   */
  function getFactoryStatus(address _factory) external view returns (bool) {
    return isFactoryActive[_factory];
  }

  /**
   * @return Returns whether the sale has ended or not
   */
  function getFactoryAccessRanges(address _factory) external view returns (AssetRange[] memory) {
    return mintAccessRanges[_factory];
  }

  /**
   * @return Returns all the ranges that are locked
   */
  function getLockedRanges() external view returns (AssetRange[] memory) {
    return lockedRanges;
  }

  /***********************************|
  |          Burning Functions        |
  |__________________________________*/

  /**
   * @notice Burn _amount of tokens of a given id from msg.sender
   * @dev This will not change the current issuance tracked in _supplyManagerAddr.
   * @param _id     Asset id to burn
   * @param _amount The amount to be burn
   */
  function burn(uint256 _id, uint256 _amount) external {
    _burn(msg.sender, _id, _amount);
  }

  /**
   * @notice Burn _amounts of tokens of given ids from msg.sender
   * @dev This will not change the current issuance tracked in _supplyManagerAddr.
   * @param _ids     Asset id to burn
   * @param _amounts The amount to be burn
   */
  function batchBurn(uint256[] calldata _ids, uint256[] calldata _amounts) external {
    _batchBurn(msg.sender, _ids, _amounts);
  }

  /***********************************|
  |           URI Functions           |
  |__________________________________*/

  /**
   * @dev Will update the base URL of token's URI
   * @param _newBaseMetadataURI New base URL of token's URI
   */
  function setBaseMetadataURI(string calldata _newBaseMetadataURI) external onlyOwner {
    _setBaseMetadataURI(_newBaseMetadataURI);
  }

  /**
   * @dev Will emit default URI log event for corresponding token _id
   * @param _tokenIDs Array of IDs of tokens to log default URI
   */
  function logURIs(uint256[] calldata _tokenIDs) external onlyOwner {
    _logURIs(_tokenIDs);
  }

  /***********************************|
  |          ERC165 Functions         |
  |__________________________________*/

  /**
   * @notice Query if a contract implements an interface
   * @param _interfaceID  The interface identifier, as specified in ERC-165
   * @return `true` if the contract implements `_interfaceID`
   */
  function supportsInterface(bytes4 _interfaceID)
    public
    pure
    virtual
    override(ERC1155PackedBalance, ERC1155Metadata, ERC2981Global)
    returns (bool)
  {
    return super.supportsInterface(_interfaceID);
  }

  function _msgSender() internal view returns (address sender) {
    return ContextMixin.msgSender();
  }
}
