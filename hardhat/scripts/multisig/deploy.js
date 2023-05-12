
// Contract deployed to addr - 0x9D38346aA0FD8305eB2eB04D0299FA11cf0972d4
async function main() {

  const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");

  const contract = await MultiSigWallet.deploy(["0x99Eb13B75D0BAFEf658cdFCE4047474F8023feCf", "0x0E42B72b0937eF6cd07d312E9F4FaEffc73dc7e7", "0x2ee61274143Ce533C8F43E4C78e19a423BeA923d"], 2);
  console.log("Deploying...");
  await contract.deployed();
  // Start deployment, returning a promise that resolves to a contract object
  console.log("Contract deployed to address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
