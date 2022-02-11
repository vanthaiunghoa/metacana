import hre, { ethers } from "hardhat";

// Types
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// import consoleAddresses from "../../utils/addresses/console.json";
import apAddresses from "../../utils/addresses/console_canaItem.json";
import * as fs from "fs";
import * as path from "path";

// Utils
async function main(): Promise<void> {
  // Get deployer
  const [deployer]: SignerWithAddress[] = await ethers.getSigners();
  const networkName: string = hre.network.name;    
  let apAddress = apAddresses[networkName as keyof typeof apAddresses];

  const CanaItem_Factory: ContractFactory = await ethers.getContractFactory("CanaItem");
  const canaItem: Contract = await CanaItem_Factory.deploy();

  console.log(`Deploying CanaItem: ${canaItem.address} at tx hash: ${canaItem.deployTransaction.hash}`);

  await canaItem.deployed();  

  const updatedAddresses = {
    ...apAddresses,
    [networkName]: {
      ...apAddress,      
      canaItem: canaItem.address,      
    },
  };

  fs.writeFileSync(
    path.join(__dirname, "../../utils/addresses/console_canaItem.json"),
    JSON.stringify(updatedAddresses, null, 2),
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
