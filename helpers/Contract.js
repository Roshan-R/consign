import contract from "../hardhat/artifacts/contracts/HelloWorld.sol/HelloWorld.json"
import { ethers } from "ethers";

const API_URL = "https://eth-goerli.g.alchemy.com/v2/ylQpXr24dr0susjwMOkqe7fDkpuK4yMi"
const PRIVATE_KEY = "54dc33fc8e45608f927d1b5b1232ba5402de6c290d774e8445571f95a66aed2a"
const API_KEY = "ylQpXr24dr0susjwMOkqe7fDkpuK4yMi"
const CONTRACT_ADDRESS = "0x701ac521D03DAF7Bd3eFcF2b7A91656126b24e23"

class ContractHelper{

  constructor(){
    this.alchemyProvider = new ethers.providers.AlchemyProvider("goerli", API_KEY);
    this.signer = new ethers.Wallet(PRIVATE_KEY, this.alchemyProvider);
    // Contract
    this.helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, this.signer);
  }

  async gett() {
    const message = await this.helloWorldContract.message();
    console.log("The message is: " + message);
  }
}

export default ContractHelper;
