import hre, { ethers } from "hardhat";

// Types
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import apAddresses from "../../utils/addresses/console_marketplace.json";
import * as fs from "fs";
import * as path from "path";

// Utils
async function main(): Promise<void> {
  // Get deployer
  const [deployer]: SignerWithAddress[] = await ethers.getSigners();
  const networkName: string = hre.network.name;    
  const apAddress = apAddresses[networkName as keyof typeof apAddresses];

  const Marketplace_Factory: ContractFactory = await ethers.getContractFactory("Marketplace");
  const marketplace: Contract = await Marketplace_Factory.deploy();

  console.log(`Deploying Marketplace: ${marketplace.address} at tx hash: ${marketplace.deployTransaction.hash}`);

  await marketplace.deployed();

  const updatedAddresses = {    
    ...apAddresses,
    [networkName]: {  
      ...apAddress,    
      marketplace: marketplace.address,      
    },
  };

  fs.writeFileSync(
    path.join(__dirname, "../../utils/addresses/console_marketplace.json"),
    JSON.stringify(updatedAddresses, null, 2),
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
