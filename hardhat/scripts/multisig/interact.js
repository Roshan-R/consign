// Contract deployed to addr - 0x9D38346aA0FD8305eB2eB04D0299FA11cf0972d4

const contract = require("../../artifacts/contracts/MultiSigWallet.sol/MultiSigWallet.json");

const alchemyProvider = new ethers.providers.AlchemyProvider(network = "maticmum", process.env.API_KEY);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, alchemyProvider);
const certificateContract = new ethers.Contract("0x9D38346aA0FD8305eB2eB04D0299FA11cf0972d4", contract.abi, signer);


async function main() {

  let a = await certificateContract.getOwners();
  console.log(a);
}
main();
