pragma solidity 0.8.3;


import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract ERC1155Mock is ERC1155Burnable {

  constructor(string memory uri) ERC1155(uri) {}

  function mint(
        address to,
        uint256 id,
        uint256 value,
        bytes memory data
    ) public {
        _mint(to, id, value, data);
    }

}