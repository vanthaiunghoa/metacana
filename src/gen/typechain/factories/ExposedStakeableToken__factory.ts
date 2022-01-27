/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ExposedStakeableToken } from "../ExposedStakeableToken";

export class ExposedStakeableToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _underlyingAddress: string,
    _stakeableStrategyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExposedStakeableToken> {
    return super.deploy(
      _underlyingAddress,
      _stakeableStrategyAddress,
      overrides || {}
    ) as Promise<ExposedStakeableToken>;
  }
  getDeployTransaction(
    _underlyingAddress: string,
    _stakeableStrategyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _underlyingAddress,
      _stakeableStrategyAddress,
      overrides || {}
    );
  }
  attach(address: string): ExposedStakeableToken {
    return super.attach(address) as ExposedStakeableToken;
  }
  connect(signer: Signer): ExposedStakeableToken__factory {
    return super.connect(signer) as ExposedStakeableToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExposedStakeableToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ExposedStakeableToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlyingAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakeableStrategyAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousStakeableStrategy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newStakeableStrategy",
        type: "address",
      },
    ],
    name: "StakeableStrategyUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "StakedTokens",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawnTokens",
    type: "event",
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
    inputs: [],
    name: "getStakers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
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
    name: "lastUpdateTime",
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
        name: "_stakeableStrategyAddress",
        type: "address",
      },
    ],
    name: "setStakeableStrategy",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeableStrategy",
    outputs: [
      {
        internalType: "contract IStakeableStrategy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakers",
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
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b84380380610b848339818101604052604081101561003357600080fd5b5080516020909101516000805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560068054939092169216919091179055610ae58061009f6000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80636f307dc31161007657806399cc23cb1161005b57806399cc23cb146101f3578063a694fc3a14610226578063fd5e6dd114610243576100be565b80636f307dc3146101b857806370a08231146101c0576100be565b80632e1a7d4d116100a75780632e1a7d4d1461011057806343352d611461012f5780635153e5cc14610187576100be565b806318160ddd146100c35780632ce9aead146100dd575b600080fd5b6100cb610260565b60408051918252519081900360200190f35b6100cb600480360360208110156100f357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610266565b61012d6004803603602081101561012657600080fd5b503561028e565b005b61013761029a565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561017357818101518382015260200161015b565b505050509050019250505060405180910390f35b61018f610309565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61018f610325565b6100cb600480360360208110156101d657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610341565b61012d6004803603602081101561020957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610369565b61012d6004803603602081101561023c57600080fd5b5035610372565b61018f6004803603602081101561025957600080fd5b503561037b565b60015490565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b610297816103b2565b50565b606060058054806020026020016040519081016040528092919081815260200182805480156102ff57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116102d4575b5050505050905090565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b610297816103bc565b6102978161044a565b6005818154811061038b57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b610297813361072d565b60065460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f75774f26d6124c861a4792c459d439572cd2430cbcd07f031b24315c0ad86cec90600090a3600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b33801561047a5773ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090204290555b60065473ffffffffffffffffffffffffffffffffffffffff16158061053a5750600654604080517f36d8bf93000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff909216916336d8bf93916024808201926020929091908290030181600087803b15801561050d57600080fd5b505af1158015610521573d6000803e3d6000fd5b505050506040513d602081101561053757600080fd5b50515b61058f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526045815260200180610a436045913960600191505060405180910390fd5b3360009081526004602052604090205461060d5760058054600181019091557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915560009081526004602052604090204290555b60015461061a9083610950565b600155336000908152600260205260409020546106379083610950565b33600081815260026020908152604080832094909455815484517f23b872dd000000000000000000000000000000000000000000000000000000008152600481019490945230602485015260448401879052935173ffffffffffffffffffffffffffffffffffffffff909416936323b872dd93606480820194918390030190829087803b1580156106c757600080fd5b505af11580156106db573d6000803e3d6000fd5b505050506040513d60208110156106f157600080fd5b505060408051838152905133917f07ebe4cc0edd899e6e61889dcebbcaeb1e6ae4e97d01019119e07184016bd076919081900360200190a25050565b33801561075d5773ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604090204290555b600083116107cc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f43616e6e6f742077697468647261772030000000000000000000000000000000604482015290519081900360640190fd5b33600090815260026020526040902054831115610834576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180610a886028913960400191505060405180910390fd5b60015461084190846109cb565b6001553360009081526002602052604090205461085e90846109cb565b33600090815260026020908152604080832093909355815483517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152602482018990529451949091169363a9059cbb93604480840194938390030190829087803b1580156108e957600080fd5b505af11580156108fd573d6000803e3d6000fd5b505050506040513d602081101561091357600080fd5b505060408051848152905133917f373d92bf7d9cdd58a8c86db5461f3cdcd325b803fdbac8d1b224a0f5fce847b8919081900360200190a2505050565b6000828201838110156109c457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600082821115610a3c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe5374616b6561626c65546f6b656e235f7374616b653a2053656e64657220646f65736e2774206d6565742074686520726571756972656d656e747320746f207374616b652e43616e6e6f74207769746864726177206d6f7265207468616e20776861742773207374616b65642ea2646970667358221220298b74bb9bad3e70c6de57f5a6eb07f530a81a730a5817196c1be49e2a6b3c1e64736f6c63430007040033";
