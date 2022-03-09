// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Multicall.sol";

import "@openzeppelin/contracts/utils/Strings.sol";

// import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";

/// @custom:security-contact develop.iglobal@gmail.com
contract CanaItem is
    ERC1155,
    Ownable,
    Pausable,
    ERC1155Burnable,
    ERC1155Supply,
    // AccessControlEnumerable,
    Multicall
{
    using SafeMath for uint256;

    mapping(address => bool) public approvalWhitelists;
    mapping(uint256 => bool) public lockedTokens;    

    constructor() ERC1155("https://asset.metacana.io/api") {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public virtual onlyOwner {
        _mint(account, id, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Supply) whenNotPaused {
        for (uint256 i = 0; i < ids.length; i++) {
            require(!lockedTokens[ids[i]], "Can not transfer locked token");
        }
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    /**
     * Override isApprovedForAll to whitelist user's Marketplace proxy accounts to enable gas-free listings.
     */
    function isApprovedForAll(address _owner, address _operator)
        public
        view
        override
        returns (bool isOperator)
    {
        if (approvalWhitelists[_operator] == true) {
            return true;
        }
        return ERC1155.isApprovedForAll(_owner, _operator);
    }

    function addApprovalWhitelist(address proxy) public onlyOwner {
        require(approvalWhitelists[proxy] == false, "Invalid proxy address");

        approvalWhitelists[proxy] = true;
    }

    /**
     * @dev Remove operation from approval list.
     */
    function removeApprovalWhitelist(address proxy) public onlyOwner {
        approvalWhitelists[proxy] = false;
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

    /**
     * @dev Require _msgSender() to own more than 0 of the token id
     */
    modifier ownersOnly(uint256 _id) {
        require(balanceOf(_msgSender(), _id) > 0, "NFT#ownersOnly:ONLY_OWNERS");
        _;
    }

    /**
     * @dev Creates a new token type and assigns _initialSupply to an address
     * NOTE: remove onlyOwner if you want third parties to create new tokens on
     *       your contract (which may change your IDs)
     * NOTE: The token id must be passed. This allows lazy creation of tokens or
     *       creating NFTs by setting the id's high bits with the method
     *       described in ERC1155 or to use ids representing values other than
     *       successive small integers. If you wish to create ids as successive
     *       small integers you can either subclass this class to count onchain
     *       or maintain the offchain cache of identifiers recommended in
     *       ERC1155 and calculate successive ids from that.
     * @param _initialOwner address of the first owner of the token
     * @param _id The id of the token to create (must not currenty exist).
     * @param _initialSupply amount to supply the first owner
     * @param _data Data to pass if receiver is contract
     * @return The newly created token ID
     */
    function create(
        address _initialOwner,
        uint256 _id,
        uint256 _initialSupply,
        bytes memory _data
    ) public onlyOwner returns (uint256) {
        require(
            !exists(_id), //"create:token_id_exist"
            string(
                abi.encodePacked(
                    "create:token_id_exist: ",
                    Strings.toString(_id)
                )
            )
        );               

        _mint(_initialOwner, _id, _initialSupply, _data);

        return _id;
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
    function burn(uint256 _id, uint256 _amount) external {
        _burn(msg.sender, _id, _amount);
    }

    /**
     * @notice Burn _amounts of tokens of given ids from msg.sender
     * @dev This will not change the current issuance tracked in _supplyManagerAddr.
     * @param _ids     Asset id to burn
     * @param _amounts The amount to be burn
     */
    function burnBatch(uint256[] calldata _ids, uint256[] calldata _amounts)
        external
    {
        _burnBatch(msg.sender, _ids, _amounts);
    }

    function supportsInterface(bytes4 _interfaceID)
        public
        view
        override(
            ERC1155 /*, AccessControlEnumerable*/
        )
        returns (bool)
    {
        return ERC1155.supportsInterface(_interfaceID); // || AccessControlEnumerable.supportsInterface(_interfaceID);
    }
}
