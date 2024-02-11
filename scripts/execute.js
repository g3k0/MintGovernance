/**
 * This function looks up the proposal by hashed parameters, so we'll need to pass in our parameters here again for it to go look them up.
 * This will execute our proposal! If successful, the owner should now have 35000 tokens because 
 * the governance proposal will target the ERC20 token and pass in the calldata to mint 25000 tokens.
 */
const { ethers } = require("hardhat");
const { parseEther, toUtf8Bytes, keccak256 } = ethers.utils;

async function main() {
    const gAddress = "" // insert here your Governor contract address
    const tAddress = "" // insert here your Token contract address

    const [owner] = await ethers.getSigners();
    const oAddress = owner.address
  
    const gContract = await ethers.getContractAt('MyGovernor', gAddress);
    const tContract = await ethers.getContractAt('MyToken', tAddress);

    await gContract.execute(
        [tAddress],
        [0],
        [tContract.interface.encodeFunctionData('mint', [oAddress, parseEther('25000')])],
        keccak256(toUtf8Bytes("Give the owner more tokens!"))
    );
    
    const balance = await tContract.balanceOf(oAddress);
    
    console.log('the new balance is: ', balance.toString());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
