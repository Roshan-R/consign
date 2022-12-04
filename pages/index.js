import React from "react";
import Navbar from "../components/Navbar";
import { useState ,useEffect} from "react";
//import '../styles/index.css'
import { useNavigate } from "react";
import Link from "next/link";
import { Alert } from "@material-tailwind/react";
import Image from 'next/image'

function index() {
  const [connected, setConnected] = useState(false);

  const getAccount = async () => {
    const addressess = await window.ethereum.request({
      method:"eth_accounts",
    })
    if(addressess.length > 0){
      setConnected(true)
    }else{
      setConnected(false)
    }
  }
  useEffect(() => {
    getAccount()
  }, [connected])
  
  return (
    <>
      <div className=" h-screen">
        <Navbar connected={setConnected} />
        <div className="flex justify-center align-middle">
          
        </div>
        <div className="flex justify-center align-bottom">
          {connected && (
            <button class="bg-green-500 absolute mx-[500px] mb-11 inset-x-0 bottom-0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link href="/wallet">Create an organization</Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default index;
