// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./MetacanaNFT.sol";

/**
 * @title CreatureAccessory
 * CreatureAccessory - a contract for Creature Accessory semi-fungible tokens.
 */
contract CreatureAccessory is MetacanaNFT {
    constructor(address _proxyRegistryAddress)
        MetacanaNFT(
            "Metacana Creature Accessory",
            "Metacana",
            "https://asset.metacana.io/{id}",
            _proxyRegistryAddress
        ) {}

    function contractURI() public pure returns (string memory) {
        return "https://metacana.io";
    }
}
