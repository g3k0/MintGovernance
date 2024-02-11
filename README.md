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

1. Paste your `MyToken` contract address inside the `scripts/delegate.js` source file;
2. run the following command:

    ```shell
    npx hardhat run scripts/delegate.js --network goerli
    ```
### 2. Proposing
Here  we can make a new proposal on the governance system.

We could encode any kind of call data or value on this proposal, and we can even specify multiple targets. 

In our case we're trying to mint an extra 25000 tokens to the owner.

1. Paste your `MyToken` contract address inside the `scripts/proposing.js` source file;
2. Paste your `MyGovernor` contract address inside the `scripts/proposing.js` source file;
3. Run the following command:

    ```shell
    npx hardhat run scripts/proposing.js --network goerli
    ```
From the `event` object given in output, take note of the `proposalId`.

### 3. Vote
As the owner with 10000 tokens we have the executive power to push this proposal through. Let's go ahead and vote on this proposal so we can execute it.

1. Paste your `MyGovernor` contract address inside the `scripts/vote.js` source file;
2. Paste your `proposalId` inside the `scripts/vote.js` source file;
3. Run the following command: 

    ```shell
    npx hardhat run scripts/vote.js --network goerli
    ```

The transaction will cast a vote as the owner with a weight of 10000 tokens. This will be enough for the vote to be successful! Normally, the next step would be to queue this proposal in the Timelock to wait for some period before execution. In this case, we're not using a Timelock so we can go ahead and execute this proposal after the voting period has ended.

NOTE: by default the MyGovernor contract **set a delay of 1 day** to start voting after the proposal is deployed in the network. see [OpenZeppelin MyGovernor contract wizard](https://wizard.openzeppelin.com/#governor) to change this parameter.

### Execute
The `execute` function looks up the proposal by hashed parameters, so we'll need to pass in our parameters here again for it to go look them up:

1. 
2.
3. Run the following command:

    ```shell
    npx hardhat run scripts/execute.js --network goerli
    ```
This will execute our proposal! If successful, the owner should now have 35000 tokens because the governance proposal will target the ERC20 token and pass in the calldata to mint 25000 tokens.