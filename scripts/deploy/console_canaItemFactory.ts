import hre, { ethers } from "hardhat";

// Types
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import canaItems from "../../utils/addresses/console_canaItem.json";
import lootchestAddresses from "../../utils/addresses/console_canaItemLootChest.json";
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
  const canaItem = canaItems[networkName as keyof typeof canaItems];
  const lootchestAddress = lootchestAddresses[networkName as keyof typeof lootchestAddresses];
  
  console.log(`(canaItem as any).canaItem == ${(canaItem as any).canaItem}`)
  console.log(`(lootchestAddress as any).canaItemLootChest == ${(lootchestAddress as any).canaItemLootChest}`)
  console.log(`(lootchestAddress as any).canaBoxLib == ${(lootchestAddress as any).canaBoxLib}`)

  const canaItemFactory_Factory: ContractFactory = await ethers.getContractFactory("CanaItemFactory");
  const canaItemFactory: Contract = await canaItemFactory_Factory.deploy(
    (canaItem as any).canaItem,
    (lootchestAddress as any).canaItemLootChest
    );

  console.log(`Deploying CanaItemFactory: ${canaItemFactory.address} at tx hash: ${canaItemFactory.deployTransaction.hash}`);

  await canaItemFactory.deployed();  
  const canaItemContractFact = await ethers.getContractFactory("ERC1155");
  const canaItemContract = await canaItemContractFact.attach((canaItem as any).canaItem);  
  const lootChestContractFact = await ethers.getContractFactory("CanaItemLootBox",{
    libraries: {
      CanaBoxLib: (lootchestAddress as any).canaBoxLib,
    },
  });
  const lootChestContract = await lootChestContractFact.attach((lootchestAddress as any).canaItemLootChest);
  console.log(`Done deploying all stuffs and ready to setup lootbox`);
  await setupCreatureAccessories(canaItemContract, canaItemFactory, lootChestContract, process.env.OWNER_ADDRESS)

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
