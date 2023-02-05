import { useEffect, useState } from "react";
import NftCertificate from "../../components/NftCertificate";
import Navbar from "../../components/Navbar";
import { useAccount } from "wagmi";


export default function Home() {
  const { address, isConnected } = useAccount()
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    const baseURL = "https://eth-goerli.g.alchemy.com/v2/ylQpXr24dr0susjwMOkqe7fDkpuK4yMi";
    // const address = "0x6C9176A701601E21F7199BAf142c057466b4c933";
    const url = `${baseURL}/getNFTs/?owner=${address}`;

    let requestOptions = {
      method: 'get',
      redirect: 'follow'
    };

    (async () => {
      const response = await fetch(url, requestOptions)
      const body = await response.json()
      console.log(body)
      setNfts(body.ownedNfts)
    }
    )()

  }, [])
  return (
    <div className="bg-main">
      <Navbar></Navbar>
      <div className="flex bg-main flex-col justify-start mb-12 pt-3 px-10">
        <div class="ml-12 mt-8">
          <p className="text-6xl font-roboto font-bold">CERTIFICATES</p>
        </div>
      </div>
      <div className="m-8">
        <div class="grid grid-cols-2 grid-rows-2 gap-12">
          {nfts.map((el, i) => <NftCertificate key={i} title={el.title} image={el.metadata.image.replace("ipfs://", "https://cloudflare-ipfs.com/ipfs/")} />)}
        </div>
      </div>
    </div >
  );
}
