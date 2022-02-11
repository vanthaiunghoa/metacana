import { Contract, ContractFactory } from "@ethersproject/contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import hre, { ethers } from "hardhat";
import apAddresses from "../../utils/addresses/console_metacana.json";

import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";

import * as fs from "fs";
import * as path from "path";

dotenvConfig({ path: resolve(__dirname, "./.env") });

async function main() {
  // Get signer
  const [deployer]: SignerWithAddress[] = await ethers.getSigners();
    
  // Deploy contract
  const Metacana: ContractFactory = await ethers.getContractFactory("Metacana");
  const initial_supply = process.env.METACANA_INITIAL_SUPPLY
  const networkName: string = hre.network.name;
  const apAddress = apAddresses[networkName as keyof typeof apAddresses];
  
  const metacana: Contract = await Metacana.connect(deployer).deploy();

  console.log(
    `Deploying Metacana at ${metacana.address} | tx hash ${metacana.deployTransaction.hash}`,
  );

  await metacana.deployed();

  const updatedAddresses = {
    ...apAddresses,
    [networkName]: {
      ...apAddress,      
      metacana: metacana.address,      
    },
  };

  fs.writeFileSync(
    path.join(__dirname, "../../utils/addresses/console_metacana.json"),
    JSON.stringify(updatedAddresses, null, 2),
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
