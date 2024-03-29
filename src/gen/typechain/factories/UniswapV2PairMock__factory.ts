/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapV2PairMock,
  UniswapV2PairMockInterface,
} from "../UniswapV2PairMock";

const _abi = [
  {
    inputs: [],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50606580601d6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063fff6cae914602d575b600080fd5b00fea26469706673582212207e49bcebc9771928251e04251bb8be56e233d605ae71236180540ac61c66ec8e64736f6c63430008030033";

type UniswapV2PairMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV2PairMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV2PairMock__factory extends ContractFactory {
  constructor(...args: UniswapV2PairMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UniswapV2PairMock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV2PairMock> {
    return super.deploy(overrides || {}) as Promise<UniswapV2PairMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniswapV2PairMock {
    return super.attach(address) as UniswapV2PairMock;
  }
  connect(signer: Signer): UniswapV2PairMock__factory {
    return super.connect(signer) as UniswapV2PairMock__factory;
  }
  static readonly contractName: "UniswapV2PairMock";
  public readonly contractName: "UniswapV2PairMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2PairMockInterface {
    return new utils.Interface(_abi) as UniswapV2PairMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2PairMock {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2PairMock;
  }
}
