import { Web3Storage } from 'web3.storage'
import { ethers } from "ethers";
import { NFTStorage, File } from 'nft.storage'
import contract from "../hardhat/artifacts/contracts/Certificate.sol/Certificate.json";

// alchemy
const PRIVATE_KEY = "54dc33fc8e45608f927d1b5b1232ba5402de6c290d774e8445571f95a66aed2a"
const API_KEY = "ylQpXr24dr0susjwMOkqe7fDkpuK4yMi" //ethindia account
const CONTRACT_ADDRESS = "0xDB4041fB91Be45E6E6a912c75FaF3854e4D59488"

// nft.storage
const NFT_STORAGE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEVkMTZhMmY2NjY2MmYzYzRFN2U4OEVCQmQ0REZGMzgxMzJBMDEzMmEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MDAwNTIxMzE5MCwibmFtZSI6IkVUSEluZGlhIn0.fMs_udsLv1k7MnHcHp-g-TZoOr3Mt9MyythqZycco9c";

class Certificate {

  constructor() {
    this.client = new NFTStorage({ token: NFT_STORAGE_KEY })
    this.alchemyProvider = new ethers.providers.AlchemyProvider("goerli", API_KEY);
    this.signer = new ethers.Wallet(PRIVATE_KEY, this.alchemyProvider);
    // Contract
    this.certificateContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, this.signer);
  }

  async storeIPFS(image, name) {
    console.log(image);
    let description = "Sample desc";
    let a = await this.client.store({
      image,
      name,
      description,
    });
    return a.url;
  }

  async fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath)
    const type = mime.getType(filePath)
    return new File([content], path.basename(filePath), { type })
  }

  async createNFT(addr, cid) {
    let a = await this.certificateContract.safeMint(addr, cid)
    return a;
  }

}

export default Certificate;
