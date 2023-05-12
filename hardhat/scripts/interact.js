require('dotenv').config();

const contract = require("../artifacts/contracts/Certificate.sol/Certificate.json");

const alchemyProvider = new ethers.providers.AlchemyProvider(network = "maticmum", process.env.API_KEY);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, alchemyProvider);
const certificateContract = new ethers.Contract(process.env.CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
  let a = await certificateContract.show_balance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  console.log(a);
}
main();
