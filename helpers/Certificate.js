import { ethers } from "ethers";
import { NFTStorage, File } from 'nft.storage'
import contract from "../abi/Certificate.json";

class Certificate {

    constructor() {
        this.client = new NFTStorage({ token: process.env.NEXT_PUBLIC_NFT_STORAGE_KEY })
        this.alchemyProvider = new ethers.providers.AlchemyProvider("maticmum", process.env.NEXT_PUBLIC_API_KEY);
        this.signer = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, this.alchemyProvider);
        // Contract
        this.certificateContract = new ethers.Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, contract.abi, this.signer);
    }

    async storeIPFS(image, name) {
        console.log(image);
        let description = "Sample desc";
        let a = await this.client.store({
            image,
            name,
            description,
        });
        console.log(a)
        return a.url;
    }

    async fileFromPath(filePath) {
        const content = await fs.promises.readFile(filePath)
        const type = mime.getType(filePath)
        return new File([content], path.basename(filePath), { type })
    }

    async createNFT(addr, cid) {
        let a = await this.certificateContract.safeMint(addr, cid)
        console.log(a)
        return a;
    }
}

export default Certificate;
