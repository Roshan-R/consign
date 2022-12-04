import { FaWallet } from "react-icons/fa";
import Input from "../../components/input";
import Certificate from "../../helpers/Certificate";

export default function Home() {

  async function handleSubmit(event) {

    event.preventDefault();

    const name = event.target[0].value;
    const addr = event.target[1].value;
    const file = event.target[2].files[0];

    let cert_helper = new Certificate();
    let cid = await cert_helper.storeImage(file);
    console.log(cid);

    let js =  {  "name":name,
                "description":"its alive!",
                "image":`ipfs://${cid}`
              }

    let metadata_id = await cert_helper.storeJson(js);
    console.log("Metadata id", metadata_id);
    let b = await cert_helper.createNFT(addr, metadata_id); 
    console.log(b)
  }

  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-green-700 text-xxl mb-3 ml-1">ISSUE CERTIFICATE</p>
        <form onSubmit={handleSubmit} method="post">
          <div className="grid gap-6 mb-6 md:grid-rows-2">
            <Input name="Certificate Name" placeholder="Name"></Input>
            <Input name="Reciever Address" placeholder="0x0000a0123123"><FaWallet /></Input>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input type="file" accept="image/png, image/jpeg" className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-500 file:text-white
                hover:file:bg-blue-600
                "/>
            </label>
            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
              SUBMIT</button>
          </div>
        </form>
      </div>
    </section>
  );
}
