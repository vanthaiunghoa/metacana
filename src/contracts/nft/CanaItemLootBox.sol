// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./CanaItem.sol";
import "./CanaBoxLib.sol";


/**
 * @title CanaItemLootBox
 * CanaItemLootBox - a randomized and openable lootbox of Creature
 * Accessories. We may need to set range for minting tokens
 */
contract CanaItemLootBox is CanaItem, ReentrancyGuard {
  using CanaBoxLib for CanaBoxLib.LootBoxRandomnessState;
  using SafeMath for uint256;

  event LootBoxOpened(uint256 indexed optionId, address indexed buyer, uint256 boxesPurchased, uint256 lastOpenedTokenId/*itemsMinted*/);

  CanaBoxLib.LootBoxRandomnessState state;

  /**
   * @dev Example constructor. Sets minimal configuration.
   * param _proxyRegistryAddress The address of the Metacana proxy registry
   *                              On testnet: 
   *                              On mainnet: 
   */
  constructor()
  CanaItem(    
  ) {}

  function setState(
    address _factoryAddress,
    uint256 _numOptions,
    uint256 _numClasses,
    uint256 _seed
  ) public onlyOwner {
    CanaBoxLib.initState(state, _factoryAddress, _numOptions, _numClasses, _seed);
  }

  function setTokenIdsForClass(
    uint256 _optionId,
    uint256 _classId,
    uint256[] memory _tokenIds
  ) public onlyOwner {
      CanaBoxLib.setTokenIdsForClass(state, _optionId, _classId, _tokenIds);
  }

  function setOptionSettings(
    uint256 _option,
    uint256 _maxQuantityPerOpen,
    uint16[] memory _classProbabilities,
    uint16[] memory _guarantees
  ) public onlyOwner {
    CanaBoxLib.setOptionSettings(state, _option, _maxQuantityPerOpen, _classProbabilities, _guarantees);
  }

  ///////
  // MAIN FUNCTIONS
  //////

  function unpack(
    uint256 _optionId,
    address _toAddress,
    uint256 _amount
  ) external {
    // This will underflow if _msgSender() does not own enough tokens.
    _burn(_msgSender(), _optionId, _amount);
    // Mint nfts contained by LootBox
    uint256 lastOpenedTokenId = CanaBoxLib._mint(state, _optionId, _toAddress, _amount, "", address(this));
    emit LootBoxOpened(_optionId, _toAddress, _amount, lastOpenedTokenId);
  }

  /**
   *  @dev Mint the token/option id.
   */
  function mint(
    address _to,
    uint256 _optionId,
    uint256 _amount,
    bytes memory _data
  ) override public nonReentrant {
    require(_isOwnerOrProxy(_msgSender()), "Lootbox: owner or proxy only");
    require(_optionId < state.numOptions, "Lootbox: Invalid Option");
    // Option ID is used as a token ID here
    _mint(_to, _optionId, _amount, _data);
  }

  /**
   *  @dev track the number of tokens minted.
   */
  function _mint(
    address _to,
    uint256 _id,
    uint256 _quantity,
    bytes memory _data
  ) override internal  {    
    super._mint(_to, _id, _quantity, _data);
  }

  function _isOwnerOrProxy(
    address _address
  ) internal view returns (bool) {
    // ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
    return owner() == _address/* || address(proxyRegistry.proxies(owner())) == _address*/;
  }
}