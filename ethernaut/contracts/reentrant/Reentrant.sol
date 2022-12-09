// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

//console.log("Hello World");
import 'hardhat/console.sol';

contract Reentrant {
mapping(address => uint) public balances;

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw() public {
        uint bal = balances[msg.sender];
        require(bal > 0);

         // send Ether to the caller
        (bool sent, ) = msg.sender.call.value(bal)("");
        require(sent, "Failed to send Ether");

        balances[msg.sender] = 0;
    }

    // Helper function to check the balance of this contract
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}