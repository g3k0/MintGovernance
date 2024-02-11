/**
 * Here  we can make a new proposal on the governance system. 
 * We could encode any kind of call data or value on this proposal, and we can even specify multiple targets. 
 * In our case we're trying to mint an extra 25000 tokens to the owner
 */
const { ethers } = require("hardhat");
const { parseEther } = ethers.utils;

async function main() {

    const gAddress = "" // insert here your Governor contract address
    const tAddress = "" // insert here your Token contract address

    const [owner] = await ethers.getSigners();
    const oAddress = owner.address
  
    const gContract = await ethers.getContractAt('MyGovernor', gAddress);
    const tContract = await ethers.getContractAt('MyToken', tAddress);

    const tx = await gContract.propose(
        [tAddress],
        [0],
        [tContract.interface.encodeFunctionData('mint', [oAddress, parseEther('25000')])],
        'Give the owner more tokens!'
    );
  
    const receipt = await tx.wait();
    const event = receipt.events.find(x => x.event === 'ProposalCreated');
    console.log('event: ', event)
    
    const proposalId = event?.args?.proposalId.toString();

    console.log('proposalId: ', proposalId)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});