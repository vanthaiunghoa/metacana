"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.IStakeableStrategy__factory = void 0;
var ethers_1 = require("ethers");
var IStakeableStrategy__factory = /** @class */ (function () {
    function IStakeableStrategy__factory() {
    }
    IStakeableStrategy__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return IStakeableStrategy__factory;
}());
exports.IStakeableStrategy__factory = IStakeableStrategy__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "canStake",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
];
