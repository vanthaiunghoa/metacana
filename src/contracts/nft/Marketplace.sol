// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
// import1 "../interfaces/IMetacanaNFT.sol";

contract Marketplace is Ownable {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    uint256 constant SELL_MAX = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe - 1;//~uint256(0) - 1;

    // Supported payment token WETH & list of authorized ERC20
    mapping(address => bool) public paymentTokens;
    mapping(bytes => uint256) public usedSignatures;

    // Address to receive transaction fee
    address public feeToAddress;
    uint256 public transactionFee;
    //rounds
    uint16[] public rounds; // rndId --> amount
    uint64[3] public times;
    uint256 totalPrivate;
    uint256 totalWhitelist;

    mapping(address => uint256) public privateSales;
    mapping(address => uint256) public whitelistSales;

    // Events
    event MatchTransaction(
        uint256 indexed tokenId,
        address contractAddress,
        address paymentToken,
        address seller,
        address buyer,
        uint256 round,
        uint256 price,        
        uint256 buyerAmount,
        uint256 sellerAmount,
        uint256 fee
    );

    function setFeeToAddress(address _feeToAddress) external onlyOwner {
        feeToAddress = _feeToAddress;
    }

    function setTransactionFee(uint256 _transactionFee) external onlyOwner {
        transactionFee = _transactionFee;
    }

    function setRounds(uint16[] calldata _rounds) external onlyOwner {
        rounds = _rounds;
    }

    //Fixed id
    function _setPrivate(address recv, uint256 amount) internal onlyOwner {
        require(block.timestamp < times[1] && block.timestamp >= times[0], 'Marketplace#setPrivate:not_in_private_sale');
        require(amount > 0, 'Marketplace#setPrivate:amount_must_be_greater_than_0');
        require(totalPrivate + amount <= rounds[0], 'Marketplace#setPrivate:round_is_fulfilled');
        privateSales[recv] = amount;
        totalPrivate += amount;
    }

    function _removePrivate(address recv) internal onlyOwner {
        delete privateSales[recv];
    }

    function setPrivate(address recv, uint256 amount) external onlyOwner {
        return _setPrivate(recv, amount);
    }

    function removePrivate(address recv) external onlyOwner {
        _removePrivate(recv);
    }

    //Fixed id
    function _setWhitelist(address recv, uint256 amount) internal onlyOwner {
        require(block.timestamp >= times[1] && block.timestamp <= times[2], 'Marketplace#not_in_whitelist_sale');
        require(amount > 0, 'Marketplace#setWhitelist:amount_must_be_greater_than_0');
        require(totalWhitelist + amount <= rounds[1], 'Marketplace#setWhitelist:round_is_fulfilled');
        whitelistSales[recv] = amount;
    }

    function _removeWhitelist(address recv) internal onlyOwner {
        delete whitelistSales[recv];
    }

    function setWhitelist(address recv, uint256 amount) internal onlyOwner {
        return _setWhitelist(recv, amount);
    }

    function removeWhitelisth(address recv) external onlyOwner {
        _removeWhitelist(recv);
    }

    function setPrivateBatch(address[] calldata recvs, uint256[] calldata amounts) external onlyOwner {
        require(recvs.length == amounts.length, 'Marketplace#setPrivateBatch:length_mismatched');
        uint256 _amounts = amounts[0];
        for(uint256 i = 1; i < recvs.length; i++){
            _amounts += amounts[i];
        }
        require(totalPrivate + _amounts <= rounds[1], 'Marketplace#setPrivateBatch:round_is_fulfilled');
        for(uint256 i = 0; i < recvs.length; i++){
            _setPrivate(recvs[i], amounts[i]);
        }
    }

    function setWhitelistBatch(address[] calldata recvs, uint256[] calldata amounts) external onlyOwner {
        require(recvs.length == amounts.length, 'Marketplace#setWhitelistBatch:length_mismatched');
        uint256 _amounts = amounts[0];
        for(uint256 i = 1; i < recvs.length; i++){
            _amounts += amounts[i];
        }
        require(totalWhitelist + _amounts <= rounds[1], 'Marketplace#setWhitelistBatch:round_is_fulfilled');
        for(uint256 i = 0; i < recvs.length; i++){
            _setWhitelist(recvs[i], amounts[i]);
        }
    }

    function setTimes(uint64[3] calldata _times) external onlyOwner {
        times = _times;
    }

    function setPaymentTokens(address[] calldata _paymentTokens)
        external
        onlyOwner
    {
        for (uint256 i = 0; i < _paymentTokens.length; i++) {
            if (paymentTokens[_paymentTokens[i]] == true) {
                continue;
            }

            paymentTokens[_paymentTokens[i]] = true;
        }
    }

    function removePaymentTokens(address[] calldata _removedPaymentTokens)
        external
        onlyOwner
    {
        for (uint256 i = 0; i < _removedPaymentTokens.length; i++) {
            paymentTokens[_removedPaymentTokens[i]] = false;
        }
    }

    function ignoreSignature(
        address[2] calldata addresses,
        uint256[5] calldata values,
        bytes calldata signature
    ) external {
        bytes32 criteriaMessageHash = getMessageHash(
            addresses[0],  
            _msgSender(),          
            addresses[1],
            values[0],
            values[1],
            values[2],
            values[3],
            values[4]
        );

        bytes32 ethSignedMessageHash = ECDSA.toEthSignedMessageHash(
            criteriaMessageHash
        );

        require(
            ECDSA.recover(ethSignedMessageHash, signature) == _msgSender(),
            "Marketplace: invalid seller signature"
        );

        usedSignatures[signature] = SELL_MAX + uint16(1);
    }

    /**
     * @dev Function matched transaction with user signatures
     */
    function matchTransaction(
        address[3] calldata addresses,
        uint256[6] calldata values,
        bytes calldata signature
    ) external returns (bool) {  
        if(values[0] > 1 && values[1] > 1) {
            require(block.timestamp > times[2], 'Marketplace:TICI_is_not_in_correct_round');
        }                    
        if(values[0] == 0){ 
            require(values[1] == 0, 'Marketplace:invalid_token_id');
            require(privateSales[_msgSender()] == values[4] && values[3] == values[4] && values[3] > 0, 
                string(abi.encodePacked(
                    "Marketplace:invalid_amount=",
                    privateSales[_msgSender()], ",values[4]=", values[4], ",values[3]=",values[3]
                )));//'Marketplace:invalid_amount');
            require(addresses[2] == address(0), 'Marketplace:invalid_payment_address');                                   
        } else if(values[0] == 1){
            require(whitelistSales[_msgSender()] == values[4] && values[3] == values[4] && values[3] > 0, 'Marketplace:invalid_amount');
        }       

        require(
            paymentTokens[addresses[2]] == true || values[0] == 0,
            "Marketplace: invalid payment method"
        );

        require(
            usedSignatures[signature] == 0 || usedSignatures[signature] + values[3] <= values[4],
            "Marketplace: signature used or out of seller's assets"
        );        

        bytes32 criteriaMessageHash = getMessageHash(
            addresses[1],
            values[0] != 1 && values[0] != 0?address(0):_msgSender(),
            addresses[2],                     
            values[0],            
            values[1],
            values[2],
            values[4],
            values[5]
        );

        bytes32 ethSignedMessageHash = ECDSA.toEthSignedMessageHash(
            criteriaMessageHash
        );

        require(
            ECDSA.recover(ethSignedMessageHash, signature) == addresses[0],
            "Marketplace: invalid seller signature"
        );

        // check current ownership
        IERC1155 nft = IERC1155(addresses[1]);
        require(
            // nft.ownerOf(values[0]) == addresses[0],
            nft.balanceOf(addresses[0], values[0]) > 0,
            "Marketplace: seller is not owner of this item now"
        );

        // Check payment approval and buyer balance
        if(values[0] != 0 || ((values[0] > 1) && values[1] > 1) && addresses[2] == address(0)){
            IERC20 paymentContract = IERC20(addresses[2]);
            require(
                paymentContract.balanceOf(_msgSender()) >= values[2],
                "Marketplace: buyer doesn't have enough token to buy this item"
            );
            require(
                paymentContract.allowance(_msgSender(), address(this)) >= values[2],
                "Marketplace: buyer doesn't approve marketplace to spend payment amount"
            );

            // We divide by 10000 to support decimal value such as 4.25% => 425 / 10000
            uint256 fee = transactionFee.mul(values[2]).div(10000);
            uint256 payToSellerAmount = values[2].sub(fee);

            // transfer money to seller
            paymentContract.safeTransferFrom(
                _msgSender(),
                addresses[0],
                payToSellerAmount
            );

            // transfer fee to address
            if (fee > 0) {
                paymentContract.safeTransferFrom(_msgSender(), feeToAddress, fee);
            }
        }        

        // transfer item to buyer
        nft.safeTransferFrom(addresses[0], _msgSender(), values[1], values[3], signature);
        usedSignatures[signature] += values[3];
        if(values[0] == 0){
            privateSales[_msgSender()] = 0;
        } else if(values[0] == 1){
            whitelistSales[_msgSender()] = 0;
        }
        // emit sale event
        emitEvent(addresses, values);
        return true;
    }

    /**
     * @dev Function to emit transaction matched event
     */
    function emitEvent(
        address[3] calldata addresses,
        uint256[6] calldata values
    ) internal {
        emit MatchTransaction(
            values[1],
            addresses[1],            
            addresses[2],
            addresses[0],
            _msgSender(),
            values[0],
            values[2],
            values[3],
            values[4],
            transactionFee
        );
    }

    function getMessageHash(
        address _nftAddress,
		address _buyerAddress,        
        address _paymentErc20,
        uint256 _roundId,
		uint256 _tokenId,
        uint256 _price,
        uint256 _amount,
        uint256 _saltNonce        
    ) public pure returns (bytes32) {
        return
            keccak256(
                abi.encodePacked(
                    _nftAddress,
                    _buyerAddress,// for compability with pre-sale processing...
                    _paymentErc20,
                    _roundId,
                    _tokenId,                    
                    _price,                    
                    _amount,
                    _saltNonce
                )
            );
    }
}