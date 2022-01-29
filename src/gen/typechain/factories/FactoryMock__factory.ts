/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { FactoryMock } from "../FactoryMock";

export class FactoryMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factoryManagerAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FactoryMock> {
    return super.deploy(
      _factoryManagerAddr,
      overrides || {}
    ) as Promise<FactoryMock>;
  }
  getDeployTransaction(
    _factoryManagerAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factoryManagerAddr, overrides || {});
  }
  attach(address: string): FactoryMock {
    return super.attach(address) as FactoryMock;
  }
  connect(signer: Signer): FactoryMock__factory {
    return super.connect(signer) as FactoryMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FactoryMock {
    return new Contract(address, _abi, signerOrProvider) as FactoryMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factoryManagerAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161060938038061060983398101604081905261002f91610079565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556100b4565b60006020828403121561008a578081fd5b815173ffffffffffffffffffffffffffffffffffffffff811681146100ad578182fd5b9392505050565b610546806100c36000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631f7fdffa1461003b578063731133e914610050575b600080fd5b61004e610049366004610287565b610063565b005b61004e61005e36600461031c565b6100f7565b6000546040517f1f7fdffa00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690631f7fdffa906100bf908790879087908790600401610412565b600060405180830381600087803b1580156100d957600080fd5b505af11580156100ed573d6000803e3d6000fd5b5050505050505050565b6000546040517f731133e900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063731133e9906100bf908790879087908790600401610472565b803573ffffffffffffffffffffffffffffffffffffffff8116811461017757600080fd5b919050565b600082601f83011261018c578081fd5b8135602067ffffffffffffffff8211156101a8576101a86104e1565b8082026101b68282016104b7565b8381528281019086840183880185018910156101d0578687fd5b8693505b858410156101f25780358352600193909301929184019184016101d4565b50979650505050505050565b600082601f83011261020e578081fd5b813567ffffffffffffffff811115610228576102286104e1565b61025960207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016104b7565b81815284602083860101111561026d578283fd5b816020850160208301379081016020019190915292915050565b6000806000806080858703121561029c578384fd5b6102a585610153565b9350602085013567ffffffffffffffff808211156102c1578485fd5b6102cd8883890161017c565b945060408701359150808211156102e2578384fd5b6102ee8883890161017c565b93506060870135915080821115610303578283fd5b50610310878288016101fe565b91505092959194509250565b60008060008060808587031215610331578384fd5b61033a85610153565b93506020850135925060408501359150606085013567ffffffffffffffff811115610363578182fd5b610310878288016101fe565b6000815180845260208085019450808401835b8381101561039e57815187529582019590820190600101610382565b509495945050505050565b60008151808452815b818110156103ce576020818501810151868301820152016103b2565b818111156103df5782602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff8616825260806020830152610441608083018661036f565b8281036040840152610453818661036f565b9050828103606084015261046781856103a9565b979650505050505050565b600073ffffffffffffffffffffffffffffffffffffffff86168252846020830152836040830152608060608301526104ad60808301846103a9565b9695505050505050565b60405181810167ffffffffffffffff811182821017156104d9576104d96104e1565b604052919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220f65b9368d0ed52df37e2bed8d3950df9a3f3b72359490c89d77872ed046f0a8c64736f6c63430008000033";
