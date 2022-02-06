pragma solidity 0.8.3;
import "../common/AssetRange.sol";
interface IMetacanaNFT {
  /***********************************|
  |               Events              |
  |__________________________________*/

  event FactoryActivation(address indexed factory);
  event FactoryShutdown(address indexed factory);
  event MintPermissionAdded(address indexed factory, AssetRangeStruct.AssetRange new_range);
  event MintPermissionRemoved(address indexed factory, AssetRangeStruct.AssetRange deleted_range);

  /***********************************|
  |    Supplies Management Methods    |
  |__________________________________*/

  /**
   * Returns the name of this factory.
   */
  function name() external view returns (string memory);

  /**
   * Returns the symbol for this factory.
   */
  function symbol() external view returns (string memory);

  /**
   * Number of options the factory supports.
   */
  function numOptions() external view returns (uint256);

  /**
   * @dev Returns whether the option ID can be minted. Can return false if the developer wishes to
   * restrict a total supply per option ID (or overall).
   */
  function canMint(uint256 _optionId, uint256 _amount) external view returns (bool);

  /**
   * @dev Returns a URL specifying some metadata about the option. This metadata can be of the
   * same structure as the ERC1155 metadata.
   */
  function uri(uint256 _optionId) external view returns (string memory);

  /**
   * Indicates that this is a factory contract. Ideally would use EIP 165 supportsInterface()
   */
  function supportsFactoryInterface() external view returns (bool);

  /**
   * Indicates the Wyvern schema name for assets in this lootbox, e.g. "ERC1155"
   */
  function factorySchemaName() external view returns (string memory);

  ///////
  // Get things to work on Marketplace with mock methods below
  ///////

  // function safeTransferFrom(address _from, address _to, uint256 _optionId, uint256 _amount, bytes calldata _data) external;

  function balanceOf(address _owner, uint256 _optionId) external view returns (uint256);

  /**
   * @notice Set max issuance for some token IDs that can't ever be increased
   * @dev Can only decrease the max issuance if already set, but can't set it *back* to 0.
   * @param _ids Array of token IDs to set the max issuance
   * @param _newMaxIssuances Array of max issuances for each corresponding ID
   */
  // function setMaxIssuances(uint256[] calldata _ids, uint256[] calldata _newMaxIssuances) external;

  /***********************************|
  |     Factory Management Methods    |
  |__________________________________*/

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
  ) external;

  /**
   * @notice Will remove the permission a factory has to mint some token ids
   * @param _factory    Address of the factory to update permission
   * @param _rangeIndex Array's index where the range to delete is located for _factory
   */
  function removeMintPermission(address _factory, uint256 _rangeIndex) external;

  /**
   * @notice Will ALLOW factory to print some assets specified in `canPrint` mapping
   * @param _factory Address of the factory to activate
   */
  // function activateFactory(address _factory) external;

  /**
   * @notice Will DISALLOW factory to print any asset
   * @param _factory Address of the factory to shutdown
   */
  // function shutdownFactory(address _factory) external;

  /**
   * @notice Will forever prevent new mint permissions for provided ids
   * @param _range AssetRangeStruct.AssetRange struct for range of asset that can't be granted
   *               new mint permission to
   */
  // function lockRangeMintPermissions(AssetRangeStruct.AssetRange calldata _range) external;

  /***********************************|
  |         Getter Functions          |
  |__________________________________*/

  /**
   * @return Returns whether a factory is active or not
   */
  // function getFactoryStatus(address _factory) external view returns (bool);

  /**
   * @return Returns whether the sale has ended or not
   */
  // function getFactoryAccessRanges(address _factory) external view returns (AssetRangeStruct.AssetRange[] memory);

  /**
   * @notice Get the max issuance of multiple asset IDs
   * @dev The max issuance of a token does not reflect the maximum supply, only
   *      how many tokens can be minted once the maxIssuance for a token is set.
   * @param _ids Array containing the assets IDs
   * @return The current max issuance of each asset ID in _ids
   */
  // function getMaxIssuances(uint256[] calldata _ids) external view returns (uint256[] memory);

  /**
   * @notice Get the current issuanc of multiple asset ID
   * @dev The current issuance of a token does not reflect the current supply, only
   *      how many tokens since a max issuance was set for a given token id.
   * @param _ids Array containing the assets IDs
   * @return The current issuance of each asset ID in _ids
   */
  // function getCurrentIssuances(uint256[] calldata _ids) external view returns (uint256[] memory);

  /***************************************|
  |           Minting Functions           |
  |______________________________________*/

  /**
   * @dev Mint _amount of tokens of a given id if not frozen and if max supply not exceeded
   * @param _to     The address to mint tokens to.
   * @param _id     Token id to mint
   * @param _amount The amount to be minted
   * @param _data   Byte array of data to pass to recipient if it's a contract
   */
  function mint(
    address _to,
    uint256 _id,
    uint256 _amount,
    bytes calldata _data
  ) external;

  /**
   * @dev Mint tokens for each ids in _ids
   * @param _to      The address to mint tokens to.
   * @param _ids     Array of ids to mint
   * @param _amounts Array of amount of tokens to mint per id
   * @param _data    Byte array of data to pass to recipient if it's a contract
   */
  function mintBatch(
    address _to,
    uint256[] calldata _ids,
    uint256[] calldata _amounts,
    bytes calldata _data
  ) external;

  /***************************************|
  |           Burning Functions           |
  |______________________________________*/

  /**
   * @notice Burn sender's_amount of tokens of a given token id
   * @param _id      Token id to burn
   * @param _amount  The amount to be burned
   */
  function burn(uint256 _id, uint256 _amount) external;

  /**
   * @notice Burn sender's tokens of given token id for each (_ids[i], _amounts[i]) pair
   * @param _ids      Array of token ids to burn
   * @param _amounts  Array of the amount to be burned
   */
  function burnBatch(uint256[] calldata _ids, uint256[] calldata _amounts) external;
}
