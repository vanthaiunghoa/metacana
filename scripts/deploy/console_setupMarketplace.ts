import hre, { ethers } from "hardhat";

// Types
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import apAddresses from "../../utils/addresses/console_marketplace.json";;
import { setupMarketplace } from "../lib/setupMarketplace"
import lootboxAddresses from "../../utils/addresses/console_canaItemLootBox.json";


import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: resolve(__dirname, "./.env") });

// Utils
async function main(): Promise<void> {
  // Get deployer
  const [deployer]: SignerWithAddress[] = await ethers.getSigners();
  const networkName: string = hre.network.name;    
  
  const apAddress = apAddresses[networkName as keyof typeof apAddresses];
  const lootboxAddress = lootboxAddresses[networkName as keyof typeof lootboxAddresses];
    
  const marketplaceFact = await ethers.getContractFactory("Marketplace");
  const marketplaceContract = await marketplaceFact.attach((apAddress as any).marketplace);

  const lootBoxContractFact = await ethers.getContractFactory("CanaItemLootBox",{
    libraries: {
      CanaBoxLib: (lootboxAddress as any).canaBoxLib,
    },
  });
  const lootBoxContract = await lootBoxContractFact.attach((lootboxAddress as any).canaItemLootBox);

  await setupMarketplace(marketplaceContract, lootBoxContract);

  console.log('Done setup marketplace')
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
