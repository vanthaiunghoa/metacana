import hre, { ethers } from "hardhat";

// Types
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import nftAddresses from "../../utils/addresses/console_metacanaNFT.json";
import lootboxAddresses from "../../utils/addresses/console_creatureAccessoryLootbox.json";
import apAddresses from "../../utils/addresses/console_creatureAccessoryFactory.json";
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

  // const Forwarder_Factory: ContractFactory = await ethers.getContractFactory("Forwarder");
  // const forwarder: Contract = await Forwarder_Factory.deploy();
  // await forwarder.deployed();
  // console.log(`Deploying Forwarder: ${forwarder.address} at tx hash: ${forwarder.deployTransaction.hash}`);

  // const Library = await ethers.getContractFactory("AssetRangeStruct");
  // const library = await Library.deploy();
  // await library.deployed();

  // const prxoy_address = process.env.METACANA_NFT_PROXY_ADDRESS
  
  const CreatureAccessoryFactory_Factory: ContractFactory = await ethers.getContractFactory("CreatureAccessoryFactory");
  const creatureAccessoryFactory: Contract = await CreatureAccessoryFactory_Factory.deploy(
    (nftAddress as any).metacanaNFT,
    (lootboxAddress as any).creatureAccessoryLootBox
    );

  console.log(`Deploying CreatureAccessoryFactory: ${creatureAccessoryFactory.address} at tx hash: ${creatureAccessoryFactory.deployTransaction.hash}`);

  await creatureAccessoryFactory.deployed();  

  const updatedAddresses = {
    ...apAddresses,
    [networkName]: {
      ...apAddress,      
      creatureAccessoryFactory: creatureAccessoryFactory.address,      
    },
  };

  fs.writeFileSync(
    path.join(__dirname, "../../utils/addresses/console_creatureAccessoryFactory.json"),
    JSON.stringify(updatedAddresses, null, 2),
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
