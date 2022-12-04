require('dotenv').config();

const contract = require("../artifacts/contracts/Certificate.sol/Certificate.json");
// const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", process.env.API_KEY);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, alchemyProvider);
const certificateContract = new ethers.Contract(process.env.CONTRACT_ADDRESS, contract.abi, signer);


async function main() {
  // let a = await certificateContract.message();
  let a = await certificateContract.safeMint("0x70997970C51812dc3A010C7d01b50e0d17dc79C8", 
          "ipfs://bafkreifwxrryrs3km3beknse2o65uaeaaanyirk4t3rttwdhzpvlr5bljy");
  console.log(a);
}
main();
