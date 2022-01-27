// SPDX-License-Identifier: MIT

pragma solidity ^0.7.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "../tokens/MetacanaAssets.sol";
import "./LootBoxRandomness.sol";


/**
 * @title CreatureAccessoryLootBox
 * CreatureAccessoryLootBox - a randomized and openable lootbox of Creature
 * Accessories. We may need to set range for minting tokens
 */
contract CreatureAccessoryLootBox is MetacanaAssets, ReentrancyGuard {
  using LootBoxRandomness for LootBoxRandomness.LootBoxRandomnessState;
  using SafeMath for uint256;

  LootBoxRandomness.LootBoxRandomnessState state;

  /**
   * @dev Example constructor. Sets minimal configuration.
   * @param _firstOwner The address of the Metacana owner
   */
  constructor(address _firstOwner)
  MetacanaAssets(
    _firstOwner
  ) {}

  function setState(
    address _factoryAddress, 
    uint256 _numOptions,
    uint256 _numClasses,
    uint256 _seed
  ) public onlyOwner {
    LootBoxRandomness.initState(state, _factoryAddress, _numOptions, _numClasses, _seed);
  }

  function setTokenIdsForClass(
    uint256 _classId,
    uint256[] memory _tokenIds
  ) public onlyOwner {
      LootBoxRandomness.setTokenIdsForClass(state, _classId, _tokenIds);
  }

  function setOptionSettings(
    uint256 _option,
    uint256 _maxQuantityPerOpen,
    uint16[] memory _classProbabilities,
    uint16[] memory _guarantees
  ) public onlyOwner {
    LootBoxRandomness.setOptionSettings(state, _option, _maxQuantityPerOpen, _classProbabilities, _guarantees);
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
    LootBoxRandomness._mint(state, _optionId, _toAddress, _amount, "", address(this));
  }

  /**
   *  @dev Mint the token/option id.
   */
  function mint(
    address _to,
    uint256 _optionId,
    uint256 _amount,
    bytes memory _data
  ) override external nonReentrant {
    require(_isOwnerOrProxy(_msgSender()), "Lootbox: owner or proxy only");
    require(_optionId < state.numOptions, "Lootbox: Invalid Option");
    // Option ID is used as a token ID here
    tokenSupply[_optionId] = tokenSupply[_optionId].add(_amount);
    super._mint(_to, _optionId, _amount, _data);
  }

  function _isOwnerOrProxy(
    address _address
  ) internal view returns (bool) {    
    return ((getOwner() == _address) || (isFactoryActive[_address] == true));
  }
}
