/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Registry, RegistryInterface } from "../Registry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "address",
        name: "_forwarder",
        type: "address",
      },
      {
        internalType: "address",
        name: "_deployer",
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
        indexed: false,
        internalType: "uint256",
        name: "defaultFeeBps",
        type: "uint256",
      },
    ],
    name: "DefaultFeeBpsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newDeployer",
        type: "address",
      },
    ],
    name: "DeployerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "controlAddress",
        type: "address",
      },
    ],
    name: "MigratedProtocolControl",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "controlAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "controlDeployer",
        type: "address",
      },
    ],
    name: "NewProtocolControl",
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
        indexed: true,
        internalType: "address",
        name: "control",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeBps",
        type: "uint256",
      },
    ],
    name: "ProtocolControlFeeBpsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newTreasury",
        type: "address",
      },
    ],
    name: "TreasuryUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_PROVIDER_FEE_BPS",
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
        name: "_deployer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_protocolControl",
        type: "address",
      },
    ],
    name: "addProtocolControl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultFeeBps",
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
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "deployProtocol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deployer",
    outputs: [
      {
        internalType: "contract IControlDeployer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "forwarder",
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
        name: "protocolControl",
        type: "address",
      },
    ],
    name: "getFeeBps",
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
        name: "_deployer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getProtocolControl",
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
        name: "_deployer",
        type: "address",
      },
    ],
    name: "getProtocolControlCount",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newFeeBps",
        type: "uint256",
      },
    ],
    name: "setDefaultFeeBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newDeployer",
        type: "address",
      },
    ],
    name: "setDeployer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "protocolControl",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_newFeeBps",
        type: "uint256",
      },
    ],
    name: "setProtocolControlFeeBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newTreasury",
        type: "address",
      },
    ],
    name: "setTreasury",
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
  {
    inputs: [],
    name: "treasury",
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
  "0x60806040526101f460015534801561001657600080fd5b5060405161118038038061118083398101604081905261003591610143565b61003e336100a5565b6002805473ffffffffffffffffffffffffffffffffffffffff9485167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600380549385169382169390931790925560048054919093169116179055610185565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b805173ffffffffffffffffffffffffffffffffffffffff8116811461013e57600080fd5b919050565b600080600060608486031215610157578283fd5b6101608461011a565b925061016e6020850161011a565b915061017c6040850161011a565b90509250925092565b610fec806101946000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806396214735116100b2578063d5f3948811610081578063f0f4426011610066578063f0f44260146102c1578063f2fde38b146102d4578063f645d4f9146102e75761011b565b8063d5f394881461025a578063dc62163e1461027a5761011b565b806396214735146101f5578063bcae25a414610208578063cd7e89b114610211578063d566464b146102475761011b565b806373c6f378116100ee57806373c6f3781461019e5780637c160011146101b15780638da5cb5b146101c45780638e75aea9146101e25761011b565b80634373a286146101205780635cd423151461013557806361d027b314610151578063715018a614610196575b600080fd5b61013361012e366004610e7a565b610307565b005b61013e6103e881565b6040519081526020015b60405180910390f35b6002546101719073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610148565b61013361045b565b61013e6101ac366004610d10565b6104e8565b6101336101bf366004610d87565b610525565b60005473ffffffffffffffffffffffffffffffffffffffff16610171565b6101336101f0366004610d4f565b61069e565b610133610203366004610d10565b6107bb565b61013e60015481565b61013e61021f366004610d10565b73ffffffffffffffffffffffffffffffffffffffff1660009081526005602052604090205490565b610133610255366004610db2565b6108af565b6004546101719073ffffffffffffffffffffffffffffffffffffffff1681565b610171610288366004610d87565b73ffffffffffffffffffffffffffffffffffffffff91821660009081526005602090815260408083209383526001909301905220541690565b6101336102cf366004610d10565b610a11565b6101336102e2366004610d10565b610b05565b6003546101719073ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461038d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6103e881111561041f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f52656769737472793a2070726f7669646572206665652063616e6e6f7420626560448201527f2067726561746572207468616e203130250000000000000000000000000000006064820152608401610384565b60018190556040518181527faf07358220f107097f5c9bc5cacec9de23c6bd67d61633e5abaa3aa698d94fcf906020015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610384565b6104e66000610c35565b565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600660205260408120548061051d575050600154610520565b90505b919050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610384565b6103e8811115610638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f52656769737472793a2070726f7669646572206665652063616e6e6f7420626560448201527f2067726561746572207468616e203130250000000000000000000000000000006064820152608401610384565b73ffffffffffffffffffffffffffffffffffffffff821660008181526006602052604090819020839055517f3f3f5381919d082b3f6431a55b5affd99c52c10d6b16a850a6c75377c17285a7906106929084815260200190565b60405180910390a25050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461071f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610384565b600061072a83610caa565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260056020908152604080832086845260010190915280822080547fffffffffffffffffffffffff000000000000000000000000000000000000000016948816948517905551939450919284927fdba9aa581603bcdba2c5e0931430e0e092dc61b76318944adef4cc5dc0cf8d9991a4505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461083c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610384565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f6db6dcdd05f1728263d8f644adcb07da9d18505aa9b2e33360b2715a878a711e90602001610450565b3360006108bb82610caa565b600480546040517fca282cb300000000000000000000000000000000000000000000000000000000815292935060009273ffffffffffffffffffffffffffffffffffffffff9091169163ca282cb39161091a91869188918a9101610e92565b602060405180830381600087803b15801561093457600080fd5b505af1158015610948573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096c9190610d33565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260056020908152604080832088845260010182529182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000168686169081179091556004549251929094168252939450919285927f87f4df5222ed82bbc7706c066c5d45f3f5682016cb20d642c5491b7b411340b4910160405180910390a450505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610384565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f7dae230f18360d76a040c81f050aa14eb9d6dc7901b20fc5d855e2a20fe814d190602001610450565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610384565b73ffffffffffffffffffffffffffffffffffffffff8116610c29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610384565b610c3281610c35565b50565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526005602052604081208054600191908390610ce2908490610f28565b90915550505073ffffffffffffffffffffffffffffffffffffffff1660009081526005602052604090205490565b600060208284031215610d21578081fd5b8135610d2c81610f94565b9392505050565b600060208284031215610d44578081fd5b8151610d2c81610f94565b60008060408385031215610d61578081fd5b8235610d6c81610f94565b91506020830135610d7c81610f94565b809150509250929050565b60008060408385031215610d99578182fd5b8235610da481610f94565b946020939093013593505050565b600060208284031215610dc3578081fd5b813567ffffffffffffffff80821115610dda578283fd5b818401915084601f830112610ded578283fd5b813581811115610dff57610dff610f65565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610e4557610e45610f65565b81604052828152876020848701011115610e5d578586fd5b826020860160208301379182016020019490945295945050505050565b600060208284031215610e8b578081fd5b5035919050565b6000848252602073ffffffffffffffffffffffffffffffffffffffff851681840152606060408401528351806060850152825b81811015610ee157858101830151858201608001528201610ec5565b81811115610ef25783608083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160800195945050505050565b60008219821115610f60577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610c3257600080fdfea2646970667358221220feefd892f189a7108dd31fe976e52889f46aeeccb0029ac780cd29b56fdf6bb364736f6c63430008030033";

type RegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Registry__factory extends ContractFactory {
  constructor(...args: RegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Registry";
  }

  deploy(
    _treasury: string,
    _forwarder: string,
    _deployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Registry> {
    return super.deploy(
      _treasury,
      _forwarder,
      _deployer,
      overrides || {}
    ) as Promise<Registry>;
  }
  getDeployTransaction(
    _treasury: string,
    _forwarder: string,
    _deployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _treasury,
      _forwarder,
      _deployer,
      overrides || {}
    );
  }
  attach(address: string): Registry {
    return super.attach(address) as Registry;
  }
  connect(signer: Signer): Registry__factory {
    return super.connect(signer) as Registry__factory;
  }
  static readonly contractName: "Registry";
  public readonly contractName: "Registry";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RegistryInterface {
    return new utils.Interface(_abi) as RegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Registry {
    return new Contract(address, _abi, signerOrProvider) as Registry;
  }
}
