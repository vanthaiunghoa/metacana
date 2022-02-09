"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TokenRecover__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        name: "denyList",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenAmount",
                type: "uint256"
            },
        ],
        name: "recover",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b610094565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610680806100a36000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063715018a611610050578063715018a6146100b95780638da5cb5b146100c1578063f2fde38b146100e957610067565b8063406821521461006c5780635705ae43146100a4575b600080fd5b61008f61007a3660046105e0565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100b76100b2366004610601565b6100fc565b005b6100b7610385565b60005460405173ffffffffffffffffffffffffffffffffffffffff909116815260200161009b565b6100b76100f73660046105e0565b610412565b60005473ffffffffffffffffffffffffffffffffffffffff163314610182576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526001602052604090205460ff1615610238576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f546f6b656e5265636f766572237265636f7665723a2043616e6e6f742072656360448201527f6f76657220746f6b656e732066726f6d207468652064656e796c6973740000006064820152608401610179565b73ffffffffffffffffffffffffffffffffffffffff821661029f576000805460405173ffffffffffffffffffffffffffffffffffffffff9091169183156108fc02918491818181858888f19350505050158015610299573d6000803e3d6000fd5b50610381565b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6102da60005473ffffffffffffffffffffffffffffffffffffffff1690565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff909116600482015260248101849052604401602060405180830381600087803b15801561034757600080fd5b505af115801561035b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037f919061062a565b505b5050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610406576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610179565b6104106000610542565b565b60005473ffffffffffffffffffffffffffffffffffffffff163314610493576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610179565b73ffffffffffffffffffffffffffffffffffffffff8116610536576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610179565b61053f81610542565b50565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803573ffffffffffffffffffffffffffffffffffffffff811681146105db57600080fd5b919050565b6000602082840312156105f1578081fd5b6105fa826105b7565b9392505050565b60008060408385031215610613578081fd5b61061c836105b7565b946020939093013593505050565b60006020828403121561063b578081fd5b815180151581146105fa578182fdfea26469706673582212205fd0b48be516f5cb7377f23f45eff5238373d5b6a6aa0a2aa8a4e7a46d7aca9a64736f6c63430008030033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TokenRecover__factory = /** @class */ (function (_super) {
    __extends(TokenRecover__factory, _super);
    function TokenRecover__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        _this.contractName = "TokenRecover";
        return _this;
    }
    TokenRecover__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    TokenRecover__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    TokenRecover__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TokenRecover__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TokenRecover__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TokenRecover__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TokenRecover__factory.bytecode = _bytecode;
    TokenRecover__factory.abi = _abi;
    return TokenRecover__factory;
}(ethers_1.ContractFactory));
exports.TokenRecover__factory = TokenRecover__factory;