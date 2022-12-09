// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Delegate.sol";
import "hardhat/console.sol";

contract Delegator {
    address public owner;
    Delegate delegate;

    constructor(address _delegateAddress) {
        delegate = Delegate(_delegateAddress);
        owner = msg.sender;
    }

    fallback() external {
        (bool result, ) = address(delegate).delegatecall(msg.data);
        if (result) {
            console.log("result", result);
            this;
        }
    }
}
