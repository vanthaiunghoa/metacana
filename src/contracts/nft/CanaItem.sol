// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Multicall.sol";

import "@openzeppelin/contracts/utils/Strings.sol";
import './CanaERC1155.sol';

// import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";

/// @custom:security-contact develop.iglobal@gmail.com
contract CanaItem is
    CanaERC1155
{
    using SafeMath for uint256;
    
    mapping(uint256 => uint8) public numOfMint;
    mapping(uint256 => uint8) public levels;
    mapping(uint256 => uint8) public nature;
    mapping(uint256 => bool) public isGenesis;
    mapping(uint256 => uint256) public lastMintTime;
    uint8 public totalGenesis;

    uint8 MAX_NUM_GENESIS_MINT = 3;
    uint8 MAX_NUM_ORDINARY_MINT = 5;
    uint8 DAYS_BETWEEN_GENESIS_MINT = 5;
    uint8 DAYS_BETWEEN_ORDINARY_MINT = 5;

    uint8 MIN_REQUIRED_LEVEL_GENESIS_TO_MINT = 15;
    uint8 MIN_REQUIRED_LEVEL_ORDINARY_TO_MINT = 20;    
    
    mapping(uint256 => bool) public lockedTokens;    

    constructor() {
        
    }       

    function setMaxNumGenesisMint(uint8 _max) external onlyOwner {
        MAX_NUM_GENESIS_MINT = _max;
    }

    function getMaxNumGenesisMint() public view returns (uint8){
        return MAX_NUM_GENESIS_MINT;
    }

    function setMaxNumOrdinaryMint(uint8 _max) external onlyOwner {
        MAX_NUM_ORDINARY_MINT = _max;
    }

    function getMaxNumOrdinaryMint() public view returns (uint8){
        return MAX_NUM_ORDINARY_MINT;
    }

    function setDaysBetweenGenesisMint(uint8 _days) external onlyOwner {
        DAYS_BETWEEN_GENESIS_MINT = _days;
    }    

    function getDaysBetweenGenesisMint() public view returns (uint8){
        return DAYS_BETWEEN_GENESIS_MINT;
    }

    function setDaysBetweenOrdinaryMint(uint8 _days) external onlyOwner {
        DAYS_BETWEEN_ORDINARY_MINT = _days;
    }    

    function getDaysBetweenOrdinaryMint() public view returns (uint8){
        return DAYS_BETWEEN_ORDINARY_MINT;
    }

    function setMinLevelRequiredGenesisToMint(uint8 _min) external onlyOwner {
        MIN_REQUIRED_LEVEL_GENESIS_TO_MINT = _min;
    }

    function getMinLevelRequiredGenesisToMint() public view returns (uint8){
        return MIN_REQUIRED_LEVEL_GENESIS_TO_MINT;
    }

    function setMinLevelRequiredOrdinaryToMint(uint8 _min) external onlyOwner {
        MIN_REQUIRED_LEVEL_ORDINARY_TO_MINT = _min;
    }

    function getMinLevelRequiredOrdinaryToMint() public view returns (uint8){
        return MIN_REQUIRED_LEVEL_ORDINARY_TO_MINT;
    }        

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override whenNotPaused {
        for (uint256 i = 0; i < ids.length; i++) {
            require(!lockedTokens[ids[i]], "Can not transfer locked token");
        }
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }


    /**
     * @dev Lock token to use in game or for rental
     */
    function lock(uint256 tokenId) public {
        require(
            approvalWhitelists[_msgSender()],
            "Must be valid approval whitelist"
        );
        require(exists(tokenId), "Must be valid tokenId");
        require(!lockedTokens[tokenId], "Token has already locked");
        lockedTokens[tokenId] = true;
    }

    /**
     * @dev Unlock token to use blockchain or sale on marketplace
     */
    function unlock(uint256 tokenId) public {
        require(
            approvalWhitelists[_msgSender()],
            "Must be valid approval whitelist"
        );
        require(exists(tokenId), "Must be valid tokenId");
        require(lockedTokens[tokenId], "Token has already unlocked");
        lockedTokens[tokenId] = false;
    }

    /**
     * @dev Get lock status
     */
    function isLocked(uint256 tokenId) public view returns (bool) {
        return lockedTokens[tokenId];
    }
    
}
