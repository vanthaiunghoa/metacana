"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.RedeemableNFT__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "nftId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "pointsToRedeem",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "strategyAddress",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "creator",
                type: "address"
            },
        ],
        name: "NFTAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "NFTRedeemed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "nftId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "previousStrategy",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newStrategy",
                type: "address"
            },
        ],
        name: "NFTStrategyUpdated",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        name: "nfts",
        outputs: [
            {
                internalType: "contract IRedeemableStrategy",
                name: "strategy",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "pointsToRedeem",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "creator",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "nftsContract",
        outputs: [
            {
                internalType: "contract IMetacanaNFT",
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
        name: "points",
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
var RedeemableNFT__factory = /** @class */ (function () {
    function RedeemableNFT__factory() {
    }
    RedeemableNFT__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    RedeemableNFT__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    RedeemableNFT__factory.abi = _abi;
    return RedeemableNFT__factory;
}());
exports.RedeemableNFT__factory = RedeemableNFT__factory;
