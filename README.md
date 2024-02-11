# MintGovernance

This project demonstrates a basic Governance DApp use case.

The purpose of the voting is to mint some tokens to the owner account.

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
2. create a `.env` file in the root folder of the project and set the following variables:
    * GOERLI_URL
    * PRIVATE_KEY
    * ALCHEMY_API_KEY

    Such variables are provided by Alchemy and you can find them in your Alchemy account.
3. use the `scripts/deploy.sh` script to deploy the 2 contracts in the Goerli test network by running:

    ```shell
    npx hardhat run scripts/deploy.js --network goerli
    ```
    take note of the contracts addresses released given in output by the script.

    If you want to know which are all the methods available for the contracts deployed, you can find them in the [Goerli Etherscan DApp](https://goerli.etherscan.io/),
    searching by contract address.

## Steps for voting

### 1. Delegate
Delegate the vote to yourself, by running the delegate script (this step can appear weird, but consider that not always who has the power of vote is the same that votes):

1. Paste your `MyToken contract address` inside the `scripts/delegate.js` source file;
2. run the following command:

    ```shell
    npx hardhat run scripts/delegate.js --network goerli
    ```
### 2. Proposing
Here  we can make a new proposal on the governance system.

We could encode any kind of call data or value on this proposal, and we can even specify multiple targets. 

In our case we're trying to mint an extra 25000 tokens to the owner.

1. Paste your `MyToken contract address` inside the `scripts/proposing.js` source file;
2. Paste your `MyGovernor contract address` inside the `scripts/proposing.js` source file;
3. Run the following command:

    ```shell
    npx hardhat run scripts/proposing.js --network goerli
    ```
From the `event` object given in output, take note of the `proposalId`.