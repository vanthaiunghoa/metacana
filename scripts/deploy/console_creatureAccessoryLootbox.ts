import hre, { ethers } from "hardhat";

// Types
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// import consoleAddresses from "../../utils/addresses/console.json";
import apAddresses from "../../utils/addresses/console_creatureAccessoryLootbox.json";
import * as fs from "fs";
import * as path from "path";

// Utils
async function main(): Promise<void> {
  // Get deployer
  const [deployer]: SignerWithAddress[] = await ethers.getSigners();
  const networkName: string = hre.network.name;  
  // const consoleAddress = consoleAddresses[networkName as keyof typeof consoleAddresses];
  const apAddress = apAddresses[networkName as keyof typeof apAddresses];

  const Forwarder_Factory: ContractFactory = await ethers.getContractFactory("Forwarder");
  const forwarder: Contract = await Forwarder_Factory.deploy();
  await forwarder.deployed();
  console.log(`Deploying Forwarder: ${forwarder.address} at tx hash: ${forwarder.deployTransaction.hash}`);

  const Library = await ethers.getContractFactory("LootBoxRandomness");
  const library = await Library.deploy();
  await library.deployed();

  // const prxoy_address = process.env.METACANA_NFT_PROXY_ADDRESS

  const CreatureAccessoryLootbox_Factory: ContractFactory = await ethers.getContractFactory("CreatureAccessoryLootbox", {
    libraries: {
      LootBoxRandomness: library.address,
    },
  });
  const creatureAccessoryLootbox: Contract = await CreatureAccessoryLootbox_Factory.deploy(
    forwarder.address);

  console.log(`Deploying CreatureAccessoryLootbox: ${creatureAccessoryLootbox.address} at tx hash: ${creatureAccessoryLootbox.deployTransaction.hash}`);

  await creatureAccessoryLootbox.deployed();  

  const updatedAddresses = {
    ...apAddresses,
    [networkName]: {
      ...apAddress,
      forwarder: forwarder.address,
      creatureAccessoryLootbox: creatureAccessoryLootbox.address,      
    },
  };

  fs.writeFileSync(
    path.join(__dirname, "../../utils/addresses/console_creatureAccessoryLootbox.json"),
    JSON.stringify(updatedAddresses, null, 2),
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
