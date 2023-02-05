// import Head from "next/head";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar";
// import { useDebounce } from 'use-debounce'
// import {
//   useAccount,
//   useConnect,
//   useDisconnect,
//   useEnsAvatar,
//   useEnsName,
// } from 'wagmi'
// import React from "react";
// import { usePrepareContractWrite } from "wagmi";
// import { useContractWrite } from "wagmi";
// import abi from '../../abi/mainContractAbi.json'

function index() {
  return (
    <></>
  );
}

// function index() {
//   const { address, connector, isConnected } = useAccount()
//   const [inputFields, setInputFields] = useState([{}]);
//   const [input, maxInput] = useState(1);
//   const [final, SetFInal] = useState(true);
//   const [messageMax, setMessageMax] = useState("");
//   const handleChangeMax = (event) => {
//     setMessageMax(event.target.value);
//   };

//   const addFields = () => {
//     maxInput(input + 1);
//     if (input < 10) {
//       let newField = {};
//       setInputFields([...inputFields, newField]);
//     } else {
//       SetFInal(false);
//     }
//   };
//   const [minNum, setMinNum] = useState(0);
//   const [debounceMinNum] = useDebounce(minNum, 500)
//   const handleChange = (event) => {
//     setMinNum(event.target.value);
//   };

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


//   return (
//     <div>
//       <Navbar />
//       <div className="h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700' flex justify-center items-center ">
//         <div className="w-full max-w-xs">
//           <div className="flex flex-row">
//             <div className="absolute inset-y-0 left-0 mt-48 ml-2">
//               {/* <label className="font-medium mt-2 ml-2"> */}
//               {/*   How Many Official members */}
//               {/* </label> */}
//               {/* <div className="flex flex-row"> */}
//               {/*   <input */}
//               {/*     className="mb-4 w-60 rounded-md position:fixed " */}
//               {/*     placeholder="Enter the Maximum number of approvals" */}
//               {/*     type="number" */}
//               {/*     onChange={handleChangeMax} */}
//               {/*     value={messageMax} */}
//               {/*   /> */}

//               {/*   <button */}
//               {/*     className="bg-blue-500 h-9 ml-2 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" */}
//               {/*     type="button" */}
//               {/*   > */}
//               {/*     Submit */}
//               {/*   </button> */}
//               {/* </div> */}

//               <label className="font-medium mt-2 ml-2">
//                 Enter the Minimum number of officials to approve the transaction
//               </label>
//               <br></br>
//               <div className="flex flex-row">
//                 <input
//                   className="mb-4 w-60 rounded-md position:fixed "
//                   placeholder="Enter the Minimum number of approvals"
//                   type="number"
//                   onChange={handleChange}
//                   value={minNum}
//                 />
//                 <button
//                   className="bg-blue-500 h-9 ml-2 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                   type="button"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//             <div className="absolute inset-y-0 right-0 mt-40 w-72 mr-24">
//               <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-12">
//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 text-sm font-bold mb-2"
//                     for="username"
//                   >
//                     Enter the wallet address
//                   </label>
//                   {inputFields.map((input, index) => {
//                     return (
//                       <div key={index}>
//                         <input
//                           className="shadow appearance-none border rounded w-full my-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                           id="username"
//                           type="text"
//                           placeholder="Your wallet address here"
//                           onChange={(event) => { handleAddresses(index, event) }}
//                         />
//                       </div>
//                     );
//                   })}
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <button
//                     onClick={addFields}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     type="button"
//                   >
//                     Add New
//                   </button>
//                   <button

//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     type="button"
//                   // disabled={!write}
//                   // onClick={() => write?.()}
//                   >
//                     Proceed
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default index;
