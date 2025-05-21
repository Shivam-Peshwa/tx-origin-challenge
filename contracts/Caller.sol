// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ITarget {
    function attempt() external;
}

contract Caller {
    address constant target = 0x890697B6bf90eA125D2Bc3B7B4F5AB2ec610C373;

    function callAttempt() public {
        ITarget(target).attempt();
    }
}
