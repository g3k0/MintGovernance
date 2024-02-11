/**
 * This probably seems like a silly step, but when you're using token governance, 
 * its standard to delegate your votes to someone who can then use that voting power.
 * In our case, the owner address receives 10000 tokens when they deploy the token and they want to delegate that voting power to themselves. 
 *
 */

const { ethers } = require("hardhat");

async function main() {

  if (process.argv.length < 3) {
      console.error('Usage: node scripts/deploy <token-contract-address>');
      process.exit(1);
  }
    
  const tAddress = process.argv[2];
  const [owner] = await ethers.getSigners();
  const oAddress = owner.address

  const tContract = await ethers.getContractAt('MyToken', tAddress)
  const response = await tContract.delegate(oAddress);

  console.log(response);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
