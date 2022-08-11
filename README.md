# Delegate Call Sample Project 

Call opcodes and Delegate call opcodes. 

Solidity provides two unique functionalities which allows us follow NIH ( "Not Invented Here" ). In programming languages, specially in Solidity where one mistake can cost huge monetary losses and it's almost immutable in most cases to fix your creativity, it's suggested to not reinvent the wheel instead use the one checked, refined and maintained by the community.

This motivates developers to take help from existing trusted libraries and send external calls to read logic pre-written in their contract.

That's where delegate call opcode comes into the picture for you.

`Standard external message calls ( low level calls ) are performed using call opcode where logic is performed in context of the external contract/function.`

Whereas, `In delegate call opcode, logic is performed in context of the calling contract which allowed ethereum developers (us) to re-use logic written in external contracts.`

## Part 1 : Preserves context :  

Implementation of delegate call functionality in a way to demonstrate the pros and cons of this feature.

Remember, it preserves the context.

Steps for deploying your contract on Ropsten public testnet [guide](https://github.com/ishinu/Re-Entrancy-Hack-Upgradeable-)

Result : 
```
Deploying Logic contract ...
Logic contract deployed at :  0x9bFd8D5Fd0e6b45885334776b8964399C1f38a72
Deploying delegate call contract...
DelegateCall contract deployed at :  0xd0e6E1A5a6D50A906A10b33eE2CbC2497BfA4306
Deploying Attack contract...
Deployed Attack contract at :  0x652bc2f19F99Bab3E1cc08Df19e14d5e339fc9d5
```

