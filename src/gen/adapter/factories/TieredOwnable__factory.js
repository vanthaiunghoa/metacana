"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
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
exports.TieredOwnable__factory = void 0;
var ethers_1 = require("ethers");
var TieredOwnable__factory = /** @class */ (function (_super) {
    __extends(TieredOwnable__factory, _super);
    function TieredOwnable__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    TieredOwnable__factory.prototype.deploy = function (_firstOwner, overrides) {
        return _super.prototype.deploy.call(this, _firstOwner, overrides || {});
    };
    TieredOwnable__factory.prototype.getDeployTransaction = function (_firstOwner, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _firstOwner, overrides || {});
    };
    TieredOwnable__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TieredOwnable__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TieredOwnable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return TieredOwnable__factory;
}(ethers_1.ContractFactory));
exports.TieredOwnable__factory = TieredOwnable__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_firstOwner",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "previousTier",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "newTier",
                type: "uint256"
            },
        ],
        name: "OwnershipGranted",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_tier",
                type: "uint256"
            },
        ],
        name: "assignOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address"
            },
        ],
        name: "getOwnerTier",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5060405161059b38038061059b83398101604081905261002f91610100565b73ffffffffffffffffffffffffffffffffffffffff8116610085576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161007c9061013b565b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000818152602081905260408082207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9081905590519092907fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e908390a450610198565b600060208284031215610111578081fd5b815173ffffffffffffffffffffffffffffffffffffffff81168114610134578182fd5b9392505050565b6020808252602e908201527f5469657265644f776e61626c6523636f6e7374727563746f723a20494e56414c60408201527f49445f46495253545f4f574e4552000000000000000000000000000000000000606082015260800190565b6103f4806101a76000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635d511a111461003b578063e8f35d5a14610050575b600080fd5b61004e610049366004610275565b610079565b005b61006361005e366004610254565b610204565b60405161007091906103b5565b60405180910390f35b336000908152602081905260409020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff908111156100ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100e4906102fb565b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661013a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100e49061029e565b3373ffffffffffffffffffffffffffffffffffffffff8416141561018a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100e490610358565b73ffffffffffffffffffffffffffffffffffffffff8316600081815260208190526040808220549051859391927fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e91a45073ffffffffffffffffffffffffffffffffffffffff909116600090815260208190526040902055565b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020545b919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461022b57600080fd5b600060208284031215610265578081fd5b61026e82610230565b9392505050565b60008060408385031215610287578081fd5b61029083610230565b946020939093013593505050565b6020808252602e908201527f5469657265644f776e61626c652361737369676e4f776e6572736869703a204960408201527f4e56414c49445f41444452455353000000000000000000000000000000000000606082015260800190565b60208082526032908201527f5469657265644f776e61626c65236f6e6c794f776e6572546965723a204f574e60408201527f45525f544945525f49535f544f4f5f4c4f570000000000000000000000000000606082015260800190565b60208082526031908201527f5469657265644f776e61626c652361737369676e4f776e6572736869703a205560408201527f50444154494e475f53454c465f54494552000000000000000000000000000000606082015260800190565b9081526020019056fea26469706673582212201f1057f594465562d2efc242883ef7f5ba1278f58bc586b9c53d370e7249864964736f6c63430008000033";
