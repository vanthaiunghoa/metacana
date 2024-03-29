/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TieredOwnableMock,
  TieredOwnableMockInterface,
} from "../TieredOwnableMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_firstOwner",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "previousTier",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newTier",
        type: "uint256",
      },
    ],
    name: "OwnershipGranted",
    type: "event",
  },
  {
    inputs: [],
    name: "anyone",
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
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tier",
        type: "uint256",
      },
    ],
    name: "assignOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getOwnerTier",
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
    name: "onlyMaxTier",
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
    inputs: [],
    name: "onlyTierFive",
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
    inputs: [],
    name: "onlyTierZero",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161074f38038061074f83398101604081905261002f91610153565b8073ffffffffffffffffffffffffffffffffffffffff81166100d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f5469657265644f776e61626c6523636f6e7374727563746f723a20494e56414c60448201527f49445f46495253545f4f574e4552000000000000000000000000000000000000606482015260840160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000818152602081905260408082207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9081905590519092907fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e908390a4505061018e565b600060208284031215610164578081fd5b815173ffffffffffffffffffffffffffffffffffffffff81168114610187578182fd5b9392505050565b6105b28061019d6000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063dd9fb4f611610050578063dd9fb4f6146100ac578063e8f35d5a146100b4578063f9dd0818146100d557610072565b80635d511a1114610077578063785beeb91461008c578063a67c68e8146100a4575b600080fd5b61008a610085366004610553565b6100dd565b005b60015b60405190151581526020015b60405180910390f35b61008f610366565b61008f610410565b6100c76100c2366004610532565b610421565b60405190815260200161009b565b61008f61044d565b336000908152602081905260409020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff908111156101a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f5469657265644f776e61626c65236f6e6c794f776e6572546965723a204f574e60448201527f45525f544945525f49535f544f4f5f4c4f57000000000000000000000000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316610246576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f5469657265644f776e61626c652361737369676e4f776e6572736869703a204960448201527f4e56414c49445f41444452455353000000000000000000000000000000000000606482015260840161019a565b3373ffffffffffffffffffffffffffffffffffffffff841614156102ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f5469657265644f776e61626c652361737369676e4f776e6572736869703a205560448201527f50444154494e475f53454c465f54494552000000000000000000000000000000606482015260840161019a565b73ffffffffffffffffffffffffffffffffffffffff8316600081815260208190526040808220549051859391927fa4e9b194bafb51369051927f4c07278de72aa1ee689f375215ea3a16dfef618e91a45073ffffffffffffffffffffffffffffffffffffffff909116600090815260208190526040902055565b33600090815260208190526040812054600590811115610408576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f5469657265644f776e61626c65236f6e6c794f776e6572546965723a204f574e60448201527f45525f544945525f49535f544f4f5f4c4f570000000000000000000000000000606482015260840161019a565b600191505090565b336000908152602081905280610408565b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020545b919050565b336000908152602081905260408120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90811115610408576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f5469657265644f776e61626c65236f6e6c794f776e6572546965723a204f574e60448201527f45525f544945525f49535f544f4f5f4c4f570000000000000000000000000000606482015260840161019a565b803573ffffffffffffffffffffffffffffffffffffffff8116811461044857600080fd5b600060208284031215610543578081fd5b61054c8261050e565b9392505050565b60008060408385031215610565578081fd5b61056e8361050e565b94602093909301359350505056fea26469706673582212200c6056b732096b0a2f5d8013949d2182ac1ab424ce5da635d112075ef292a58364736f6c63430008030033";

type TieredOwnableMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TieredOwnableMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TieredOwnableMock__factory extends ContractFactory {
  constructor(...args: TieredOwnableMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TieredOwnableMock";
  }

  deploy(
    _firstOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TieredOwnableMock> {
    return super.deploy(
      _firstOwner,
      overrides || {}
    ) as Promise<TieredOwnableMock>;
  }
  getDeployTransaction(
    _firstOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_firstOwner, overrides || {});
  }
  attach(address: string): TieredOwnableMock {
    return super.attach(address) as TieredOwnableMock;
  }
  connect(signer: Signer): TieredOwnableMock__factory {
    return super.connect(signer) as TieredOwnableMock__factory;
  }
  static readonly contractName: "TieredOwnableMock";
  public readonly contractName: "TieredOwnableMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TieredOwnableMockInterface {
    return new utils.Interface(_abi) as TieredOwnableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TieredOwnableMock {
    return new Contract(address, _abi, signerOrProvider) as TieredOwnableMock;
  }
}
