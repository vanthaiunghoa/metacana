import hre, { ethers } from "hardhat";

// Types
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import nftAddresses from "../../utils/addresses/console_canaItem.json";
import lootboxAddresses from "../../utils/addresses/console_canaItemLootBox.json";
import apAddresses from "../../utils/addresses/console_canaItemFactory.json";
import { setupCreatureAccessories } from "../lib/setupCreatureAccessories"
import * as fs from "fs";
import * as path from "path";

import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: resolve(__dirname, "./.env") });

// Utils
async function main(): Promise<void> {
  // Get deployer
  const [deployer]: SignerWithAddress[] = await ethers.getSigners();
  const networkName: string = hre.network.name;    
  
  const apAddress = apAddresses[networkName as keyof typeof apAddresses];
  const nftAddress = nftAddresses[networkName as keyof typeof nftAddresses];
  const lootboxAddress = lootboxAddresses[networkName as keyof typeof lootboxAddresses];
    
  const nftContractFact = await ethers.getContractFactory("CanaItem");
  const nftContract = await nftContractFact.attach((nftAddress as any).canaItem);
  const lootBoxContractFact = await ethers.getContractFactory("CanaItemLootBox",{
    libraries: {
      CanaBoxLib: (lootboxAddress as any).canaBoxLib,
    },
  });
  const lootBoxContract = await lootBoxContractFact.attach((lootboxAddress as any).canaItemLootBox);
  const canaItemFactoryFact = await ethers.getContractFactory("CanaItemFactory");
  const canaItemFactoryContract = await canaItemFactoryFact.attach((apAddress as any).canaItemFactory);
  await setupCreatureAccessories(nftContract, canaItemFactoryContract, lootBoxContract, process.env.BOX_OWNER_ADDRESS)

  console.log('Done setup')
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
