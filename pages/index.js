import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-green-700 text-xxl mb-3 ml-1">CREATE WALLET</p>
        <form action="/send-data-here" method="post">
          <div className="grid gap-6 mb-6 md:grid-rows-2">
          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Send to" required></input>
          <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Min. approvals" required></input>
          </div>
        </form>
      </div>
    </section>
  );
}

