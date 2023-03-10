import { FaWallet } from "react-icons/fa";
import Input from "../../components/input";
import Certificate from "../../helpers/Certificate";
import Navbar from "../../components/Navbar";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import SubmitButton from "../../components/SubmitButton";
import NftCertificate from "../../components/NftCertificate";


export default function Home() {


  const button = useRef();
  const [isloading, setIsLoading] = useState(false);
  const [file, setFile] = useState();
  const [f, setF] = useState();

  async function handleSubmit(event) {

    event.preventDefault();

    const name = event.target[0].value;
    const addr = event.target[1].value;

    setIsLoading(true);

    let cert_helper = new Certificate();
    let metadata_url = await cert_helper.storeIPFS(f, name);
    let b = await cert_helper.createNFT(addr, metadata_url);

    console.log(b)

    setIsLoading(false);
    toast.success('Successfully created certificate!')
  }

  function handleFileChange(event) {
    const f = event.target.files[0];
    setF(f);
    setFile(URL.createObjectURL(f));
  }

  return (
    <div className="h-screen bg-main ">
      <Navbar />
      <div className="flex flex-row justify-between">
        <form onSubmit={handleSubmit} method="post">
          <div className="ml-24 mt-16">
            <div className="mb-8 text-6xl font-roboto font-bold">
              CREATE <br />
              CERTIFICATE
            </div>
            <Input name="Certificate Name" placeholder="Name"></Input>
            <Input name="Reciever Address" placeholder="0x0000a0123123"><FaWallet /></Input>
            <label className="block text-xl font-bold font-roboto">Image file
              <span className="sr-only">Choose profile photo</span>
              <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg"
                className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:border-0 
                file:text-sm file:font-semibold 
                file:bg-gray-500 file:text-white 
                hover:file:bg-gray-600 
                mb-5
                "/>
            </label>
            <SubmitButton isloading={isloading}></SubmitButton>
          </div>
        </form>
        {file ?
          <div className=" mx-32 my-16 w-1/3 h-96">
            Certificate Preview
            <NftCertificate image={file}></NftCertificate>
            {/* <img alt="certificate_preview" src={file} className="border-black border-4 object-scale-down w-full h-full"></img> */}
          </div>
          : <></>

        }
      </div>

    </div >

  );
}
