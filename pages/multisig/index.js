import React from "react";
import Navbar from "../../components/Navbar";
function index() {
  return (
    <div classNameName='h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700"'>
      <Navbar />
      <div classNameName="ml-60 mt-5">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-black">
          Address of the officials
        </h2>
        <ul className="bg-gray-700 rounded-md ml-2 space-y-1 max-w-md list-disc list-inside text-white">
          <li>0x545453543543</li>
          <li>0x8778978</li>
          <li>0x3245656</li>
        </ul>
      </div>

      <h1 classNameName="font-bold mt-2 ml-60">
        Minimum number of approvals needed:
      </h1>
      <div>
        <div className="max-w-2xl mx-auto mt-5 ">
          <h1 classNameName="font-bold">Transaction 1</h1>
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                  <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead className="bg-gray-500 dark:bg-gray-700">
                      <tr>
                        <th scope="col" className="p-4">
                          <div className="flex items-center"></div>
                        </th>
                        <th
                          scope="col"
                          className="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Index
                        </th>
                        <th
                          scope="col"
                          className="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Destination
                        </th>
                        <th
                          scope="col"
                          className="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Value
                        </th>
                        <th
                          scope="col"
                          className="py-2 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Data
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="p-4 w-4">
                          <div className="flex items-center">
                            <label for="checkbox-table-1" className="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          01
                        </td>
                        <td className="py-2 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                          0x784545154654654
                        </td>
                        <td className="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          0.01
                        </td>
                        <td className="py-2 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          0.01
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-64 mt-1 "
        type="button"
      >
        Confirm
      </button>
    </div>
  );
}

export default index;
