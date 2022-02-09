/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockProxyRegistry,
  MockProxyRegistryInterface,
} from "../MockProxyRegistry";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "proxies",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_proxyForAddress",
        type: "address",
      },
    ],
    name: "setProxy",
    outputs: [],
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b610094565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6104d2806100a36000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063a9d4630c11610050578063a9d4630c146100b9578063c4552791146100cc578063f2fde38b1461010257610067565b8063715018a61461006c5780638da5cb5b14610076575b600080fd5b610074610115565b005b60005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100746100c736600461046a565b6101a7565b6100906100da366004610449565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b610074610110366004610449565b61027b565b60005473ffffffffffffffffffffffffffffffffffffffff16331461019b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6101a560006103ab565b565b60005473ffffffffffffffffffffffffffffffffffffffff163314610228576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610192565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610192565b73ffffffffffffffffffffffffffffffffffffffff811661039f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610192565b6103a8816103ab565b50565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461044457600080fd5b919050565b60006020828403121561045a578081fd5b61046382610420565b9392505050565b6000806040838503121561047c578081fd5b61048583610420565b915061049360208401610420565b9050925092905056fea2646970667358221220dbbf81ae77fb0f7e577d37807ead46314a491d567118e2b4532eec182ec7c53364736f6c63430008030033";

type MockProxyRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockProxyRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockProxyRegistry__factory extends ContractFactory {
  constructor(...args: MockProxyRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockProxyRegistry";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockProxyRegistry> {
    return super.deploy(overrides || {}) as Promise<MockProxyRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockProxyRegistry {
    return super.attach(address) as MockProxyRegistry;
  }
  connect(signer: Signer): MockProxyRegistry__factory {
    return super.connect(signer) as MockProxyRegistry__factory;
  }
  static readonly contractName: "MockProxyRegistry";
  public readonly contractName: "MockProxyRegistry";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockProxyRegistryInterface {
    return new utils.Interface(_abi) as MockProxyRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockProxyRegistry {
    return new Contract(address, _abi, signerOrProvider) as MockProxyRegistry;
  }
}