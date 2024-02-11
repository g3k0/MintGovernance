# MintGovernance

This project demonstrates a basic Governance DApp use case.





## Tech Stack
The project has been implemented using [HardHat framework](https://hardhat.org/) and make use of the [OpenZeppelin](https://www.openzeppelin.com/) smart contracts:

* [MyGovernor](https://wizard.openzeppelin.com/#governor);
* [MyToken](https://wizard.openzeppelin.com/#erc20);

The advantage to not implement custom Solidity smart contracts and to use the OpenZeppelin smart contracts library are several:

* The library minimize the risk of introducing bugs;
* The library is better tested;
* The library is supported by the community;

The HardHat framework make use of an API layer provided by [Alchemy](https://www.alchemy.com/) that interacts with the underlying blockchain network.


## System requirements
This project has been implemented and tested on linux machines. It may not works with other kind of OS. The following software needs to be installed on your machine:

* [Node.js](https://nodejs.org/en) v20.9.0 or above;
* npm v10.1.0 or above;


## How to run
After cloning the repository:
1. Install the dependencies by running `npm i`

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
