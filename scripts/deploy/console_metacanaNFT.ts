import hre, { ethers } from "hardhat";

// Types
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// import consoleAddresses from "../../utils/addresses/console.json";
import apAddresses from "../../utils/addresses/console_metacanaNFT.json";
import * as fs from "fs";
import * as path from "path";

// Utils
async function main(): Promise<void> {
  // Get deployer
  const [deployer]: SignerWithAddress[] = await ethers.getSigners();
  const networkName: string = hre.network.name;  
  // const consoleAddress = consoleAddresses[networkName as keyof typeof consoleAddresses];
  let apAddress = apAddresses[networkName as keyof typeof apAddresses];

  const Forwarder_Factory: ContractFactory = await ethers.getContractFactory("Forwarder");
  const forwarder: Contract = await Forwarder_Factory.deploy();
  await forwarder.deployed();
  console.log(`Deploying Forwarder: ${forwarder.address} at tx hash: ${forwarder.deployTransaction.hash}`);

  // const Library = await ethers.getContractFactory("AssetRangeStruct");
  // const library = await Library.deploy();
  // await library.deployed();

  // const prxoy_address = process.env.METACANA_NFT_PROXY_ADDRESS

  const MetacanaNFT_Factory: ContractFactory = await ethers.getContractFactory("MetacanaNFT");
  const metacanaNFT: Contract = await MetacanaNFT_Factory.deploy(
    // "CanaNFT", 
    // "CanaNFT", 
    "https://asset.metacana.io/api", forwarder.address);

  console.log(`Deploying MetacanaNFT: ${metacanaNFT.address} at tx hash: ${metacanaNFT.deployTransaction.hash}`);

  await metacanaNFT.deployed();  

  const updatedAddresses = {
    ...apAddresses,
    [networkName]: {
      ...apAddress,
      forwarder: forwarder.address,
      metacanaNFT: metacanaNFT.address,      
    },
  };

  fs.writeFileSync(
    path.join(__dirname, "../../utils/addresses/console_metacanaNFT.json"),
    JSON.stringify(updatedAddresses, null, 2),
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
