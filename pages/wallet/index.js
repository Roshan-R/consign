import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

import React from "react";

function index() {
  const [inputFields, setInputFields] = useState([{}]);
  const [input, maxInput] = useState(1);
  const [final, SetFInal] = useState(true);
  const [messageMax, setMessageMax] = useState("");
  const handleChangeMax = (event) => {
    setMessageMax(event.target.value);
  };

  const addFields = () => {
    maxInput(input + 1);
    if (input < messageMax) {
      let newField = {};
      setInputFields([...inputFields, newField]);
    } else {
      SetFInal(false);
    }
  };
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
 

  if (input) {
    let final = false;
  }

  return (
    <div>
      <Navbar />
      <div className="h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700' flex justify-center items-center ">
        <div class="w-full max-w-xs">
          <div className="flex flex-row">
            <div className="absolute inset-y-0 left-0 mt-48 ml-2"> 
              <label className="font-medium mt-2 ml-2">
                How Many Official members
              </label>
              <div className="flex flex-row">
                <input
                  className="mb-4 w-60 rounded-md position:fixed "
                  placeholder="Enter the Maximum number of approvals"
                  type="number"
                  onChange={handleChangeMax}
                  value={messageMax}
                />

                <button
                  class="bg-blue-500 h-9 ml-2 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>

              <label className="font-medium mt-2 ml-2">
                Enter the Minimum number of officials to approve the transaction
              </label>
              <br></br>
              <div className="flex flex-row">
                <input
                  className="mb-4 w-60 rounded-md position:fixed "
                  placeholder="Enter the Minimum number of approvals"
                  type="number"
                  onChange={handleChange}
                  value={message}
                />
                <button
                  class="bg-blue-500 h-9 ml-2 mt-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 mt-40 w-72 mr-24">
              <form class=" shadow-md rounded px-8 pt-6 pb-8 mb-12">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Enter the wallet address
                  </label>
                  {inputFields.map((input, index) => {
                    return (
                      <div key={index}>
                        <input
                          class="shadow appearance-none border rounded w-full my-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                          placeholder="Your wallet address here"
                        />
                      </div>
                    );
                  })}
                </div>

                <div class="flex items-center justify-between">
                  {final && (
                    <button
                      onClick={addFields}
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Add New
                    </button>
                  )}
                  <button
                     
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
