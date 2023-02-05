import { FaWallet } from "react-icons/fa";
import Input from "../../components/input";
import Certificate from "../../helpers/Certificate";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useState, useRef } from "react";
import { toast } from "react-hot-toast";


export default function Home() {

  const button = useRef();
  const [isloading, setIsLoading] = useState(false);

  async function handleSubmit(event) {

    event.preventDefault();

    const name = event.target[0].value;
    const addr = event.target[1].value;
    const file = event.target[2].files[0];

    console.log(button);

    setIsLoading(true);

    let cert_helper = new Certificate();
    let metadata_url = await cert_helper.storeIPFS(file, name);
    let b = await cert_helper.createNFT(addr, metadata_url);

    console.log(b)
    setIsLoading(false);
    toast.success('Successfully created certificate!')
  }
  {/* <section className="bg-main"> */ }
  {/*   <Navbar /> */ }
  {/*   <div className="mt-24 flex flex-col items-center justify-center "> */ }
  {/*     <div className="border-black border-t-2 border-l-2 border-r-4 border-b-4 p-16"> */ }
  {/*       <form onSubmit={handleSubmit} method="post"> */ }
  {/*         <div className="grid gap-6 mb-6 md:grid-rows-2"> */ }
  {/*           <Input name="Certificate Name" placeholder="Name"></Input> */ }
  {/*           <Input name="Reciever Address" placeholder="0x0000a0123123"><FaWallet /></Input> */ }
  {/*           <label className="block"> */ }
  {/*             <span className="sr-only">Choose profile photo</span> */ }
  {/*             <input type="file" accept="image/png, image/jpeg" className="block w-full text-sm text-gray-500 */ }
  {/*               file:mr-4 file:py-2 file:px-4 */ }
  {/*               file:rounded-md file:border-0 */ }
  {/*               file:text-sm file:font-semibold */ }
  {/*               file:bg-blue-500 file:text-white */ }
  {/*               hover:file:bg-blue-600 */ }
  {/*               "/> */ }
  {/*           </label> */ }
  {/*           {/* <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"> */ }
  {/*           {/*   SUBMIT */ }
  {/*           {/* </button> */ }

  {/*           <button ref={button} type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"> */ }
  {/*             {isloading ? */ }
  {/*               <> */ }
  {/*                 <span class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span> */ }
  {/*                 Loading */ }
  {/*               </> */ }
  {/*               : */ }
  {/*               <> */ }
  {/*                 Submit */ }
  {/*               </> */ }
  {/*             } */ }
  {/*           </button> */ }
  {/*         </div> */ }
  {/*       </form> */ }
  {/*     </div> */ }
  {/*   </div> */ }
  {/* </section> */ }

  return (
    <div className="h-screen bg-main">
      <Navbar />
      <form onSubmit={handleSubmit} method="post">
        <div class="ml-24 mt-16">
          <div class="mb-8 text-6xl font-bold">
            CREATE <br />
            CERTIFICATE
          </div>
          <Input name="Certificate Name" placeholder="Name"></Input>
          <Input name="Reciever Address" placeholder="0x0000a0123123"><FaWallet /></Input>
          <label className="block text-xl font-bold font-roboto">Image file
            <span className="sr-only">Choose profile photo</span>
            <input type="file" accept="image/png, image/jpeg"
              className="block w-full text-sm text-gray-500
                 file:mr-4 file:py-2 file:px-4
                file:border-0 
                 file:text-sm file:font-semibold 
                 file:bg-gray-500 file:text-white 
                 hover:file:bg-gray-600 
            mb-5
                 "/>
          </label>
          <button type="submit" className="mt-6 text-xl font-bold mr-14 bg-peachh p-3 border-t-2 border-l-2 border-r-4 border-b-4 hover:border-b-8 border-black">
            {isloading ?
              <>
                <span class="animate-spin inline-block w-4 h-4 mr-2 border-[3px] border-current border-t-transparent text-black rounded-full" role="status" aria-label="loading"></span>
                Loading
              </>
              :
              <>
                Submit
              </>
            }
          </button>
        </div>
      </form>
    </div >

  );
}
