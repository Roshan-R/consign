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
  const [inputFields, setInputFields] = useState([{}]);
  const [isloading, setIsLoading] = useState(false);

  const [maxInput, setMaxInput] = useState(1);
  const [minInput, setMinInput] = useState(1);

  // const [final, SetFInal] = useState(true);
  // const [messageMax, setMessageMax] = useState("");

  const addFields = () => {
    console.log(maxInput);
    setMaxInput(maxInput + 1);
    if (maxInput < 10) {
      let newField = {};
      setInputFields([...inputFields, newField]);
    } else {
      SetFInal(false);
    }
  };
  const [minNum, setMinNum] = useState(0);
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
  // const { address, connector, isConnected } = useAccount();
  // const handleChangeMax = (event) => {
  //  setMessageMax(event.target.value);
  //  };
  //   const [debounceMinNum] = useDebounce(minNum, 500)

  return (
    <div className="h-scren bg-main overflow-auto">
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
            <form className="">
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-xl font-bold mb-1"
                >
                  Enter the wallet address
                </label>

                <div class="grid grid-cols-4 gap-4 overflow-auto">
                  {Array.apply(null, { length: maxInput }).map((e, i) => (
                    <div key={i}>
                      <input
                        className="mb-5 h-9 bg-gray-300"
                        id="username"
                        type="text"
                        placeholder="Your wallet address here"
                        onChange={(event) => {
                          handleAddresses(i, event);
                        }}
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
                  {isloading ? (
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
