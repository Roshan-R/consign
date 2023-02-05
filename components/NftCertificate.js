import React from "react";
import Image from "next/image";

const NftCertificate = ({ title, image, description }) => {
  return (
    <div>
      <div className="flex group flex-col bg-gray-100 border-black border-4 shadow-sm ">
        <div className="p-4 md:p-5">
          <div className="flex flex-row justify-between">
            <h3 className="text-3xl font-bold text-gray-800 border-b-4 border-black">{title}</h3>
            <button
              type="button"
              className="text-white bg-gray-800 hidden group-hover:block hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 transition-opacity "
            >
              Delete
            </button>
          </div>
          <Image
            className="mt-5 max-w-sm max-h-sm"
            src={image}
            alt={description}
          />
        </div>
      </div>
    </div>
  );
};

export default NftCertificate;
