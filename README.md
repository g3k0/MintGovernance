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
2. create a `.env` file in the root folder of the project and set the following variables:
    * GOERLI_URL
    * PRIVATE_KEY
    * ALCHEMY_API_KEY

    Such variables are provided by Alchemy and you can find them in your Alchemy account.
3. use the `scripts/deploy.sh` script to deploy the 2 contracts in the Goerli test network by running:

    ```shell
    npx hardhat run scripts/deploy.js
    ```
    take note of the contracts addresses released.

    If you want to know which are all the methods available for the contracts deployed, you can find them in the [Goerli Etherscan DApp](https://goerli.etherscan.io/),
    searching by contract address.

    If you are lazy and you don't want to deploy the contracts, you can use these already deployed:
    * MyGovernor: `0x46FDB12B1691850C4C90421C625a6CddE53f1aEc`
    * MyToken: `0xfE2d64AE8910E1Be1Ac87BCAB7431B78bEAf19f9`

4. Delegate the vote to yourself, by running the delegate script (this step can appear weird, but consider that not always who has the power of vote is the same that votes):

    ```shell
    node scripts/delegate.js <MyToken-contract-address>
    ```

Some useful HardHat commands are:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
