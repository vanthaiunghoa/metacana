// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/utils/Strings.sol';
import '../interfaces/IMetacanaNFT.sol';
import '../tokens/MetacanaNFT.sol';
import '../../utils/TieredOwnable.sol';
import "../common/AssetRange.sol";

/**
 * @title CreatureAccessoryFactory
 * CreatureAccessory - a factory contract for Creature Accessory semi-fungible
 * tokens.
 */
contract CreatureAccessoryFactory is IMetacanaNFT, Ownable, ReentrancyGuard {
  using Strings for string;
  using SafeMath for uint256;

  address public proxyRegistryAddress;
  address public nftAddress;
  address public lootBoxAddress;
  string internal constant baseMetadataURI = 'https://asset.metacana.io/api/';
  uint256 constant UINT256_MAX = ~uint256(0);

  /*
   * Optionally set this to a small integer to enforce limited existence per option/token ID
   * (Otherwise rely on sell orders on OpenSea, which can only be made by the factory owner.)
   */
  uint256 constant SUPPLY_PER_TOKEN_ID = UINT256_MAX;

  // The number of creature accessories (not creature accessory rarity classes!)
  uint256 constant NUM_ITEM_OPTIONS = 6;

  /*
   * Three different options for minting CreatureAccessories (basic, premium, and gold).
   */
  uint256 public constant BASIC_LOOTBOX = NUM_ITEM_OPTIONS + 0;
  uint256 public constant PREMIUM_LOOTBOX = NUM_ITEM_OPTIONS + 1;
  uint256 public constant GOLD_LOOTBOX = NUM_ITEM_OPTIONS + 2;
  uint256 public constant NUM_LOOTBOX_OPTIONS = 3;

  uint256 public constant NUM_OPTIONS = NUM_ITEM_OPTIONS + NUM_LOOTBOX_OPTIONS;

  constructor(
    address _proxyRegistryAddress,
    address _nftAddress,
    address _lootBoxAddress
  ) {
    proxyRegistryAddress = _proxyRegistryAddress;
    nftAddress = _nftAddress;
    lootBoxAddress = _lootBoxAddress;
  }

  /////
  // FACTORY INTERFACE METHODS
  /////
  /**
   * @dev Returns whether the specified token exists by checking to see if it has a creator
   * @param _id uint256 ID of the token to query the existence of
   * @return bool whether the token exists
   */

  /**
   * @notice Will ALLOW factory to print some assets specified in `canPrint` mapping
   * @param _factory Address of the factory to activate
   */
  function activateFactory(address _factory) external override onlyOwner {
    MetacanaNFT items = MetacanaNFT(nftAddress);
    MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
    items.activateFactory(_factory);
    lootBox.activateFactory(_factory);
    emit FactoryActivation(_factory);
  }

  /**
   * @notice Will DISALLOW factory to print any asset
   * @param _factory Address of the factory to shutdown
   */
  function shutdownFactory(address _factory) external override onlyOwner {
    MetacanaNFT items = MetacanaNFT(nftAddress);
    MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
    items.shutdownFactory(_factory);
    lootBox.shutdownFactory(_factory);
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
  ) external override onlyOwner {
    require(_maxRange > 0, 'MetacanaNFT#addMintPermission: NULL_RANGE');
    require(_minRange <= _maxRange, 'MetacanaNFT#addMintPermission: INVALID_RANGE');
    require(_maxRange < NUM_ITEM_OPTIONS || NUM_ITEM_OPTIONS <= _minRange, 'MetacanaNFT#addMintPermission: OVERLAP_BETWEEN_BOX_AND_ITEM_RANGE');
    require(_startTime < _endTime, 'MetacanaNFT#addMintPermission: START_TIME_IS_NOT_LESSER_THEN_END_TIME');
    
    if(_maxRange < NUM_ITEM_OPTIONS){
      MetacanaNFT items = MetacanaNFT(nftAddress);
      items.addMintPermission(_factory, _minRange, _maxRange, _startTime, _endTime);
    } else if (NUM_ITEM_OPTIONS <= _minRange){
      MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
      lootBox.addMintPermission(_factory, _minRange, _maxRange, _startTime, _endTime);
    }    
  }

  /**
   * @notice Will remove the permission a factory has to mint some token ids
   * @param _factory    Address of the factory to update permission
   * @param _rangeIndex Array's index where the range to delete is located for _factory
   */
  function removeMintPermission(address _factory, uint256 _rangeIndex) external override onlyOwner {
    //FIXME: check with require in sub-contract
    MetacanaNFT items = MetacanaNFT(nftAddress);
    MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
  }

  /**
   * @notice Will forever prevent new mint permissions for provided ids
   * @dev THIS ACTION IS IRREVERSIBLE, USE WITH CAUTION
   * @dev In order to forever restrict minting of certain ids to a set of factories,
   *      one first needs to call `addMintPermission()` for the corresponding factory
   *      and the corresponding ids, then call this method to prevent further mint
   *      permissions to be granted. One can also remove mint permissions after ids
   *      mint permissions where locked down.
   * @param _range AssetRangeStruct.AssetRange struct for range of asset that can't be granted
   *               new mint permission to
   */
  function lockRangeMintPermissions(AssetRangeStruct.AssetRange memory _range) public override onlyOwner {
    require(_range.maxID < NUM_ITEM_OPTIONS || NUM_ITEM_OPTIONS <= _range.minID, 'MetacanaNFT#addMintPermission: OVERLAP_BETWEEN_BOX_AND_ITEM_RANGE');    
    
    if(_range.maxID < NUM_ITEM_OPTIONS){
      MetacanaNFT items = MetacanaNFT(nftAddress);
      items.lockRangeMintPermissions(_range);
    } else if (NUM_ITEM_OPTIONS <= _range.minID){
      MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
      lootBox.lockRangeMintPermissions(_range);
    } 
  }

  /***********************************|
  |    Supplies Management Methods    |
  |__________________________________*/

  /**
   * @notice Set max issuance for some token IDs that can't ever be increased
   * @dev Can only decrease the max issuance if already set, but can't set it *back* to 0.
   * @param _ids Sorted-ascending array of token IDs to set the max issuance
   * @param _newMaxIssuances Array of max issuances for each corresponding ID
   */
  function setMaxIssuances(uint256[] calldata _ids, uint256[] calldata _newMaxIssuances) external override onlyOwner {
    require(_ids.length == _newMaxIssuances.length, 'MetacanaNFT#setMaxIssuances: INVALID_ARRAYS_LENGTH');
    // Can only *decrease* a max issuance
    // Can't set max issuance back to 0    
    uint256 index = 0;    

    for (uint256 i = 0; i < _ids.length; i++) {
      if(_ids[i] >= NUM_ITEM_OPTIONS){
        index = index - 1;      
      }
    }

    if (index > 0){
      MetacanaNFT items = MetacanaNFT(nftAddress);
      items.setMaxIssuances(_ids[0:index], _newMaxIssuances[0:index]);
      MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
      lootBox.setMaxIssuances(_ids[index+1:], _newMaxIssuances[index+1:]);
    } else{
      MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
      lootBox.setMaxIssuances(_ids, _newMaxIssuances);
    }   
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
  function setGlobalRoyaltyInfo(address _receiver, uint96 _royaltyBasisPoints) external onlyOwner {
    MetacanaNFT items = MetacanaNFT(nftAddress);
    items.setGlobalRoyaltyInfo(_receiver, _royaltyBasisPoints);
    MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
    lootBox.setGlobalRoyaltyInfo(_receiver, _royaltyBasisPoints);
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

  function name() external pure override returns (string memory) {
    return 'Metacana Creature Accessory Pre-Sale';
  }

  function symbol() external pure override returns (string memory) {
    return 'Metacana';
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
  function burn(uint256 _id, uint256 _amount) external override {
    if(_id < NUM_ITEM_OPTIONS){
      MetacanaNFT items = MetacanaNFT(nftAddress);
      items.burn(_id, _amount);
    } else if (NUM_ITEM_OPTIONS <= _id){
      MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
      lootBox.burn(_id, _amount);
    }     
  }

  /**
   * @notice Burn _amounts of tokens of given ids from msg.sender
   * @dev This will not change the current issuance tracked in _supplyManagerAddr.
   * @param _ids     Sorted-ascending asset id to burn
   * @param _amounts The amount to be burn
   */
  function burnBatch(uint256[] calldata _ids, uint256[] calldata _amounts) external override {
    uint256 index = 0;    

    for (uint256 i = 0; i < _ids.length; i++) {
      if(_ids[i] >= NUM_ITEM_OPTIONS){
        index = index - 1;      
      }
    }

    if (index > 0){
      MetacanaNFT items = MetacanaNFT(nftAddress);
      items.burnBatch(_ids[0:index], _amounts[0:index]);
      MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
      lootBox.burnBatch(_ids[index+1:], _amounts[index+1:]);
    } else{
      MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
      lootBox.burnBatch(_ids, _amounts);
    }        
    
  }

  function supportsFactoryInterface() external pure override returns (bool) {
    return true;
  }

  function factorySchemaName() external pure override returns (string memory) {
    return 'MetacanaNFT';
  }

  function numOptions() external pure override returns (uint256) {
    return NUM_LOOTBOX_OPTIONS + NUM_ITEM_OPTIONS;
  }

  function uri(uint256 _optionId) external pure override returns (string memory) {
    return string(abi.encodePacked(baseMetadataURI, 'factory/', Strings.toString(_optionId)));
  }

  // FIXME: fix with validation
  function canMint(uint256 _optionId, uint256 _amount) external view override returns (bool) {
    return _canMint(_msgSender(), _optionId, _amount);
  }

  function getFactoryStatus(address _factory) external view override returns (bool) {
    MetacanaNFT items = MetacanaNFT(nftAddress);    
    MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
    return items.getFactoryStatus(_factory) && lootBox.getFactoryStatus(_factory);
  }

  function getFactoryAccessRanges(address _factory) external view override returns (AssetRangeStruct.AssetRange[] memory) {
    revert('UNSUPPORTED_METHOD');
  }

  function getMaxIssuances(uint256[] calldata _ids) external view override returns (uint256[] memory) {
    revert('UNSUPPORTED_METHOD');
  }

  function getCurrentIssuances(uint256[] calldata _ids) external view override returns (uint256[] memory) {
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
   * @param _ids     Sorted-ascending array of ids to mint
   * @param _amounts Array of amount of tokens to mint per id
   * @param _data    Byte array of data to pass to recipient if it's a contract
   */
  function mintBatch(
    address _to,
    uint256[] calldata _ids,
    uint256[] calldata _amounts,
    bytes memory _data
  ) external override {    
    uint256 index = 0;    

    for (uint256 i = 0; i < _ids.length; i++) {
      if(_ids[i] >= NUM_ITEM_OPTIONS){
        index = index - 1;      
      }
    }

    if (index > 0){
      MetacanaNFT items = MetacanaNFT(nftAddress);
      items.mintBatch(_to, _ids[0:index], _amounts[0:index], _data);
      MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
      lootBox.mintBatch(_to, _ids[index+1:], _amounts[index+1:], _data);
    } else{
      MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
      lootBox.mintBatch(_to, _ids, _amounts, _data);
    }          
  }

  function mint(
    address _toAddress,
    uint256 _optionId,
    uint256 _amount,
    bytes calldata _data
  ) external override nonReentrant {
    return _mint(_toAddress, _optionId, _amount, _data);
  }

  /**
   * @dev Main minting logic implemented here!
   */
  function _mint(
    address _toAddress,
    uint256 _option,
    uint256 _amount,
    bytes memory _data
  ) internal {
    require(_canMint(_msgSender(), _option, _amount), 'CreatureAccessoryFactory#_mint: CANNOT_MINT_MORE');
    if (_option < NUM_ITEM_OPTIONS) {
      require(_isOwnerOrProxy(_msgSender()) || _msgSender() == lootBoxAddress, 'Caller cannot mint accessories');
      // Items are pre-mined (by the owner), so transfer them (We are an
      // operator for the owner).
      MetacanaNFT items = MetacanaNFT(nftAddress);
      // Option is used as a token ID here
      items.safeTransferFrom(owner(), _toAddress, _option, _amount, _data);
    } else if (_option < NUM_OPTIONS) {
      require(_isOwnerOrProxy(_msgSender()), 'Caller cannot mint boxes');
      uint256 lootBoxOption = _option - NUM_ITEM_OPTIONS;
      // LootBoxes are not premined, so we need to create or mint them.
      // lootBoxOption is used as a token ID here.
      _createOrMint(lootBoxAddress, _toAddress, lootBoxOption, _amount, _data);
    } else {
      revert('Unknown _option');
    }
  }

  /*
   * Note: make sure code that calls this is non-reentrant.
   * Note: this is the token _id *within* the ERC1155 contract, not the option
   *       id from this contract.
   */
  function _createOrMint(
    address _erc1155Address,
    address _to,
    uint256 _id,
    uint256 _amount,
    bytes memory _data
  ) internal {
    MetacanaNFT tradable = MetacanaNFT(_erc1155Address);
    // Lazily create the token
    if (!tradable.exists(_id)) {
      tradable.create(_to, _id, _amount, _data);
    } else {
      tradable.mint(_to, _id, _amount, _data);
    }
  }

  /**
   * Get the factory's ownership of Option.
   * Should be the amount it can still mint.
   * NOTE: Called by `canMint`
   */
  function balanceOf(address _owner, uint256 _optionId) public view override returns (uint256) {
    if (_optionId < NUM_ITEM_OPTIONS) {
      if (!_isOwnerOrProxy(_owner) && _owner != lootBoxAddress) {
        // Only the factory's owner or owner's proxy,
        // or the lootbox can have supply
        return 0;
      }
      // The pre-minted balance belongs to the address that minted this contract
      MetacanaNFT lootBox = MetacanaNFT(nftAddress);
      // OptionId is used as a token ID here
      uint256 currentSupply = lootBox.balanceOf(owner(), _optionId);
      return currentSupply;
    } else {
      if (!_isOwnerOrProxy(_owner)) {
        // Only the factory owner or owner's proxy can have supply
        return 0;
      }
      // We explicitly calculate the token ID here
      uint256 tokenId = (_optionId - NUM_ITEM_OPTIONS);
      MetacanaNFT lootBox = MetacanaNFT(lootBoxAddress);
      uint256 currentSupply = lootBox.totalSupply(tokenId);
      // We can mint up to a balance of SUPPLY_PER_TOKEN_ID
      return SUPPLY_PER_TOKEN_ID.sub(currentSupply);
    }
  }

  function _canMint(
    address _fromAddress,
    uint256 _optionId,
    uint256 _amount
  ) internal view returns (bool) {
        
    return _amount > 0 && balanceOf(_fromAddress, _optionId) >= _amount ;
  }

  function _isOwnerOrProxy(address _address) internal view returns (bool) {
    ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
    return owner() == _address || address(proxyRegistry.proxies(owner())) == _address;
  }
}
