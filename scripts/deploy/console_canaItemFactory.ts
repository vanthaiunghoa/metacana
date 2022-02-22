import hre, { ethers } from "hardhat";

// Types
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import nftAddresses from "../../utils/addresses/console_canaItem.json";
import lootboxAddresses from "../../utils/addresses/console_canaItemLootBox.json";
import apAddresses from "../../utils/addresses/console_canaItemFactory.json";
import { setupCreatureAccessories } from "../../scripts/lib/setupCreatureAccessories"
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
  
  console.log(`(nftAddress as any).canaItem == ${(nftAddress as any).canaItem}`)
  console.log(`(lootboxAddress as any).CanaItemLootBox == ${(lootboxAddress as any).canaItemLootBox}`)
  console.log(`(lootboxAddress as any).canaBoxLib == ${(lootboxAddress as any).canaBoxLib}`)

  const CanaItemFactory_Factory: ContractFactory = await ethers.getContractFactory("CanaItemFactory");
  const canaItemFactory: Contract = await CanaItemFactory_Factory.deploy(
    (nftAddress as any).canaItem,
    (lootboxAddress as any).canaItemLootBox
    );

  console.log(`Deploying CanaItemFactory: ${canaItemFactory.address} at tx hash: ${canaItemFactory.deployTransaction.hash}`);

  await canaItemFactory.deployed();  
  const nftContractFact = await ethers.getContractFactory("CanaItem");
  const nftContract = await nftContractFact.attach((nftAddress as any).canaItem);  
  const lootBoxContractFact = await ethers.getContractFactory("CanaItemLootBox",{
    libraries: {
      CanaBoxLib: (lootboxAddress as any).canaBoxLib,
    },
  });
  const lootBoxContract = await lootBoxContractFact.attach((lootboxAddress as any).canaItemLootBox);
  console.log(`Done deploying all stuffs and ready to setup lootbox`);
  await setupCreatureAccessories(nftContract, canaItemFactory, lootBoxContract, process.env.BOX_OWNER_ADDRESS)

  const updatedAddresses = {
    ...apAddresses,
    [networkName]: {
      ...apAddress,      
      canaItemFactory: canaItemFactory.address,      
    },
  };

  fs.writeFileSync(
    path.join(__dirname, "../../utils/addresses/console_canaItemFactory.json"),
    JSON.stringify(updatedAddresses, null, 2),
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });