/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapFactoryMock,
  UniswapFactoryMockInterface,
} from "../UniswapFactoryMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_uniswapPool",
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
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapPool",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516101f63803806101f683398101604081905261002f91610079565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556100b4565b60006020828403121561008a578081fd5b815173ffffffffffffffffffffffffffffffffffffffff811681146100ad578182fd5b9392505050565b610133806100c36000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063bdd3d825146037578063c9c6539614607f575b600080fd5b60005460569073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6056608a36600460d0565b505060005473ffffffffffffffffffffffffffffffffffffffff1690565b803573ffffffffffffffffffffffffffffffffffffffff8116811460cb57600080fd5b919050565b6000806040838503121560e1578182fd5b60e88360a8565b915060f46020840160a8565b9050925092905056fea2646970667358221220349322173ca7cae73ccb474d54254a72bd409e53de9856b382de7ae0feb2e3e764736f6c63430008030033";

type UniswapFactoryMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapFactoryMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapFactoryMock__factory extends ContractFactory {
  constructor(...args: UniswapFactoryMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UniswapFactoryMock";
  }

  deploy(
    _uniswapPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapFactoryMock> {
    return super.deploy(
      _uniswapPool,
      overrides || {}
    ) as Promise<UniswapFactoryMock>;
  }
  getDeployTransaction(
    _uniswapPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_uniswapPool, overrides || {});
  }
  attach(address: string): UniswapFactoryMock {
    return super.attach(address) as UniswapFactoryMock;
  }
  connect(signer: Signer): UniswapFactoryMock__factory {
    return super.connect(signer) as UniswapFactoryMock__factory;
  }
  static readonly contractName: "UniswapFactoryMock";
  public readonly contractName: "UniswapFactoryMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapFactoryMockInterface {
    return new utils.Interface(_abi) as UniswapFactoryMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapFactoryMock {
    return new Contract(address, _abi, signerOrProvider) as UniswapFactoryMock;
  }
}