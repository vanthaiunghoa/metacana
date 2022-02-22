/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Metacana, MetacanaInterface } from "../Metacana";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101606040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610140523480156200003757600080fd5b506040518060400160405280600881526020017f4d65746163616e61000000000000000000000000000000000000000000000000815250806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600881526020017f4d65746163616e610000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f63616e610000000000000000000000000000000000000000000000000000000081525081600390805190602001906200012992919062000486565b5080516200013f90600490602084019062000486565b5050600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905550620001753362000244565b815160208084019190912082518383012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c00190528051940193909320919290916080523060601b60c05261012052506200023e93503392506200021b915050601290565b6200022890600a62000590565b62000238906304c4b4006200065e565b620002c2565b620006d3565b6005805473ffffffffffffffffffffffffffffffffffffffff8381166101008181027fffffffffffffffffffffff0000000000000000000000000000000000000000ff85161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff821662000345576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b6200035360008383620003fa565b80600260008282546200036791906200052c565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290620003a39084906200052c565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60055460ff161562000469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016200033c565b620004818383836200048160201b62000b491760201c565b505050565b828054620004949062000680565b90600052602060002090601f016020900481019282620004b8576000855562000503565b82601f10620004d357805160ff191683800117855562000503565b8280016001018555821562000503579182015b8281111562000503578251825591602001919060010190620004e6565b506200051192915062000515565b5090565b5b8082111562000511576000815560010162000516565b60008219821115620005425762000542620006bd565b500190565b600181815b80851115620005885781600019048211156200056c576200056c620006bd565b808516156200057a57918102915b93841c93908002906200054c565b509250929050565b6000620005a160ff841683620005a8565b9392505050565b600082620005b95750600162000658565b81620005c85750600062000658565b8160018114620005e15760028114620005ec576200060c565b600191505062000658565b60ff841115620006005762000600620006bd565b50506001821b62000658565b5060208310610133831016604e8410600b841016171562000631575081810a62000658565b6200063d838362000547565b8060001904821115620006545762000654620006bd565b0290505b92915050565b60008160001904831182151516156200067b576200067b620006bd565b500290565b600181811c908216806200069557607f821691505b60208210811415620006b757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160601c60e051610100516101205161014051611ea66200073160003960006108c50152600061112d0152600061117c01526000611157015260006110b0015260006110da015260006111040152611ea66000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806370a08231116100e357806395d89b411161008c578063d505accf11610066578063d505accf1461033a578063dd62ed3e1461034d578063f2fde38b1461039357600080fd5b806395d89b411461030c578063a457c2d714610314578063a9059cbb1461032757600080fd5b80637ecebe00116100bd5780637ecebe00146102ae5780638456cb59146102c15780638da5cb5b146102c957600080fd5b806370a082311461025d578063715018a61461029357806379cc67901461029b57600080fd5b80633644e5151161014557806340c10f191161011f57806340c10f191461022c57806342966c681461023f5780635c975abb1461025257600080fd5b80633644e51514610207578063395093511461020f5780633f4ba83a1461022257600080fd5b806318160ddd1161017657806318160ddd146101d357806323b872dd146101e5578063313ce567146101f857600080fd5b806306fdde0314610192578063095ea7b3146101b0575b600080fd5b61019a6103a6565b6040516101a79190611d22565b60405180910390f35b6101c36101be366004611cdf565b610438565b60405190151581526020016101a7565b6002545b6040519081526020016101a7565b6101c36101f3366004611c30565b610450565b604051601281526020016101a7565b6101d7610474565b6101c361021d366004611cdf565b610483565b61022a6104cf565b005b61022a61023a366004611cdf565b610565565b61022a61024d366004611d09565b6105fa565b60055460ff166101c3565b6101d761026b366004611bdb565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b61022a610607565b61022a6102a9366004611cdf565b610698565b6101d76102bc366004611bdb565b6106ad565b61022a6106da565b600554610100900473ffffffffffffffffffffffffffffffffffffffff1660405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a7565b61019a610769565b6101c3610322366004611cdf565b610778565b6101c3610335366004611cdf565b610849565b61022a610348366004611c6c565b610857565b6101d761035b366004611bfd565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b61022a6103a1366004611bdb565b610a16565b6060600380546103b590611dc4565b80601f01602080910402602001604051908101604052809291908181526020018280546103e190611dc4565b801561042e5780601f106104035761010080835404028352916020019161042e565b820191906000526020600020905b81548152906001019060200180831161041157829003601f168201915b5050505050905090565b600033610446818585610b4e565b5060019392505050565b60003361045e858285610d01565b610469858585610dd8565b506001949350505050565b600061047e611096565b905090565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061044690829086906104ca908790611d95565b610b4e565b60055473ffffffffffffffffffffffffffffffffffffffff61010090910416331461055b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6105636111ca565b565b60055473ffffffffffffffffffffffffffffffffffffffff6101009091041633146105ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610552565b6105f682826112ab565b5050565b61060433826113d7565b50565b60055473ffffffffffffffffffffffffffffffffffffffff61010090910416331461068e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610552565b61056360006115d0565b6106a3823383610d01565b6105f682826113d7565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600660205260408120545b92915050565b60055473ffffffffffffffffffffffffffffffffffffffff610100909104163314610761576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610552565b61056361164e565b6060600480546103b590611dc4565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091908381101561083c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610552565b6104698286868403610b4e565b600033610446818585610dd8565b834211156108c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610552565b60007f00000000000000000000000000000000000000000000000000000000000000008888886108f08c61170e565b60408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061095882611743565b90506000610968828787876117ac565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146109ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610552565b610a0a8a8a8a610b4e565b50505050505050505050565b60055473ffffffffffffffffffffffffffffffffffffffff610100909104163314610a9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610552565b73ffffffffffffffffffffffffffffffffffffffff8116610b40576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610552565b610604816115d0565b505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bf0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610552565b73ffffffffffffffffffffffffffffffffffffffff8216610c93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610552565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610dd25781811015610dc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610552565b610dd28484848403610b4e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610e7b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610552565b73ffffffffffffffffffffffffffffffffffffffff8216610f1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610552565b610f298383836117d4565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610fdf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610552565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290611023908490611d95565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161108991815260200190565b60405180910390a3610dd2565b60003073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161480156110fc57507f000000000000000000000000000000000000000000000000000000000000000046145b1561112657507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b60055460ff16611236576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610552565b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b73ffffffffffffffffffffffffffffffffffffffff8216611328576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610552565b611334600083836117d4565b80600260008282546113469190611d95565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290611380908490611d95565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff821661147a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610552565b611486826000836117d4565b73ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260409020548181101561153c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610552565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260408120838303905560028054849290611578908490611dad565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6005805473ffffffffffffffffffffffffffffffffffffffff8381166101008181027fffffffffffffffffffffff0000000000000000000000000000000000000000ff85161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60055460ff16156116bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610552565b600580547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586112813390565b73ffffffffffffffffffffffffffffffffffffffff811660009081526006602052604090208054600181018255905b50919050565b60006106d4611750611096565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006117bd87878787611841565b915091506117ca81611959565b5095945050505050565b60055460ff1615610b49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610552565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156118785750600090506003611950565b8460ff16601b1415801561189057508460ff16601c14155b156118a15750600090506004611950565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156118f5573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661194957600060019250925050611950565b9150600090505b94509492505050565b600081600481111561196d5761196d611e41565b14156119765750565b600181600481111561198a5761198a611e41565b14156119f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610552565b6002816004811115611a0657611a06611e41565b1415611a6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610552565b6003816004811115611a8257611a82611e41565b1415611b10576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610552565b6004816004811115611b2457611b24611e41565b1415610604576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610552565b803573ffffffffffffffffffffffffffffffffffffffff81168114611bd657600080fd5b919050565b600060208284031215611bed57600080fd5b611bf682611bb2565b9392505050565b60008060408385031215611c1057600080fd5b611c1983611bb2565b9150611c2760208401611bb2565b90509250929050565b600080600060608486031215611c4557600080fd5b611c4e84611bb2565b9250611c5c60208501611bb2565b9150604084013590509250925092565b600080600080600080600060e0888a031215611c8757600080fd5b611c9088611bb2565b9650611c9e60208901611bb2565b95506040880135945060608801359350608088013560ff81168114611cc257600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611cf257600080fd5b611cfb83611bb2565b946020939093013593505050565b600060208284031215611d1b57600080fd5b5035919050565b600060208083528351808285015260005b81811015611d4f57858101830151858201604001528201611d33565b81811115611d61576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008219821115611da857611da8611e12565b500190565b600082821015611dbf57611dbf611e12565b500390565b600181811c90821680611dd857607f821691505b6020821081141561173d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea2646970667358221220a2d18ca76ce12a775a44d134a16f8d41f880fd462cec8d9c908352019262e47164736f6c63430008060033";

type MetacanaConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MetacanaConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Metacana__factory extends ContractFactory {
  constructor(...args: MetacanaConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Metacana";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Metacana> {
    return super.deploy(overrides || {}) as Promise<Metacana>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Metacana {
    return super.attach(address) as Metacana;
  }
  connect(signer: Signer): Metacana__factory {
    return super.connect(signer) as Metacana__factory;
  }
  static readonly contractName: "Metacana";
  public readonly contractName: "Metacana";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MetacanaInterface {
    return new utils.Interface(_abi) as MetacanaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Metacana {
    return new Contract(address, _abi, signerOrProvider) as Metacana;
  }
}