import { FaWallet } from "react-icons/fa";
import Input from "../../components/input";
import Certificate from "../../helpers/Certificate";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useState, useRef } from "react";
import { toast } from "react-hot-toast";


export default function Home() {

  const button = useRef();
  const [isloading, setIsLoading] = useState(false);

  async function handleSubmit(event) {

    event.preventDefault();

    const name = event.target[0].value;
    const addr = event.target[1].value;
    const file = event.target[2].files[0];

    console.log(button);

    setIsLoading(true);

    let cert_helper = new Certificate();
    let metadata_url = await cert_helper.storeIPFS(file, name);
    let b = await cert_helper.createNFT(addr, metadata_url);

    console.log(b)
    setIsLoading(false);
    toast.success('Successfully created certificate!')
  }

  return (
    <div className="h-screen bg-main">
      <Navbar />
      <form onSubmit={handleSubmit} method="post">
        <div className="ml-24 mt-16">
          <div className="mb-8 text-6xl font-bold">
            CREATE <br />
            CERTIFICATE
          </div>
          <Input name="Certificate Name" placeholder="Name"></Input>
          <Input name="Reciever Address" placeholder="0x0000a0123123"><FaWallet /></Input>
          <label className="block text-xl font-bold font-roboto">Image file
            <span className="sr-only">Choose profile photo</span>
            <input type="file" accept="image/png, image/jpeg"
              className="block w-full text-sm text-gray-500
                 file:mr-4 file:py-2 file:px-4
                file:border-0 
                 file:text-sm file:font-semibold 
                 file:bg-gray-500 file:text-white 
                 hover:file:bg-gray-600 
            mb-5
                 "/>
          </label>
          <button type="submit" className="mt-6 text-xl font-bold mr-14 bg-peachh p-3 border-t-2 border-l-2 border-r-4 border-b-4 hover:border-b-8 border-black">
            {isloading ?
              <>
                <span className="animate-spin inline-block w-4 h-4 mr-2 border-[3px] border-current border-t-transparent text-black rounded-full" role="status" aria-label="loading"></span>
                Loading
              </>
              :
              <>
                Submit
              </>
            }
          </button>
        </div>
      </form>
    </div >

  );
}
