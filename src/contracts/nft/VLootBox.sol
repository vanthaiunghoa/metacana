// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./CanaERC1155.sol";
import "./CanaBoxLib.sol";

abstract contract LootBox {
    function unpack(
    uint256 _optionId,
    address _toAddress, //0 -> final one, #0 -> unpack -> unpack
    uint256 _amount
  ) external returns (uint256 attId, uint256 classId);
}

/**
 * @title VLootBox
 * VLootBox - a randomized and openable lootbox of Creature
 * Accessories. We may need to set range for minting tokens
 */
contract VLootBox is Ownable, ReentrancyGuard, Multicall {
  using CanaBoxLib for CanaBoxLib.LootBoxRandomnessState;
  using SafeMath for uint256;

  event LootBoxOpened(uint256 indexed optionId, address indexed buyer, uint256 boxesPurchased, uint256 tokenId, uint256 classId, uint256 attId);

  CanaBoxLib.LootBoxRandomnessState state;


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
    uint16[] memory _guarantees,
    int16[] memory _maxPerClass
  ) public onlyOwner {
    CanaBoxLib.setOptionSettings(state, _option, _maxQuantityPerOpen, _classProbabilities, _guarantees, _maxPerClass);
  }

  ///////
  // MAIN FUNCTIONS
  //////

  function unpack(
    uint256 _optionId,
    address _toAddress, //0 -> final one, #0 -> unpack -> unpack
    uint256 _amount
  ) external returns (uint256 attId, uint256 classId) {
    // This will underflow if _msgSender() does not own enough tokens.
    // _burn(_msgSender(), _optionId, _amount);
    
    (uint256 attId, uint256 classId) = CanaBoxLib._mint(state, _optionId, /*_toAddress,*/ _amount, ""/*, address(this)*/); 
    // Mint nfts contained by LootBox  
    //1st U -> v-id -> check v-id if CH or IS (IS -> autoIdCreate else mint(v-id))
    if(state.factoryAddress != address(0) && _toAddress != address(0)) {//mint & fusion
      Factory factory = Factory(state.factoryAddress); // ch or is?
      uint256 tokenId = factory.autoIdCreate(_toAddress, _amount, "");
      uint256 tokenId = factory.createOrMint(attId, _toAddress, _amount, "");
      emit LootBoxOpened(_optionId, _toAddress, _amount, tokenId, classId, attId);
    }
    
    return (attId, classId);
    
  }

}