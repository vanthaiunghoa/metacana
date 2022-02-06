pragma solidity 0.8.3;
import "../interfaces/IMetacanaNFT.sol";

contract FactoryMock {

  IMetacanaNFT internal metacanaAssets; //Metacana Curencies Factory Manager Contract

  constructor(address _factoryManagerAddr) public {
    metacanaAssets = IMetacanaNFT(_factoryManagerAddr);
  }

  function mintBatch(
    address _to,
    uint256[] memory _ids,
    uint256[] memory _amounts,
    bytes memory _data) public
  {
    metacanaAssets.mintBatch(_to, _ids, _amounts, _data);
  }

  function mint(
    address _to,
    uint256 _id,
    uint256 _amount,
    bytes memory _data) public
  {
    metacanaAssets.mint(_to, _id, _amount, _data);
  }

}