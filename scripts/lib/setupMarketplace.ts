import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";
import { BigNumber } from "ethers";
dotenvConfig({ path: resolve(__dirname, "./.env") });

// Configure the nfts

export const setupMarketplace = async (
  marketplace, canaItemLootBox, canaItemContract, factory
) => {
  await new Promise(f => setTimeout(f, 5000));    
  await canaItemLootBox.setApprovalForAll(marketplace.address, true);
  await canaItemLootBox.addApprovalWhitelist(marketplace.address);
  await canaItemContract.addApprovalWhitelist(marketplace.address);

  const rounds = [process.env.BOX_PRIVATE_SALE_TOTAL, process.env.BOX_WHITELIST_SALE_TOTAL, process.env.BOX_PUBLIC_SALE_TOTAL]
  await marketplace.setRounds(rounds);
  const now = BigNumber.from(Math.floor(Date.now() / 1000));
  const startPrivateSale = now.add(Number(process.env.PRIVATE_SALE_START_OFFSET_FROM_NOW_IN_HOURS));  
  const startWhitelistSale = startPrivateSale.add(Number(process.env.WHITELIST_SALE_START_OFFSET_FROM_PRIVATE_SALE_IN_HOURS));
  const endWhitelistSale = startWhitelistSale.add(Number(process.env.WHITELIST_SALE_END_OFFSET_FROM_START_IN_HOUR))
  const times = [
    startPrivateSale, 
    startWhitelistSale, 
    endWhitelistSale]
  await marketplace.setTimes(times); 
  await canaItemContract.transferOwnership(factory.address);
  await canaItemLootBox.transferOwnership(factory.address);
};

export const setupMarketplaceWithAddress = async (
  canaItem , lootBoxContract, marketplace, receiver_address, fee, payment_token_addresses, factory, owner
) => { 
  await new Promise(f => setTimeout(f, 5000)); 
  await marketplace.setFeeToAddress(receiver_address);
  await marketplace.setTransactionFee(fee);
  await marketplace.setPaymentTokens([payment_token_addresses]); 
  await lootBoxContract.setApprovalForAll(marketplace.address, true); 
  
  const txt = await lootBoxContract.connect(owner).addApprovalWhitelist(marketplace.address); 
  await canaItem.connect(owner).addApprovalWhitelist(marketplace.address); 
  const rounds = [process.env.BOX_PRIVATE_SALE_TOTAL, process.env.BOX_WHITELIST_SALE_TOTAL, process.env.BOX_PUBLIC_SALE_TOTAL]
  await marketplace.setRounds(rounds);
  const now = BigNumber.from(Math.floor(Date.now() / 1000));
  const startPrivateSale = now.add(Number(process.env.PRIVATE_SALE_START_OFFSET_FROM_NOW_IN_HOURS));  
  const startWhitelistSale = startPrivateSale.add(Number(process.env.WHITELIST_SALE_START_OFFSET_FROM_PRIVATE_SALE_IN_HOURS));
  const endWhitelistSale = startWhitelistSale.add(Number(process.env.WHITELIST_SALE_END_OFFSET_FROM_START_IN_HOUR));
  const times = [
    startPrivateSale, 
    startWhitelistSale, 
    endWhitelistSale]
  await marketplace.setTimes(times);  
  await canaItem.transferOwnership(factory.address);
  await lootBoxContract.transferOwnership(factory.address);
  console.log('***Done setupMarketplaceWithAddress');
};

export const setSales =async (marketplaceContract, addresses, amounts, round) => {
  console.log('***Begin setSales');
  switch (round) {
    case 0:
      await marketplaceContract.setPrivateBatch(addresses, amounts);
      break;
    case 1:
      await marketplaceContract.setWhitelistBatch(addresses, amounts);
      break;
    default:
      break;
  }
  console.log('***Done setSales');
}

export const setTestEnv = async (marketplace) => {
  const receiver_address = process.env.TRANSACTION_FEE_RECEIVER_ADDRESS;
  const fee = Number(process.env.BOX_TRANSACTION_FEE);
  const payment_token_addresses = (process.env.BOX_PAYMENT_TOKEN_CONTRACT_ADDRESSES)!.split(',');

  await marketplace.setFeeToAddress(receiver_address);
  await marketplace.setTransactionFee(fee);
  await marketplace.setPaymentTokens(payment_token_addresses); 
}

module.exports = {
  setTestEnv,
  setSales,
  setupMarketplace,
  setupMarketplaceWithAddress
};
