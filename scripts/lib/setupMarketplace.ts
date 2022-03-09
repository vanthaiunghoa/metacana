import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: resolve(__dirname, "./.env") });

// Configure the nfts

export const setupMarketplace = async (
  marketplace, canaItemLootBox, canaItemContract
) => {
  const receiver_address = process.env.BOX_TRANSACTION_FEE_RECEIVER_ADDRESS;
  const fee = Number(process.env.BOX_TRANSACTION_FEE);
  const payment_token_addresses = (process.env.BOX_PAYMENT_TOKEN_CONTRACT_ADDRESSES)!.split(',');

  await marketplace.setFeeToAddress(receiver_address);
  await marketplace.setTransactionFee(fee);
  await marketplace.setPaymentTokens(payment_token_addresses);  
  await canaItemLootBox.setApprovalForAll(marketplace.address, true);
  await canaItemLootBox.addApprovalWhitelist(marketplace.address);
  await canaItemContract.addApprovalWhitelist(marketplace.address);
};

export const setupMarketplaceWithAddress = async (
  lootBoxContract, marketplace, receiver_address, fee, payment_token_addresses
) => {  
  await marketplace.setFeeToAddress(receiver_address);
  await marketplace.setTransactionFee(fee);
  await marketplace.setPaymentTokens([payment_token_addresses]); 
  await lootBoxContract.setApprovalForAll(marketplace.address, true); 
  
  const txt = await lootBoxContract.setApprovalForAll('0xe16f33f0e9b973ac02934d1c39a09722557a72ea', true); 
  // console.log('Done setupMarketplaceWithAddress');
  // console.log(txt);
  // console.log('Receive');
  // console.log(await txt.wait(1));
};

module.exports = {
  setupMarketplace,
  setupMarketplaceWithAddress
};
