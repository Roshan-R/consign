import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useEffect } from "react";

function index() {

    const db = {
        ktuguys: ["0x11d77214c1621EA0529357eA0179b294310b67A7",
            "0x3412879831a687ce0a752e37aF3bBf941884fB41",
            "0x19b41d78eA16fb99885bf6265add688a7EBE6DD6"],
        multisign_addr: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
    }


    useEffect(() => {
        console.log(localStorage.setItem("what", "is"))
        console.log(localStorage.getItem("what"))
    }, [])

    return (
        <div className="h-screen bg-main font-roboto">
            <Navbar />
            <div className="mx-9 mt-6 flex justify-between">
                <div className="mt-40 ml-4 flex flex-col">
                    <div className="text-7xl font-extrabold">CONSIGN</div>
                    <div className="text-2xl">A Decentralized Certificate Issuing Platform</div>
                    <Button text="Get Started"></Button>
                </div>
                <div className="flex border-brutal-lg justify-end items-center w-1/2">
                    <img alt="splashimage" src="/enterprise-eth.webp" className="w-max"></img>
                </div>
            </div>
        </div >
    );
}

export default index;
