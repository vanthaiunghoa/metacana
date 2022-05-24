// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/Multicall.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import '@openzeppelin/contracts/utils/Strings.sol';
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import './CanaERC1155.sol';

/**
 * @title CanaItemFactory
 * CreatureAccessory - a factory contract for Creature Accessory semi-fungible
 * tokens.
 */
contract CanaItemFactory is Ownable, ReentrancyGuard, AccessControlEnumerable, Multicall {
  using Strings for string;
  using SafeMath for uint256;

  address public nftAddress;
  address public lootBoxAddress;
  string internal constant baseMetadataURI = 'https://asset.metacana.io/api/';
  uint256 constant UINT256_MAX = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe;//~uint256(0);

  /*
   * Optionally set this to a small integer to enforce limited existence per option/token ID
   * (Otherwise rely on sell orders on Marketplace, which can only be made by the factory owner.)
   */
  uint256 constant SUPPLY_PER_TOKEN_ID = UINT256_MAX;

  // The number of creature accessories (not creature accessory rarity classes!)
  uint256 constant NUM_ITEM_OPTIONS = 48;

  /*
   * Three different options for minting CreatureAccessories (basic, premium, and gold).
   * Commented out the below to reduce contract size
   */
  // uint256 public constant BASIC_LOOTBOX = NUM_ITEM_OPTIONS + 0;
  // uint256 public constant PREMIUM_LOOTBOX = NUM_ITEM_OPTIONS + 1;
  // uint256 public constant GOLD_LOOTBOX = NUM_ITEM_OPTIONS + 2;
  uint256 public constant NUM_LOOTBOX_OPTIONS = 5;

  uint256 public constant NUM_OPTIONS = NUM_ITEM_OPTIONS + NUM_LOOTBOX_OPTIONS;

  constructor(
    // address _proxyRegistryAddress,
    address _nftAddress,
    address _lootBoxAddress
  ) {
    // proxyRegistryAddress = _proxyRegistryAddress;
    nftAddress = _nftAddress;
    lootBoxAddress = _lootBoxAddress;
  }

  function name() external pure returns (string memory) {
    return 'Metacana Creature Accessory Pre-Sale';
  }

  function symbol() external pure returns (string memory) {
    return 'Metacana';
  }

  function numOptions() external pure returns (uint256) {
    return NUM_LOOTBOX_OPTIONS + NUM_ITEM_OPTIONS;
  }

  function uri(uint256 _optionId) external pure returns (string memory) {
    return string(abi.encodePacked(baseMetadataURI, 'factory/', Strings.toString(_optionId)));
  }

  // FIXME: fix with validation
  function canMint(uint256 _optionId, uint256 _amount) external view returns (bool) {
    return _canMint(_msgSender(), _optionId, _amount);
  }


  /**
   * @dev Auto-generate id and mint NFT with it, just for the accessory only!
   */
  function autoIdCreate(
    address _toAddress,    
    uint256 _amount,
    bytes calldata _data
  ) public nonReentrant returns (uint256){
    CanaERC1155 items = CanaERC1155(nftAddress);
    return items.autoIdCreate(_toAddress, "", _amount, _data);
  }

  function mint(
    address _toAddress,
    uint256 _optionId,
    uint256 _amount,
    bytes calldata _data
  ) external nonReentrant {
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
    bool isItem = IERC1155(lootBoxAddress).supportsInterface(0xd9b67a26);
    require(isItem || _canMint(_msgSender(), _option, _amount), 'CanaItemFactory#_mint: CANNOT_MINT_MORE');
    if(isItem){
      if (_option < NUM_ITEM_OPTIONS) {
        require(_isOwnerOrProxy(_msgSender()) || _msgSender() == lootBoxAddress, 'Caller cannot mint accessories');
        // Items are pre-mined (by the owner), so transfer them (We are an
        // operator for the owner).
        CanaERC1155 items = CanaERC1155(nftAddress);
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
    } else {
      //Should check if mint (CH) or create a new Id (IS)
      require(_isOwnerOrProxy(_msgSender()), 'Caller cannot mint boxes');
      uint256 lootBoxOption = _option - NUM_ITEM_OPTIONS;     
      _createOrMint(nftAddress, _toAddress, lootBoxOption, _amount, _data);
    }   
  }

  /*
   * Note: make sure code that calls this is non-reentrant.
   * Note: this is the token _id *within* the CanaERC1155 contract, not the option
   *       id from this contract.
   */
  function _createOrMint(
    address _erc1155Address,
    address _to,
    uint256 _id,
    uint256 _amount,
    bytes memory _data
  ) internal {
    CanaERC1155 tradable = CanaERC1155(_erc1155Address);
    // Lazily create the token
    if (!tradable.exists(_id)) {//Lootbox must be pre-created
      // tradable.create(_to, _id, _amount, _data);
      uint256 tokenId = tradable.autoIdCreate(_to, _id, _amount, _data);
    } else {
      tradable.mint(_to, _id, _amount, _data); //->CH
    }
  }

  /**
   * Get the factory's ownership of Option.
   * Should be the amount it can still mint.
   * NOTE: Called by `canMint`
   * Meta: 0x0e89341c
   * Main: 0xd9b67a26--> check IERC1155(contractAddress).supportsInterface(0xd9b67a26)
   */
  function balanceOf(address _owner, uint256 _optionId) public view returns (uint256) {
    if (_optionId < NUM_ITEM_OPTIONS) {
      if (!_isOwnerOrProxy(_owner) && _owner != lootBoxAddress) {
        // Only the factory's owner or owner's proxy,
        // or the lootbox can have supply
        return 0;
      }
      // The pre-minted balance belongs to the address that minted this contract
      CanaERC1155 lootBox = CanaERC1155(nftAddress);
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
      CanaERC1155 lootBox = CanaERC1155(lootBoxAddress);
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
        
    return (_amount > 0 && balanceOf(_fromAddress, _optionId) >= _amount) ;
  }

  function _isOwnerOrProxy(address _address) internal view returns (bool) {
    // ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
    return owner() == _address /*|| address(proxyRegistry.proxies(owner())) == _address*/;
  }
}
