import hre, { ethers } from "hardhat";

// Types
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import apAddresses from "../../utils/addresses/console_marketplace.json";
import lootboxAddresses from "../../utils/addresses/console_canaItemLootBox.json";
import canaItemAddresses from "../../utils/addresses/console_canaItem.json";
import canaItemFactoryAddresses from "../../utils/addresses/console_canaItemFactory.json";
import { setupMarketplace } from "../lib/setupMarketplace"
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
    
  const lootboxAddress = lootboxAddresses[networkName as keyof typeof lootboxAddresses];
  const canaItemAddress = canaItemAddresses[networkName as keyof typeof canaItemAddresses];
  const canaItemFactoryAddress = canaItemFactoryAddresses[networkName as keyof typeof canaItemFactoryAddresses];

  const canaItemFact = await ethers.getContractFactory("ERC1155");
  const canaItemContract = await canaItemFact.attach((canaItemAddress as any).canaItem);  

  const lootBoxContractFact = await ethers.getContractFactory("CanaItemLootBox",{
    libraries: {
      CanaBoxLib: (lootboxAddress as any).canaBoxLib,
    },
  });

  const canaItemFactoryFact = await ethers.getContractFactory("CanaItemFactory");
  const canaItemFactoryContract = await canaItemFactoryFact.attach((canaItemFactoryAddress as any).canaItemFactory);

  const lootBoxContract = await lootBoxContractFact.attach((lootboxAddress as any).canaItemLootBox);

  await setupMarketplace(marketplace, lootBoxContract, canaItemContract, canaItemFactoryContract);

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
