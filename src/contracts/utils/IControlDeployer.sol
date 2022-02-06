// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.3;

interface IControlDeployer {
    /// @dev Emitted when an instance of `ProtocolControl` is deployed.
    event DeployedControl(address indexed registry, address indexed deployer, address indexed control);

    /// @dev Deploys an instance of `ProtocolControl`
    function deployControl(
        uint256 nonce,
        address deployer,
        string calldata uri
    ) external returns (address);
}