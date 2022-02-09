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
exports.ExposedStakeableToken__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
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
        inputs: [
            {
                internalType: "address",
                name: "_stakeableStrategyAddress",
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
var _bytecode = "0x608060405234801561001057600080fd5b50604051610b7c380380610b7c83398101604081905261002f916100ae565b6000805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600680549290931691161790556100e0565b805173ffffffffffffffffffffffffffffffffffffffff811681146100a957600080fd5b919050565b600080604083850312156100c0578182fd5b6100c983610085565b91506100d760208401610085565b90509250929050565b610a8d806100ef6000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80636f307dc31161007657806399cc23cb1161005b57806399cc23cb146101d5578063a694fc3a146101e8578063fd5e6dd1146101fb576100be565b80636f307dc31461017f57806370a082311461019f576100be565b80632e1a7d4d116100a75780632e1a7d4d1461011057806343352d61146101255780635153e5cc1461013a576100be565b806318160ddd146100c35780632ce9aead146100da575b600080fd5b6001545b6040519081526020015b60405180910390f35b6100c76100e8366004610933565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b61012361011e366004610987565b61020e565b005b61012d61021a565b6040516100d1919061099f565b60065461015a9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100d1565b60005461015a9073ffffffffffffffffffffffffffffffffffffffff1681565b6100c76101ad366004610933565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b6101236101e3366004610933565b610289565b6101236101f6366004610987565b610292565b61015a610209366004610987565b61029b565b610217816102d2565b50565b6060600580548060200260200160405190810160405280929190818152602001828054801561027f57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610254575b5050505050905090565b610217816102dc565b6102178161036a565b600581815481106102ab57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b61021781336106b9565b60065460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f75774f26d6124c861a4792c459d439572cd2430cbcd07f031b24315c0ad86cec90600090a3600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b33801561039a5773ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090204290555b60065473ffffffffffffffffffffffffffffffffffffffff16158061045d57506006546040517f36d8bf9300000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff909116906336d8bf9390602401602060405180830381600087803b15801561042557600080fd5b505af1158015610439573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045d9190610967565b610514576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604560248201527f5374616b6561626c65546f6b656e235f7374616b653a2053656e64657220646f60448201527f65736e2774206d6565742074686520726571756972656d656e747320746f207360648201527f74616b652e000000000000000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b336000908152600460205260409020546105925760058054600181019091557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915560009081526004602052604090204290555b60015461059f9083610914565b600155336000908152600260205260409020546105bc9083610914565b33600081815260026020526040808220939093555491517f23b872dd00000000000000000000000000000000000000000000000000000000815260048101919091523060248201526044810184905273ffffffffffffffffffffffffffffffffffffffff909116906323b872dd90606401602060405180830381600087803b15801561064757600080fd5b505af115801561065b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067f9190610967565b5060405182815233907f07ebe4cc0edd899e6e61889dcebbcaeb1e6ae4e97d01019119e07184016bd0769060200160405180910390a25050565b3380156106e95773ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090204290555b60008311610753576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f43616e6e6f742077697468647261772030000000000000000000000000000000604482015260640161050b565b336000908152600260205260409020548311156107f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f43616e6e6f74207769746864726177206d6f7265207468616e2077686174277360448201527f207374616b65642e000000000000000000000000000000000000000000000000606482015260840161050b565b6001546107ff9084610927565b6001553360009081526002602052604090205461081c9084610927565b33600090815260026020526040808220929092555490517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018690529091169063a9059cbb90604401602060405180830381600087803b1580156108a157600080fd5b505af11580156108b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108d99190610967565b5060405183815233907f373d92bf7d9cdd58a8c86db5461f3cdcd325b803fdbac8d1b224a0f5fce847b89060200160405180910390a2505050565b600061092082846109f9565b9392505050565b60006109208284610a11565b600060208284031215610944578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610920578182fd5b600060208284031215610978578081fd5b81518015158114610920578182fd5b600060208284031215610998578081fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156109ed57835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016109bb565b50909695505050505050565b60008219821115610a0c57610a0c610a28565b500190565b600082821015610a2357610a23610a28565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212205c59a4ef0a0e7833af1dc5af42e3b9b652ae2cb3f755cea28e0db34ab4adda2f64736f6c63430008030033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ExposedStakeableToken__factory = /** @class */ (function (_super) {
    __extends(ExposedStakeableToken__factory, _super);
    function ExposedStakeableToken__factory() {
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
        _this.contractName = "ExposedStakeableToken";
        return _this;
    }
    ExposedStakeableToken__factory.prototype.deploy = function (_underlyingAddress, _stakeableStrategyAddress, overrides) {
        return _super.prototype.deploy.call(this, _underlyingAddress, _stakeableStrategyAddress, overrides || {});
    };
    ExposedStakeableToken__factory.prototype.getDeployTransaction = function (_underlyingAddress, _stakeableStrategyAddress, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _underlyingAddress, _stakeableStrategyAddress, overrides || {});
    };
    ExposedStakeableToken__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ExposedStakeableToken__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ExposedStakeableToken__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ExposedStakeableToken__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ExposedStakeableToken__factory.bytecode = _bytecode;
    ExposedStakeableToken__factory.abi = _abi;
    return ExposedStakeableToken__factory;
}(ethers_1.ContractFactory));
exports.ExposedStakeableToken__factory = ExposedStakeableToken__factory;
