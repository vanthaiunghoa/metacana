"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.Pauseable__factory = void 0;
var ethers_1 = require("ethers");
var Pauseable__factory = /** @class */ (function () {
    function Pauseable__factory() {
    }
    Pauseable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return Pauseable__factory;
}());
exports.Pauseable__factory = Pauseable__factory;
var _abi = [
    {
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
