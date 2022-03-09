import hre, { ethers } from "hardhat";
import { ContractFactory } from "ethers";

// Types
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import apAddresses from "../../utils/addresses/console_marketplace.json";;
import { setupMarketplaceWithAddress } from "../lib/setupMarketplace"
import lootboxAddresses from "../../utils/addresses/console_canaItemLootBox.json";
import metaCanaAddresses from "../../utils/addresses/console_metacana.json";

import Web3 from 'web3';
const web3 = new Web3("http://localhost:8545") as Web3;

import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: resolve(__dirname, "./.env") });

// Utils
async function main(): Promise<void> {
  // Get deployer
  const [deployer]: SignerWithAddress[] = await ethers.getSigners();
  const networkName: string = hre.network.name;    
  
  const apAddress = apAddresses[networkName as keyof typeof apAddresses];
  const lootboxAddress = lootboxAddresses[networkName as keyof typeof lootboxAddresses];
  const metaCanaAddress = metaCanaAddresses[networkName as keyof typeof metaCanaAddresses];
    
  const marketplaceFact = await ethers.getContractFactory("Marketplace");
  const marketplaceContract = await marketplaceFact.attach((apAddress as any).marketplace);

  const lootBoxContractFact = await ethers.getContractFactory("CanaItemLootBox",{
    libraries: {
      CanaBoxLib: (lootboxAddress as any).canaBoxLib,
    },
  });
  const lootBoxContract = await lootBoxContractFact.attach((lootboxAddress as any).canaItemLootBox);

  const Metacana_Factory: ContractFactory = await ethers.getContractFactory("Metacana");
  const metacana = await Metacana_Factory.attach((metaCanaAddress as any).metacana);

  await setupMarketplaceWithAddress(lootBoxContract, marketplaceContract, '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', 10, metacana.address)
  await metacana.mint('0xbfe957de6443e607f7ec9de2c9df5caad7a5c4f5', web3.utils.toWei('10000')); 

  // const provider = new ethers.providers.JsonRpcProvider(web3.currentProvider)
    let provider = new ethers.providers.JsonRpcProvider('0xe16f33f0e9b973ac02934d1c39a09722557a72ea');

  let signer = provider.getSigner();
  await lootBoxContract.connect(signer).setApprovalForAll(marketplaceContract.address, true);
  console.log('Done setup marketplace')
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
