// import Head from "next/head";
// import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
// import { useDebounce } from 'use-debounce'
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from 'wagmi'
import React from "react";
import Input from "../../components/input";
// import { usePrepareContractWrite } from "wagmi";
// import { useContractWrite } from "wagmi";
// import abi from '../../abi/mainContractAbi.json'

// function index() {
//   return (
//     <></>
//   );
// }

function index() {
  const { address, connector, isConnected } = useAccount()
  const [inputFields, setInputFields] = useState([{}]);
  const [input, maxInput] = useState(1);
  const [final, SetFInal] = useState(true);
  const [messageMax, setMessageMax] = useState("");
  //   const handleChangeMax = (event) => {
  //     setMessageMax(event.target.value);
  //   };

  const addFields = () => {
    maxInput(input + 1);
    if (input < 10) {
      let newField = {};
      setInputFields([...inputFields, newField]);
    } else {
      SetFInal(false);
    }
  };
  const [minNum, setMinNum] = useState(0);
  //   const [debounceMinNum] = useDebounce(minNum, 500)
  const handleChange = (event) => {
    setMinNum(event.target.value);
  };

  //   const [addresses, setAddresses] = useState([address]);
  //   const [debounceAddresses] = useDebounce(addresses, 500)
  //   const handleAddresses = (index, event) => {
  //     addresses[index] = event.target.value
  //     setAddresses([address, ...addresses.filter((el) => el)])
  //   }

  //   // const { config } = usePrepareContractWrite({
  //   //   address: '0xff71e53282684913a073850a0A09020b3F2c0286',
  //   //   abi: abi,
  //   //   functionName: 'createMultiSigWallet'
  //   // })
  //   // const { write } = useContractWrite(config)


  //   if (input) {
  //     let final = false;
  //   }

  //   useEffect(() => {
  //     console.log(addresses)
  //   }, [addresses])


  return (
    <div className="h-scren bg-main">
      <Navbar />
      <div className="">
        <div>
          <div className="ml-24 mt-16">
            <div className="mb-8 text-6xl font-bold">
              CREATE <br />
              MUTISIG WALLET
            </div>
            <Input name="Enter the Minimum number of officials to approve the transaction" />
            <br></br>
            <form className="">
              <div className="mb-4">
                <label
                  for="username"
                  className="block text-xl font-bold mb-1">Enter the wallet address
                </label>
                {/* <input className="mb-5 h-9 bg-gray-300" type="text" /> */}
                {inputFields.map((input, index) => {
                  return (
                    <div key={index}>
                      <input
                        className="my-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Your wallet address here"
                        onChange={(event) => { handleAddresses(index, event) }}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={addFields}
                  className="text-white bg-gray-600 font-bold py-2 px-4 "
                  type="button"
                >
                  Add New
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                // disabled={!write}
                // onClick={() => write?.()}
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
