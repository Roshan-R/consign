require('dotenv').config();

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", process.env.API_KEY);
// Signer
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, alchemyProvider);
// Contract
const helloWorldContract = new ethers.Contract(process.env.CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
  const message = await helloWorldContract.message();
  console.log("The message is: " + message);
}
main();
