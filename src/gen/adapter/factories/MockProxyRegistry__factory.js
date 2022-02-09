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
exports.MockProxyRegistry__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
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
                name: "",
                type: "address"
            },
        ],
        name: "proxies",
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
                name: "_address",
                type: "address"
            },
            {
                internalType: "address",
                name: "_proxyForAddress",
                type: "address"
            },
        ],
        name: "setProxy",
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
var _bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b610094565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6104d2806100a36000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063a9d4630c11610050578063a9d4630c146100b9578063c4552791146100cc578063f2fde38b1461010257610067565b8063715018a61461006c5780638da5cb5b14610076575b600080fd5b610074610115565b005b60005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100746100c736600461046a565b6101a7565b6100906100da366004610449565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b610074610110366004610449565b61027b565b60005473ffffffffffffffffffffffffffffffffffffffff16331461019b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6101a560006103ab565b565b60005473ffffffffffffffffffffffffffffffffffffffff163314610228576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610192565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610192565b73ffffffffffffffffffffffffffffffffffffffff811661039f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610192565b6103a8816103ab565b50565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461044457600080fd5b919050565b60006020828403121561045a578081fd5b61046382610420565b9392505050565b6000806040838503121561047c578081fd5b61048583610420565b915061049360208401610420565b9050925092905056fea2646970667358221220dbbf81ae77fb0f7e577d37807ead46314a491d567118e2b4532eec182ec7c53364736f6c63430008030033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var MockProxyRegistry__factory = /** @class */ (function (_super) {
    __extends(MockProxyRegistry__factory, _super);
    function MockProxyRegistry__factory() {
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
        _this.contractName = "MockProxyRegistry";
        return _this;
    }
    MockProxyRegistry__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    MockProxyRegistry__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    MockProxyRegistry__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockProxyRegistry__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockProxyRegistry__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    MockProxyRegistry__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    MockProxyRegistry__factory.bytecode = _bytecode;
    MockProxyRegistry__factory.abi = _abi;
    return MockProxyRegistry__factory;
}(ethers_1.ContractFactory));
exports.MockProxyRegistry__factory = MockProxyRegistry__factory;