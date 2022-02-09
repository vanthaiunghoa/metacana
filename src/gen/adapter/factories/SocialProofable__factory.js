"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.SocialProofable__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "getGithub",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getGithubProof",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getTelegram",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getTwitter",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getTwitterProof",
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
    {
        inputs: [],
        name: "getWebsite",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];
var SocialProofable__factory = /** @class */ (function () {
    function SocialProofable__factory() {
    }
    SocialProofable__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    SocialProofable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    SocialProofable__factory.abi = _abi;
    return SocialProofable__factory;
}());
exports.SocialProofable__factory = SocialProofable__factory;