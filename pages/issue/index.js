import { FaWallet } from "react-icons/fa";
import Input from "../../components/input";

export default function Home() {

  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-green-700 text-xxl mb-3 ml-1">ISSUE CERTIFICATE</p>
        <form action="/send-data-here" method="post" onSubmit={handleSubmit}>
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
            <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
              SUBMIT</button>
          </div>
        </form>
      </div>
    </section>
  );
}
