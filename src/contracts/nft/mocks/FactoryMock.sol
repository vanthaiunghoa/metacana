pragma solidity 0.7.4;
import "../interfaces/IMetacanaAssets.sol";

contract FactoryMock {

  IMetacanaAssets internal metacanaAssets; //Metacana Curencies Factory Manager Contract

  constructor(address _factoryManagerAddr) public {
    metacanaAssets = IMetacanaAssets(_factoryManagerAddr);
  }

  function batchMint(
    address _to,
    uint256[] memory _ids,
    uint256[] memory _amounts,
    bytes memory _data) public
  {
    metacanaAssets.batchMint(_to, _ids, _amounts, _data);
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