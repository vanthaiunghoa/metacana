/* Useful aliases */

// No, we don't have easy access to web3 here.
// And bn.js new BN() weirdly doesn't work with truffle-assertions
const toBN = a => a;
const toBNHex = a => a;


// Configfuration for our tokens

export const NUM_ACCESSORIES = 6;
export const MINT_INITIAL_SUPPLY = 1000;
export const INITIAL_SUPPLY = toBNHex('0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');

export const CLASS_COMMON = 0;
export const CLASS_RARE = 1;
export const CLASS_EPIC = 2;
export const CLASS_LEGENDARY = 3;
export const CLASS_DIVINE = 4;
export const CLASS_HIDDEN = 5;
export const NUM_CLASSES = 6;

export const LOOTBOX_OPTION_BASIC = (0);
export const LOOTBOX_OPTION_PREMIUM = (1);
export const LOOTBOX_OPTION_GOLD = (2);
export const LOOTBOX_OPTIONS = [LOOTBOX_OPTION_BASIC, LOOTBOX_OPTION_PREMIUM, LOOTBOX_OPTION_GOLD];
export const NUM_LOOTBOX_OPTIONS = LOOTBOX_OPTIONS.length;

export const LOOTBOX_PRE_MINT_AMOUNT = [100, 2000, 3000]; //3 TYPES OF BOXES

export const NO_SUCH_LOOTBOX_OPTION = (NUM_LOOTBOX_OPTIONS + 10);
export const LOOTBOX_OPTION_AMOUNTS = [(3), (5), (7)];
// Note that these are token IDs, not option IDs, so they are one higher
export const LOOTBOX_OPTION_GUARANTEES = [
  {},
  { 0: (3) },
  { 0: (3), 2: (2), 4: (1) }
];

module.exports = {
  NUM_ACCESSORIES,
  MINT_INITIAL_SUPPLY,
  INITIAL_SUPPLY,
  CLASS_COMMON,
  CLASS_RARE,
  CLASS_EPIC,
  CLASS_LEGENDARY,
  CLASS_DIVINE,
  CLASS_HIDDEN,
  NUM_CLASSES,
  LOOTBOX_OPTION_BASIC,
  LOOTBOX_OPTION_PREMIUM,
  LOOTBOX_OPTION_GOLD,
  LOOTBOX_PRE_MINT_AMOUNT,
  LOOTBOX_OPTIONS,
  NUM_LOOTBOX_OPTIONS,
  NO_SUCH_LOOTBOX_OPTION,
  LOOTBOX_OPTION_AMOUNTS,
  LOOTBOX_OPTION_GUARANTEES
};
