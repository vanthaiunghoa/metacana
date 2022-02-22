import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: resolve(__dirname, "./.env") });

// Configure the nfts

export const setupMarketplace = async (
  marketplace, canaItemLootBox
) => {
  const receiver_address = process.env.BOX_TRANSACTION_FEE_RECEIVER_ADDRESS;
  const fee = Number(process.env.BOX_TRANSACTION_FEE);
  const payment_token_addresses = (process.env.BOX_PAYMENT_TOKEN_CONTRACT_ADDRESSES)!.split(',');

  await marketplace.setFeeToAddress(receiver_address);
  await marketplace.setTransactionFee(fee);
  await marketplace.setPaymentTokens(payment_token_addresses);  
  canaItemLootBox.setApprovalForAll(marketplace.address, true);
};

export const setupMarketplaceWithAddress = async (
  marketplace, receiver_address, fee, payment_token_addresses
) => {  
  await marketplace.setFeeToAddress(receiver_address);
  await marketplace.setTransactionFee(fee);
  await marketplace.setPaymentTokens([payment_token_addresses]);  
};

module.exports = {
  setupMarketplace,
  setupMarketplaceWithAddress
};
