import hre, { ethers } from "hardhat";

// Types
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// import consoleAddresses from "../../utils/addresses/console.json";
import apAddresses from "../../utils/addresses/console_canaItemRLootChest.json";
import * as fs from "fs";
import * as path from "path";

// Utils
async function main(): Promise<void> {
  // Get deployer
  const [deployer]: SignerWithAddress[] = await ethers.getSigners();
  const networkName: string = hre.network.name;  
  // const consoleAddress = consoleAddresses[networkName as keyof typeof consoleAddresses];
  const apAddress = apAddresses[networkName as keyof typeof apAddresses];

  const Library = await ethers.getContractFactory("CanaBoxLib");
  const library = await Library.deploy();
  await library.deployed();

  // const prxoy_address = process.env.METACANA_NFT_PROXY_ADDRESS

  const CanaItemLootBox_Factory: ContractFactory = await ethers.getContractFactory("CanaItemLootBox", {
    libraries: {
      CanaBoxLib: library.address,
    },
  });
  const CanaItemLootBox: Contract = await CanaItemLootBox_Factory.deploy();

  console.log(`Deploying CanaItemLootBox: ${CanaItemLootBox.address} at tx hash: ${CanaItemLootBox.deployTransaction.hash}`);

  await CanaItemLootBox.deployed();  

  const updatedAddresses = {
    ...apAddresses,
    [networkName]: {
      ...apAddress,
      canaItemLootBox: CanaItemLootBox.address,  
      canaBoxLib: library.address,    
    },
  };

  fs.writeFileSync(
    path.join(__dirname, "../../utils/addresses/console_canaItemLootBox.json"),
    JSON.stringify(updatedAddresses, null, 2),
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
