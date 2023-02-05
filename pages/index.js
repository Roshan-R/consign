import Navbar from "../components/Navbar";
import Image from "next/image";

function index() {

  return (
    <div className="h-screen bg-main font-roboto">
      <Navbar />
      <div class="ml-6 mt-6 flex gap-[220px]">
        <div class="mt-40 ml-4 flex flex-col">
          <div class="text-7xl font-roboto font-extrabold">CONSIGN</div>
          <div class="text-2xl font-roboto">A Decentralized Certificate Issuing Platform</div>
          <button className="text-xl font-bold w-max mt-5 mr-2 bg-peachh p-3 border-t-2 border-l-2 border-r-4 border-b-4 hover:border-b-8 border-black">
            Get Started
          </button>
        </div>
        <div className="flex border-l-4 border-t-4 border-r-8 border-b-8 border-black justify-end items-center w-1/2">

          <Image alt="splashimage" src="https://ethereum.org/static/bf78b49d7e23b88a7eea934225b0cf96/dd036/enterprise-eth.png" className="w-max"></Image>
        </div>
      </div>
    </div>
  );
}

export default index;
