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
exports.TokenVestingPool__factory = void 0;
var ethers_1 = require("ethers");
var TokenVestingPool__factory = /** @class */ (function (_super) {
    __extends(TokenVestingPool__factory, _super);
    function TokenVestingPool__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    TokenVestingPool__factory.prototype.deploy = function (_token, _totalFunds, overrides) {
        return _super.prototype.deploy.call(this, _token, _totalFunds, overrides || {});
    };
    TokenVestingPool__factory.prototype.getDeployTransaction = function (_token, _totalFunds, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _token, _totalFunds, overrides || {});
    };
    TokenVestingPool__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TokenVestingPool__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TokenVestingPool__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return TokenVestingPool__factory;
}(ethers_1.ContractFactory));
exports.TokenVestingPool__factory = TokenVestingPool__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "contract ERC20",
                name: "_token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_totalFunds",
                type: "uint256"
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
                name: "beneficiary",
                type: "address"
            },
            {
                indexed: false,
                internalType: "address",
                name: "vesting",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "BeneficiaryAdded",
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
        inputs: [
            {
                internalType: "address",
                name: "_beneficiary",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_lockDurationAfterTge",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_unlockTokenPercentAfterTge",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_start",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_cliff",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_monthlyUnlockTokenPercentAfterCliff",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_duration",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            },
        ],
        name: "addBeneficiary",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
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
        name: "beneficiaries",
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
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        name: "beneficiaryDistributionContracts",
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
        name: "distributedTokens",
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
                name: "_beneficiary",
                type: "address"
            },
        ],
        name: "getDistributionContracts",
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
        inputs: [],
        name: "pendingOwner",
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
        inputs: [],
        name: "token",
        outputs: [
            {
                internalType: "contract ERC20",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalFunds",
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
];
var _bytecode = "0x608060405234801561001057600080fd5b50604051620026b1380380620026b18339810160408190526100319161015f565b61004161003c6100e6565b6100ea565b8173ffffffffffffffffffffffffffffffffffffffff811661006257600080fd5b73ffffffffffffffffffffffffffffffffffffffff811630141561008557600080fd5b6000821161009257600080fd5b50600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff939093169290921790915560035560006004556101a4565b3390565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008060408385031215610171578182fd5b825173ffffffffffffffffffffffffffffffffffffffff81168114610194578283fd5b6020939093015192949293505050565b6124fd80620001b46000396000f3fe60806040523480156200001157600080fd5b5060043610620000dc5760003560e01c8063968ed600116200008d578063efeb5e581162000063578063efeb5e581462000190578063f2fde38b14620001a7578063fc0c546a14620001be57620000dc565b8063968ed6001462000165578063c1cd8233146200016f578063e30c3978146200018657620000dc565b80637ddf8e0811620000c35780637ddf8e08146200010f5780638da5cb5b146200013557806395e2db3d146200013f57620000dc565b8063586360ce14620000e1578063715018a61462000103575b600080fd5b620000eb620001c8565b604051620000fa91906200115d565b60405180910390f35b6200010d620001ce565b005b620001266200012036600462000dc4565b6200025f565b604051620000fa919062000e94565b6200012662000642565b620001566200015036600462000d7b565b6200065e565b604051620000fa919062000f2b565b620000eb62000737565b620001266200018036600462000d98565b6200073d565b6200012662000783565b62000126620001a136600462000e44565b6200079f565b6200010d620001b836600462000d7b565b620007d7565b620001266200089f565b60045481565b620001d8620008bb565b73ffffffffffffffffffffffffffffffffffffffff16620001f862000642565b73ffffffffffffffffffffffffffffffffffffffff161462000251576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002489062001094565b60405180910390fd5b6200025d6000620008bf565b565b60006200026b620008bb565b73ffffffffffffffffffffffffffffffffffffffff166200028b62000642565b73ffffffffffffffffffffffffffffffffffffffff1614620002db576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002489062001094565b8873ffffffffffffffffffffffffffffffffffffffff8116620002fd57600080fd5b73ffffffffffffffffffffffffffffffffffffffff81163014156200032157600080fd5b6200032b62000642565b73ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff1614156200036457600080fd5b600083116200037257600080fd5b858410156200038057600080fd5b826200039160035460045462000934565b10156200039d57600080fd5b6002546040517f70a08231000000000000000000000000000000000000000000000000000000008152849173ffffffffffffffffffffffffffffffffffffffff16906370a0823190620003f590309060040162000e94565b60206040518083038186803b1580156200040e57600080fd5b505afa15801562000423573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000449919062000e5d565b10156200045557600080fd5b620004608a62000949565b620004d657600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8c161790555b600454620004e5908462000977565b60048190555060008a888b8b8a8a8a6000604051620005049062000d48565b6200051798979695949392919062000edb565b604051809103906000f08015801562000534573d6000803e3d6000fd5b5073ffffffffffffffffffffffffffffffffffffffff8c811660009081526006602090815260408083208054600180820183559185528385200180547fffffffffffffffffffffffff0000000000000000000000000000000000000000168787169081179091558452600790925290912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055600254919250620005e29116828662000985565b8a73ffffffffffffffffffffffffffffffffffffffff167f5d081d791b64899adab031015397ef8d7600501212ef97573b9e50f8c9bb6d9b82866040516200062c92919062000eb5565b60405180910390a29a9950505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60608173ffffffffffffffffffffffffffffffffffffffff81166200068257600080fd5b73ffffffffffffffffffffffffffffffffffffffff8116301415620006a657600080fd5b73ffffffffffffffffffffffffffffffffffffffff8316600090815260066020908152604091829020805483518184028101840190945280845290918301828280156200072a57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311620006fe575b5050505050915050919050565b60035481565b600660205281600052604060002081815481106200075a57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60058181548110620007b057600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b620007e1620008bb565b73ffffffffffffffffffffffffffffffffffffffff166200080162000642565b73ffffffffffffffffffffffffffffffffffffffff161462000851576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002489062001094565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83161790556200089c8162000a2f565b50565b60025473ffffffffffffffffffffffffffffffffffffffff1681565b3390565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600062000942828462001181565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526006602052604090205415155b919050565b600062000942828462001166565b62000a2a8363a9059cbb60e01b8484604051602401620009a792919062000eb5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915262000b04565b505050565b62000a39620008bb565b73ffffffffffffffffffffffffffffffffffffffff1662000a5962000642565b73ffffffffffffffffffffffffffffffffffffffff161462000aa9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002489062001094565b73ffffffffffffffffffffffffffffffffffffffff811662000af9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002489062000fda565b6200089c81620008bf565b600062000b68826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1662000bc29092919063ffffffff16565b80519091501562000a2a578080602001905181019062000b89919062000e22565b62000a2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002489062001100565b606062000bd3848460008562000bdb565b949350505050565b60608247101562000c1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002489062001037565b62000c258562000cea565b62000c5e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200024890620010c9565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405162000c89919062000e76565b60006040518083038185875af1925050503d806000811462000cc8576040519150601f19603f3d011682016040523d82523d6000602084013e62000ccd565b606091505b509150915062000cdf82828662000cf0565b979650505050505050565b3b151590565b6060831562000d0157508162000942565b82511562000d125782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000248919062000f87565b6112ca80620011fe83390190565b803573ffffffffffffffffffffffffffffffffffffffff811681146200097257600080fd5b60006020828403121562000d8d578081fd5b620009428262000d56565b6000806040838503121562000dab578081fd5b62000db68362000d56565b946020939093013593505050565b600080600080600080600080610100898b03121562000de1578384fd5b62000dec8962000d56565b9a60208a01359a5060408a013599606081013599506080810135985060a0810135975060c0810135965060e00135945092505050565b60006020828403121562000e34578081fd5b8151801515811462000942578182fd5b60006020828403121562000e56578081fd5b5035919050565b60006020828403121562000e6f578081fd5b5051919050565b6000825162000e8a8184602087016200119b565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b73ffffffffffffffffffffffffffffffffffffffff989098168852602088019690965260408701949094526060860192909252608085015260a084015260c0830152151560e08201526101000190565b6020808252825182820181905260009190848201906040850190845b8181101562000f7b57835173ffffffffffffffffffffffffffffffffffffffff168352928401929184019160010162000f47565b50909695505050505050565b600060208252825180602084015262000fa88160408501602087016200119b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b600082198211156200117c576200117c620011ce565b500190565b600082821015620011965762001196620011ce565b500390565b60005b83811015620011b85781810151838201526020016200119e565b83811115620011c8576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfe60806040523480156200001157600080fd5b50604051620012ca380380620012ca8339810160408190526200003491620001da565b62000048620000426200014c565b62000150565b73ffffffffffffffffffffffffffffffffffffffff88166200006957600080fd5b838611156200007757600080fd5b818411156200008557600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8a16179055600880547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001682151517905560078290556005859055620001138787620001c5602090811b6200089717901c565b60048190556006849055620001359085620001c5602090811b6200089717901c565b60025550505060039390935550620002ab92505050565b3390565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620001d382846200026d565b9392505050565b600080600080600080600080610100898b031215620001f7578384fd5b885173ffffffffffffffffffffffffffffffffffffffff811681146200021b578485fd5b809850506020890151965060408901519550606089015194506080890151935060a0890151925060c0890151915060e089015180151581146200025c578182fd5b809150509295985092959890939650565b60008219821115620002a6577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500190565b61100f80620002bb6000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806374a8f103116100b2578063be9a655511610081578063f177a3fb11610066578063f177a3fb146101f9578063f2fde38b14610201578063fa01dc06146102145761011b565b8063be9a6555146101e9578063cbb5111c146101f15761011b565b806374a8f103146101a6578063872a7810146101b95780638da5cb5b146101ce5780639852595c146101d65761011b565b8063384711cc116100ee578063384711cc1461016e57806338af3eed1461018157806339b9258314610196578063715018a61461019e5761011b565b80630fb5a6b41461012057806313d033c01461013e5780631726cbc8146101465780631916558714610159575b600080fd5b610128610227565b6040516101359190610eaa565b60405180910390f35b61012861022d565b610128610154366004610c14565b610233565b61016c610167366004610c14565b610274565b005b61012861017c366004610c14565b610332565b6101896104a6565b6040516101359190610c84565b6101286104c2565b61016c6104c8565b61016c6101b4366004610c14565b610550565b6101c161076d565b6040516101359190610ccb565b610189610776565b6101286101e4366004610c14565b610792565b6101286107a4565b6101286107aa565b6101286107b0565b61016c61020f366004610c14565b6107b6565b6101c1610222366004610c14565b610882565b60075481565b60025481565b73ffffffffffffffffffffffffffffffffffffffff811660009081526009602052604081205461026c9061026684610332565b906108aa565b90505b919050565b600061027f82610233565b90506000811161028e57600080fd5b73ffffffffffffffffffffffffffffffffffffffff82166000908152600960205260409020546102be9082610897565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152600960205260409020929092556001546102f7929116836108b6565b7ffb81f9b30d73d830c3544b34d827c08142579ee75710b490bab0b3995468c565816040516103269190610eaa565b60405180910390a15050565b6000808273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161036e9190610c84565b60206040518083038186803b15801561038657600080fd5b505afa15801561039a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103be9190610c50565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260096020526040812054919250906103f3908390610897565b90506004544210156104165760055461040d90829061095c565b9250505061026f565b60025442101561042b5760009250505061026f565b60075460035461043a91610897565b4210158061046d575073ffffffffffffffffffffffffffffffffffffffff84166000908152600a602052604090205460ff165b1561047b57915061026f9050565b61040d6007546104a0610499600254426108aa90919063ffffffff16565b849061095c565b90610968565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b6104d0610974565b73ffffffffffffffffffffffffffffffffffffffff166104ee610776565b73ffffffffffffffffffffffffffffffffffffffff1614610544576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053b90610de1565b60405180910390fd5b61054e6000610978565b565b610558610974565b73ffffffffffffffffffffffffffffffffffffffff16610576610776565b73ffffffffffffffffffffffffffffffffffffffff16146105c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053b90610de1565b60085460ff166105d257600080fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600a602052604090205460ff161561060557600080fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8316906370a082319061065a903090600401610c84565b60206040518083038186803b15801561067257600080fd5b505afa158015610686573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106aa9190610c50565b905060006106b783610233565b905060006106c583836108aa565b73ffffffffffffffffffffffffffffffffffffffff85166000908152600a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055905061073e610720610776565b73ffffffffffffffffffffffffffffffffffffffff861690836108b6565b6040517f44825a4b2df8acb19ce4e1afba9aa850c8b65cdb7942e2078f27d0b0960efee690600090a150505050565b60085460ff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60096020526000908152604090205481565b60035481565b60055481565b60065481565b6107be610974565b73ffffffffffffffffffffffffffffffffffffffff166107dc610776565b73ffffffffffffffffffffffffffffffffffffffff1614610829576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053b90610de1565b73ffffffffffffffffffffffffffffffffffffffff8116610876576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053b90610d27565b61087f81610978565b50565b600a6020526000908152604090205460ff1681565b60006108a38284610eb3565b9392505050565b60006108a38284610f41565b6109578363a9059cbb60e01b84846040516024016108d5929190610ca5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526109ed565b505050565b60006108a38284610f04565b60006108a38284610ecb565b3390565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000610a4f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610aa39092919063ffffffff16565b8051909150156109575780806020019051810190610a6d9190610c30565b610957576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053b90610e4d565b6060610ab28484600085610aba565b949350505050565b606082471015610af6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053b90610d84565b610aff85610bbb565b610b35576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053b90610e16565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610b5e9190610c68565b60006040518083038185875af1925050503d8060008114610b9b576040519150601f19603f3d011682016040523d82523d6000602084013e610ba0565b606091505b5091509150610bb0828286610bc1565b979650505050505050565b3b151590565b60608315610bd05750816108a3565b825115610be05782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053b9190610cd6565b600060208284031215610c25578081fd5b81356108a381610fb7565b600060208284031215610c41578081fd5b815180151581146108a3578182fd5b600060208284031215610c61578081fd5b5051919050565b60008251610c7a818460208701610f58565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b901515815260200190565b6000602082528251806020840152610cf5816040850160208701610f58565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b60008219821115610ec657610ec6610f88565b500190565b600082610eff577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610f3c57610f3c610f88565b500290565b600082821015610f5357610f53610f88565b500390565b60005b83811015610f73578181015183820152602001610f5b565b83811115610f82576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461087f57600080fdfea26469706673582212201019277a8b674b688c42361e58cc93e776a7f307ad53a7da7459d0e3ee5fc21064736f6c63430008000033a264697066735822122051d2b22544a7508778aedcfee9a32a6a4f00a2e1557fa1f17dce6c268b0f430664736f6c63430008000033";
