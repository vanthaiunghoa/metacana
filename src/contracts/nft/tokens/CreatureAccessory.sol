// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

import "./MetacanaNFT.sol";

/**
 * @title CreatureAccessory
 * CreatureAccessory - a contract for Creature Accessory semi-fungible tokens.
 */
contract CreatureAccessory is MetacanaNFT {
    constructor(/*address _proxyRegistryAddress,*/ address forwarder)
        MetacanaNFT(
            // "Metacana Creature Accessory",
            // "Metacana",
            "https://asset.metacana.io/{id}",
            // _proxyRegistryAddress,
            forwarder
        ) {}

    function contractURI() public pure returns (string memory) {
        return "https://metacana.io";
    }
}
