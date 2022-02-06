/* Useful aliases */
import { web3 } from 'hardhat'

const toBN = web3.utils.toBN;


const URI_BASE = 'https://asset.metacana.io/api/{id}';
const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
const MAX_UINT256 = '0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
const MAX_UINT256_BN = toBN(MAX_UINT256);


module.exports = {
  URI_BASE,
  ADDRESS_ZERO,
  MAX_UINT256,
  MAX_UINT256_BN
};
