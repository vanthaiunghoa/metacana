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
exports.GenesisPool__factory = void 0;
var ethers_1 = require("ethers");
var GenesisPool__factory = /** @class */ (function (_super) {
    __extends(GenesisPool__factory, _super);
    function GenesisPool__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    GenesisPool__factory.prototype.deploy = function (_nftsAddress, _underlyingAddress, _stakeableStrategyAddress, overrides) {
        return _super.prototype.deploy.call(this, _nftsAddress, _underlyingAddress, _stakeableStrategyAddress, overrides || {});
    };
    GenesisPool__factory.prototype.getDeployTransaction = function (_nftsAddress, _underlyingAddress, _stakeableStrategyAddress, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _nftsAddress, _underlyingAddress, _stakeableStrategyAddress, overrides || {});
    };
    GenesisPool__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    GenesisPool__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    GenesisPool__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return GenesisPool__factory;
}(ethers_1.ContractFactory));
exports.GenesisPool__factory = GenesisPool__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_nftsAddress",
                type: "address"
            },
            {
                internalType: "address",
                name: "_underlyingAddress",
                type: "address"
            },
            {
                internalType: "address",
                name: "_stakeableStrategyAddress",
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
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousStakeableStrategy",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newStakeableStrategy",
                type: "address"
            },
        ],
        name: "StakeableStrategyUpdated",
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
        name: "StakedTokens",
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
        name: "WithdrawnTokens",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "nftId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "pointsToRedeem",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "strategy",
                type: "address"
            },
        ],
        name: "addNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "balanceOf",
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
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "earnedPoints",
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
        name: "exit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getStakers",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "lastUpdateTime",
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
        name: "maximumStake",
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
                internalType: "contract IMetacanaAssets",
                name: "",
                type: "address"
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
    {
        inputs: [],
        name: "poolName",
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
        inputs: [
            {
                internalType: "uint256",
                name: "nftId",
                type: "uint256"
            },
        ],
        name: "redeem",
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
                internalType: "uint256",
                name: "_stakeSize",
                type: "uint256"
            },
        ],
        name: "setMaximumStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_stakeableStrategy",
                type: "address"
            },
        ],
        name: "setStakeableStrategy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "stake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "stakeableStrategy",
        outputs: [
            {
                internalType: "contract IStakeableStrategy",
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
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        name: "stakers",
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
        name: "totalSupply",
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
    {
        inputs: [],
        name: "underlying",
        outputs: [
            {
                internalType: "contract IERC20",
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
                internalType: "uint256",
                name: "nftId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "strategy",
                type: "address"
            },
        ],
        name: "updateNFTStrategy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x6080604052612710600c553480156200001757600080fd5b506040516200229838038062002298833981810160405260608110156200003d57600080fd5b5080516020808301516040938401518451808601909552600c85527f47656e6573697320506f6f6c0000000000000000000000000000000000000000928501929092526000805473ffffffffffffffffffffffffffffffffffffffff8084167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617835560068054828716908416179055600780549187169190921617905592939092849084908490620000f262000193565b600a80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35083516200017a90600d906020870190620001e6565b50620001868262000197565b5050505050505062000292565b3390565b73ffffffffffffffffffffffffffffffffffffffff166000908152600b6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200021e576000855562000269565b82601f106200023957805160ff191683800117855562000269565b8280016001018555821562000269579182015b82811115620002695782518255916020019190600101906200024c565b50620002779291506200027b565b5090565b5b808211156200027757600081556001016200027c565b611ff680620002a26000396000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c8063715018a6116100ee578063bcb5c63611610097578063e9fad8ee11610071578063e9fad8ee14610540578063f2fde38b14610548578063f3466dfa1461057b578063fd5e6dd1146105f8576101ae565b8063bcb5c636146104cd578063c3e3e690146104ea578063db006a7514610523576101ae565b806399cc23cb116100c857806399cc23cb14610475578063a694fc3a146104a8578063b5c6b453146104c5576101ae565b8063715018a61461045d57806385e656f9146104655780638da5cb5b1461046d576101ae565b8063406821521161015b5780635705ae43116101355780635705ae43146103aa578063584333ed146103e35780636f307dc31461042257806370a082311461042a576101ae565b806340682152146102da57806343352d61146103215780635153e5cc14610379576101ae565b80632d9ee1391161018c5780632d9ee139146102555780632e1a7d4d14610288578063358b8166146102a7576101ae565b806318160ddd146101b3578063265aa621146101cd5780632ce9aead14610222575b600080fd5b6101bb610615565b60408051918252519081900360200190f35b6101ea600480360360208110156101e357600080fd5b503561061b565b6040805173ffffffffffffffffffffffffffffffffffffffff9485168152602081019390935292168183015290519081900360600190f35b6101bb6004803603602081101561023857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610654565b6101bb6004803603602081101561026b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661067c565b6102a56004803603602081101561029e57600080fd5b50356106bc565b005b6101bb600480360360208110156102bd57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166106e2565b61030d600480360360208110156102f057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166106f4565b604080519115158252519081900360200190f35b610329610709565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561036557818101518382015260200161034d565b505050509050019250505060405180910390f35b610381610778565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102a5600480360360408110156103c057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610794565b6102a5600480360360608110156103f957600080fd5b508035906020810135906040013573ffffffffffffffffffffffffffffffffffffffff166109d1565b610381610a89565b6101bb6004803603602081101561044057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610aa5565b6102a5610acd565b610381610be4565b610381610c00565b6102a56004803603602081101561048b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c1c565b6102a5600480360360208110156104be57600080fd5b5035610cd0565b6101bb610d6c565b6102a5600480360360208110156104e357600080fd5b5035610d72565b6102a56004803603604081101561050057600080fd5b508035906020013573ffffffffffffffffffffffffffffffffffffffff16610e1f565b6102a56004803603602081101561053957600080fd5b5035610ed1565b6102a5610eee565b6102a56004803603602081101561055e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610f01565b6105836110a3565b6040805160208082528351818301528351919283929083019185019080838360005b838110156105bd5781810151838201526020016105a5565b50505050905090810190601f1680156105ea5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103816004803603602081101561060e57600080fd5b503561114f565b60015490565b60086020526000908152604090208054600182015460029092015473ffffffffffffffffffffffffffffffffffffffff91821692911683565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b60006106b661068a83611186565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260096020526040902054906111d8565b92915050565b3380156106d5576106d5816106d083611186565b61124c565b6106de826112a9565b5050565b60096020526000908152604090205481565b600b6020526000908152604090205460ff1681565b6060600580548060200260200160405190810160405280929190818152602001828054801561076e57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610743575b5050505050905090565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b61079c6112b3565b73ffffffffffffffffffffffffffffffffffffffff166107ba610c00565b73ffffffffffffffffffffffffffffffffffffffff161461083c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff82166000908152600b602052604090205460ff16156108bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180611f2e603d913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610929576108de610c00565b73ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610923573d6000803e3d6000fd5b506106de565b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb61094d610c00565b836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156109a157600080fd5b505af11580156109b5573d6000803e3d6000fd5b505050506040513d60208110156109cb57600080fd5b50505050565b6109d96112b3565b73ffffffffffffffffffffffffffffffffffffffff166109f7610c00565b73ffffffffffffffffffffffffffffffffffffffff1614610a7957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610a848383836112b7565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b610ad56112b3565b73ffffffffffffffffffffffffffffffffffffffff16610af3610c00565b73ffffffffffffffffffffffffffffffffffffffff1614610b7557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600a5460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600a80547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60075473ffffffffffffffffffffffffffffffffffffffff1681565b600a5473ffffffffffffffffffffffffffffffffffffffff1690565b610c246112b3565b73ffffffffffffffffffffffffffffffffffffffff16610c42610c00565b73ffffffffffffffffffffffffffffffffffffffff1614610cc457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610ccd8161137c565b50565b338015610ce457610ce4816106d083611186565b600c54610cf990670de0b6b3a764000061140a565b610d0c610d0533610aa5565b84906111d8565b1115610d63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611eb96030913960400191505060405180910390fd5b6106de8261147d565b600c5481565b610d7a6112b3565b73ffffffffffffffffffffffffffffffffffffffff16610d98610c00565b73ffffffffffffffffffffffffffffffffffffffff1614610e1a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600c55565b610e276112b3565b73ffffffffffffffffffffffffffffffffffffffff16610e45610c00565b73ffffffffffffffffffffffffffffffffffffffff1614610ec757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6106de8282611760565b338015610ee557610ee5816106d083611186565b6106de82611856565b610eff610efa33610aa5565b6106bc565b565b610f096112b3565b73ffffffffffffffffffffffffffffffffffffffff16610f27610c00565b73ffffffffffffffffffffffffffffffffffffffff1614610fa957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116611015576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611dd06026913960400191505060405180910390fd5b600a5460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600a80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600d805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f810184900484028201840190925281815292918301828280156111475780601f1061111c57610100808354040283529160200191611147565b820191906000526020600020905b81548152906001019060200180831161112a57829003601f168201915b505050505081565b6005818154811061115f57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b6000426111d1670de0b6b3a76400006111cb62015180816111a688610aa5565b6111c5670de0b6b3a76400006111c56111be8c610654565b8a90611ab4565b9061140a565b90611b2b565b9392505050565b6000828201838110156111d157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526009602052604090205461127c90826111d8565b73ffffffffffffffffffffffffffffffffffffffff90921660009081526009602052604090209190915550565b610ccd8133611bac565b3390565b6040805160608101825273ffffffffffffffffffffffffffffffffffffffff80841680835260208084018781523385870181815260008b815260088552889020965187549087167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617885592516001880155516002909601805496909516959091169490941790925583519283529251859287927f8d2859dbeda2989ace461ec9b60da19bc4ef71b9cc32b41cb475ee0835915f6792918290030190a4505050565b60065460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f75774f26d6124c861a4792c459d439572cd2430cbcd07f031b24315c0ad86cec90600090a3600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600082611419575060006106b6565b8282028284828161142657fe5b04146111d1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611ee96021913960400191505060405180910390fd5b3380156114ad5773ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090204290555b60065473ffffffffffffffffffffffffffffffffffffffff16158061156d5750600654604080517f36d8bf93000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff909216916336d8bf93916024808201926020929091908290030181600087803b15801561154057600080fd5b505af1158015611554573d6000803e3d6000fd5b505050506040513d602081101561156a57600080fd5b50515b6115c2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526045815260200180611e3a6045913960600191505060405180910390fd5b336000908152600460205260409020546116405760058054600181019091557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915560009081526004602052604090204290555b60015461164d90836111d8565b6001553360009081526002602052604090205461166a90836111d8565b33600081815260026020908152604080832094909455815484517f23b872dd000000000000000000000000000000000000000000000000000000008152600481019490945230602485015260448401879052935173ffffffffffffffffffffffffffffffffffffffff909416936323b872dd93606480820194918390030190829087803b1580156116fa57600080fd5b505af115801561170e573d6000803e3d6000fd5b505050506040513d602081101561172457600080fd5b505060408051838152905133917f07ebe4cc0edd899e6e61889dcebbcaeb1e6ae4e97d01019119e07184016bd076919081900360200190a25050565b600082815260086020526040902060018101546117c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180611f93602e913960400191505060405180910390fd5b805460405173ffffffffffffffffffffffffffffffffffffffff80851692169085907f88ab94ea38fc8ccd3e63207caf4c6ca72efc456e6c0dd09bfb016bdcd370515f90600090a480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905550565b600081815260086020526040902060018101546118be576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180611f0a6024913960400191505060405180910390fd5b600181015433600090815260096020526040902054101561192a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180611e7f603a913960400191505060405180910390fd5b805473ffffffffffffffffffffffffffffffffffffffff1615806119ef57508054604080517fcc1f8ffa00000000000000000000000000000000000000000000000000000000815233600482015260248101859052905173ffffffffffffffffffffffffffffffffffffffff9092169163cc1f8ffa916044808201926020929091908290030181600087803b1580156119c257600080fd5b505af11580156119d6573d6000803e3d6000fd5b505050506040513d60208110156119ec57600080fd5b50515b611a44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526044815260200180611df66044913960600191505060405180910390fd5b600181015433600090815260096020526040902054611a6291611ab4565b336000818152600960209081526040918290209390935560018401548151908152905191927f14c9b4d4f4cc58cdc10083ad4d08288a39df874bbf3e4e0846f3fd1352d48c8792918290030190a25050565b600082821115611b2557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000808211611b9b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381611ba457fe5b049392505050565b338015611bdc5773ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090204290555b60008311611c4b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f43616e6e6f742077697468647261772030000000000000000000000000000000604482015290519081900360640190fd5b33600090815260026020526040902054831115611cb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180611f6b6028913960400191505060405180910390fd5b600154611cc09084611ab4565b60015533600090815260026020526040902054611cdd9084611ab4565b33600090815260026020908152604080832093909355815483517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152602482018990529451949091169363a9059cbb93604480840194938390030190829087803b158015611d6857600080fd5b505af1158015611d7c573d6000803e3d6000fd5b505050506040513d6020811015611d9257600080fd5b505060408051848152905133917f373d92bf7d9cdd58a8c86db5461f3cdcd325b803fdbac8d1b224a0f5fce847b8919081900360200190a250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737352656465656d61626c654e4654235f72656465656d3a2053656e64657220646f65736e2774206d6565742074686520726571756972656d656e747320746f206d696e742e5374616b6561626c65546f6b656e235f7374616b653a2053656e64657220646f65736e2774206d6565742074686520726571756972656d656e747320746f207374616b652e52656465656d61626c654e4654235f72656465656d3a204e6f7420656e6f75676820706f696e747320746f2072656465656d20666f72204e46544e46545374616b6561626c65506f6f6c237374616b653a2043616e6e6f74207374616b65206d6f726520746f6b656e73536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7752656465656d61626c654e4654235f72656465656d3a204e4654206e6f7420666f756e64546f6b656e5265636f766572237265636f7665723a2043616e6e6f74207265636f76657220746f6b656e732066726f6d207468652064656e796c69737443616e6e6f74207769746864726177206d6f7265207468616e20776861742773207374616b65642e52656465656d61626c654e4654237570646174654e465453747261746567793a204e4654206e6f7420666f756e64a264697066735822122091d3b68445738cadcee6ccd007ac23ec42d002855b23c5758813519408920b8b64736f6c63430007040033";
