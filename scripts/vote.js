/**
 * As the owner with 10000 tokens we have the executive power to push this proposal through.
 * Let's go ahead and vote on this proposal so we can execute it
 */

async function main() {
    const gAddress = ""; // paste here your Governor contract address
    const proposalId = "" // paste here your proposalId
    const gContract = await ethers.getContractAt('MyGovernor', gAddress);

    const tx = await gContract.castVote(proposalId, 1);
    const receipt = await tx.wait();
    const voteCastEvent = receipt.events.find(x => x.event === 'VoteCast');

    console.log('voteCastEvent: ', voteCastEvent)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});