# tx.origin Challenge – Alchemy Ethereum Bootcamp

This repository contains the solution to the `tx.origin` challenge provided as part of the **Alchemy Ethereum Bootcamp**. The goal of this task was to emit a `Winner` event by successfully passing a condition that ensures `msg.sender != tx.origin` using Hardhat.

---

## Challenge Description

You are given the following smart contract deployed on the Sepolia testnet:

```solidity
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}

To successfully emit the Winner event, you must call the attempt() function such that:
msg.sender != tx.origin
This means the call must be made through a smart contract, not directly from an externally owned account (EOA).

### Solution Overview
The solution involves creating an attacker contract that invokes the attempt() function on the target contract. When the function is called via the attacker contract, msg.sender becomes the address of the attacker contract, and tx.origin remains the original EOA — thus satisfying the requirement.

#### Attacker Contract Code
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

How it works:
Deploy the Attack contract with the challenge contract’s address as a constructor argument.

Call the triggerAttack() function from your wallet (EOA).

The attempt() function is invoked via the contract, so msg.sender ≠ tx.origin.

The Winner event is successfully emitted.

Verification
You can verify the emitted event on Sepolia Etherscan under the Events tab of the challenge contract, or by checking your own transaction history if you tested this.

Technologies Used
Solidity ^0.8.0
Hardhat (for local development & deployment)
Ethers.js
Sepolia Ethereum Testnet
Alchemy API key
Etherscan (for contract verification & event tracking)



