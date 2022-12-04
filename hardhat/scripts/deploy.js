async function main() {

  const Certificate = await ethers.getContractFactory("Certificate");

  const cert = await Certificate.deploy();
  console.log("Deploying...");
  await cert.deployed();
  // Start deployment, returning a promise that resolves to a contract object
  console.log("Contract deployed to address:", cert.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
