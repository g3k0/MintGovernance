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
After cloning the repositor\y:
1. Install the dependencies by running `npm i`
2. create a `.env` file in the root folder of the project and set the following variables:
    * GOERLI_URL
    * PRIVATE_KEY
    * ALCHEMY_API_KEY

    Such variables are provided by Alchemy and you can find them in your Alchemy account.
3. use the `scripts/deploy.sh` script by running:

    ```shell
    npx hardhat run scripts/deploy.js --network goerli
    ```

Some useful HardHat commands are:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
