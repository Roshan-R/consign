import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import React from "react";
import Input from "../../components/input";

// import { usePrepareContractWrite } from "wagmi";
// import { useContractWrite } from "wagmi";
// import abi from '../../abi/mainContractAbi.json'
// import Head from "next/head";
// import { useDebounce } from 'use-debounce'
// import {
//   useAccount,
//   useConnect,
//   useDisconnect,
//   useEnsAvatar,
//   useEnsName,
// } from "wagmi";

function Wallet() {

  const [isLoading, setIsLoading] = useState(false);
  const [maxInput, setMaxInput] = useState(1);
  const [minInput, setMinInput] = useState(1);
  const [adrs, setAdrs] = useState([]);

  function handleFormSubmit(e) {
    e.preventDefault();
    for (const x of e.target) {
      if (x.value) {
        adrs.push(x.value)
      }
    }
    console.log(adrs)
  }

  // const [final, SetFInal] = useState(true);
  // const [messageMax, setMessageMax] = useState("");


  //   const [addresses, setAddresses] = useState([address]);
  //   const [debounceAddresses] = useDebounce(addresses, 500)

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
  // const { address, connector, isConnected } = useAccount();
  // const handleChangeMax = (event) => {
  //  setMessageMax(event.target.value);
  //  };
  //   const [debounceMinNum] = useDebounce(minNum, 500)

  return (
    <div className="h-screen bg-main overflow-auto font-roboto">
      <Navbar />
      <div className="">
        <div>
          <div className="ml-24 mt-16">
            <div className="mb-8 text-6xl font-bold">
              CREATE <br />
              MUTISIG WALLET
            </div>
            <Input
              type="number"
              onChange={(e) => setMaxInput(e.target.value)}
              name="Total number of officials in wallet"
            />
            <Input
              type="number"
              onChange={(e) => setMinInput(e.target.value)}
              name="Minimum number of officials to approve the transaction"
            />
            <br></br>
            <form onSubmit={handleFormSubmit} className="">
              <div className="mb-4">
                {maxInput ?
                  <label
                    htmlFor="username"
                    className="block text-xl text-gray-700 font-bold mb-2"
                  >
                    Enter the wallet address
                  </label>
                  : <></>}

                <div className="grid grid-cols-6 overflow-auto mr-12">
                  {Array.apply(null, { length: maxInput }).map((e, i) => (
                    <div key={i}>
                      <input
                        className="mb-5 h-9 bg-gray-300"
                        id="username"
                        type="text"
                        placeholder={`${i + 1}. Your wallet address here`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="mt-6 text-xl font-bold mr-14 bg-peachh p-3 border-t-2 border-l-2 border-r-4 border-b-4 hover:border-b-8 border-black"
                >
                  {isLoading ? (
                    <>
                      <span
                        className="animate-spin inline-block w-4 h-4 mr-2 border-[3px] border-current border-t-transparent text-black rounded-full"
                        role="status"
                        aria-label="loading"
                      ></span>
                      Loading
                    </>
                  ) : (
                    <>Submit</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
