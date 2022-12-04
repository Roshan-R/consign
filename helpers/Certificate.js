import { Web3Storage } from 'web3.storage'
import { ethers } from "ethers";
import contract from "../hardhat/artifacts/contracts/Certificate.sol/Certificate.json";

// alchemy
const PRIVATE_KEY = "54dc33fc8e45608f927d1b5b1232ba5402de6c290d774e8445571f95a66aed2a"
const API_KEY = "ylQpXr24dr0susjwMOkqe7fDkpuK4yMi"
const CONTRACT_ADDRESS = "0x7C37938E2B9C12575DAe0e7e30c6886bC19a162C"

// web3.storage
const W3_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEU4YjM0ZTJBYUI4MmU2RkFFRmQ5NDk4MUQ0OUJDY0EwYzYzMTlCZUEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAxMDkxNDM0MjYsIm5hbWUiOiJldGgtaW5kaWEifQ.8wp5njkmRF4Dj336uIWNZGaAbmDGhM0VX3xRXsPB7hc"

class Certificate{

  constructor(){
    this.client = new Web3Storage({token:W3_API_KEY});
    this.alchemyProvider = new ethers.providers.AlchemyProvider("goerli", API_KEY);
    this.signer = new ethers.Wallet(PRIVATE_KEY, this.alchemyProvider);
    // Contract
    this.certificateContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, this.signer);
  }

  async storeImage(image) {
    let url = await this.client.put([image]);
    return url
  }

  async storeJson(js){
    const blob = new Blob([JSON.stringify(js)], { type: 'application/json' })
    const files = [
      new File([blob], 'hello.json')
    ]
    let url  = await this.client.put(files);
    return url;
  }

  async createNFT(addr, cid){
    let a = await this.certificateContract.safeMint(addr, cid)
    return a;
  }

}

export default Certificate;
