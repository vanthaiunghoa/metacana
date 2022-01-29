// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/**
 * @title SocialProofable
 * @dev Used to define the social proof for a specific token.      
 *
 * @author develop.iglobal@gmail.com
 */
interface SocialProofable {
  function getTwitter() external view returns(string memory);
  function getTwitterProof() external view returns(uint256);
  function getTelegram() external view returns(string memory);
  function getWebsite() external view returns(string memory);
  function getGithub() external view returns(string memory);
  function getGithubProof() external view returns(bytes memory);
}
