/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { LootBoxRandomness } from "../LootBoxRandomness";

export class LootBoxRandomness__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LootBoxRandomness> {
    return super.deploy(overrides || {}) as Promise<LootBoxRandomness>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LootBoxRandomness {
    return super.attach(address) as LootBoxRandomness;
  }
  connect(signer: Signer): LootBoxRandomness__factory {
    return super.connect(signer) as LootBoxRandomness__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LootBoxRandomness {
    return new Contract(address, _abi, signerOrProvider) as LootBoxRandomness;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "optionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boxesPurchased",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "itemsMinted",
        type: "uint256",
      },
    ],
    name: "LootBoxOpened",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Warning",
    type: "event",
  },
];

const _bytecode =
  "0x610922610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061007c5760003560e01c806371a8f3ad1161005a57806371a8f3ad146100e3578063af6b5d7d14610103578063b13d6c35146101235761007c565b80631d196bfa146100815780636306b42b146100a3578063657cfa24146100c3575b600080fd5b81801561008d57600080fd5b506100a161009c366004610634565b610143565b005b8180156100af57600080fd5b506100a16100be3660046105d5565b61014b565b8180156100cf57600080fd5b506100a16100de366004610655565b6101a3565b8180156100ef57600080fd5b506100a16100fe3660046106fa565b610210565b81801561010f57600080fd5b506100a161011e366004610634565b61025d565b81801561012f57600080fd5b506100a161013e366004610725565b6102b7565b600590910155565b84547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9490941693909317845560018401919091556002830155600590910155565b826002015482106101e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e0906107a3565b60405180910390fd5b60008281526004840160209081526040909120825161020a92840190610439565b50505050565b8260020154811061024d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e0906107a3565b610258838284610415565b505050565b8160020154811061029a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e0906107a3565b600081815260048301602052604081206102b391610484565b5050565b846001015484106102f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e0906107da565b6000805b825181101561036557600083828151811061033c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161ffff16111561035357600191505b8061035d8161085f565b9150506102f8565b506040805160808101825285815260208082018681528415158385015260608301869052600089815260038b0183529390932082518155925180519293849390926103b79260018501929101906104a5565b5060408201516002820180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055606082015180516104099160038401916020909101906104a5565b50505050505050505050565b60009182526004909201602090815260408220805460018101825590835291200155565b828054828255906000526020600020908101928215610474579160200282015b82811115610474578251825591602001919060010190610459565b50610480929150610545565b5090565b50805460008255906000526020600020908101906104a29190610545565b50565b82805482825590600052602060002090600f016010900481019282156104745791602002820160005b8382111561050e57835183826101000a81548161ffff021916908361ffff16021790555092602001926002016020816001010492830192600103026104ce565b801561053c5782816101000a81549061ffff021916905560020160208160010104928301926001030261050e565b50506104809291505b5b808211156104805760008155600101610546565b600082601f83011261056a578081fd5b8135602061057f61057a8361083b565b610811565b828152818101908583018385028701840188101561059b578586fd5b855b858110156105c857813561ffff811681146105b6578788fd5b8452928401929084019060010161059d565b5090979650505050505050565b600080600080600060a086880312156105ec578081fd5b85359450602086013573ffffffffffffffffffffffffffffffffffffffff81168114610616578182fd5b94979496505050506040830135926060810135926080909101359150565b60008060408385031215610646578182fd5b50508035926020909101359150565b600080600060608486031215610669578283fd5b833592506020808501359250604085013567ffffffffffffffff81111561068e578283fd5b8501601f8101871361069e578283fd5b80356106ac61057a8261083b565b81815283810190838501858402850186018b10156106c8578687fd5b8694505b838510156106ea5780358352600194909401939185019185016106cc565b5080955050505050509250925092565b60008060006060848603121561070e578283fd5b505081359360208301359350604090920135919050565b600080600080600060a0868803121561073c578081fd5b853594506020860135935060408601359250606086013567ffffffffffffffff80821115610768578283fd5b61077489838a0161055a565b93506080880135915080821115610789578283fd5b506107968882890161055a565b9150509295509295909350565b60208082526013908201527f5f636c617373206f7574206f662072616e676500000000000000000000000000604082015260600190565b60208082526014908201527f5f6f7074696f6e206f7574206f662072616e6765000000000000000000000000604082015260600190565b60405181810167ffffffffffffffff81118282101715610833576108336108bd565b604052919050565b600067ffffffffffffffff821115610855576108556108bd565b5060209081020190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156108b6577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220e2aeae3d13bf81a798a6a85705faa4003db91dd26700a18904d2bfda478fa5ae64736f6c63430008000033";
