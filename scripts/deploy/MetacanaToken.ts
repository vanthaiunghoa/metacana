import { Contract, ContractFactory } from "@ethersproject/contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import hre, { ethers } from "hardhat";

import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";

import * as fs from "fs";
import * as path from "path";

dotenvConfig({ path: resolve(__dirname, "./.env") });

async function main() {
  // Get signer
  const [deployer]: SignerWithAddress[] = await ethers.getSigners();

  // Deploy contract
  const Metacana: ContractFactory = await ethers.getContractFactory("MetacanaToken");
  const initial_supply = process.env.METACANA_INITIAL_SUPPLY
  const networkName: string = hre.network.name;
  let busd;
  let wbnb;
  const pancakeSwapFactoryV2 = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73';
  if(networkName === 'bsc' || networkName === 'bsc_testnet'){
    busd = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
    wbnb = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  }
  const metacana: Contract = await Metacana.connect(deployer).deploy(initial_supply, pancakeSwapFactoryV2, wbnb);

  console.log(
    `Deploying Metacana at ${metacana.address} | tx hash ${metacana.deployTransaction.hash}`,
  );

  await metacana.deployed();

  fs.writeFileSync(
    path.join(__dirname, "../../utils/addresses/metacanaToken.json"),
    JSON.stringify(metacana.address, null, 2),
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
