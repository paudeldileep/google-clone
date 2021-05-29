import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";


import {MicrophoneIcon,ViewGridIcon} from "@heroicons/react/solid";

import {SearchIcon} from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef } from "react";
import {useRouter} from "next/router";

export default function Home() {

  //function for search

  const router=useRouter();
  const inputRef=useRef(null);

  const search=(e)=>{
    e.preventDefault();
    const inputTerm=inputRef.current.value;

    if(!inputTerm) return;
    
    console.log(inputTerm);
    router.push(`/search?term=${inputTerm}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Home:Google-Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <header className="flex w-full justify-between p-2 bg-gray-100 text-gray-500">
        {/*left div */}
        <div className="flex space-x-4 items-center">
          <p>
            <a className="a_link" href="">Home</a>
          </p>
          <p>
            <a className="a_link" href="">About</a>
          </p>
        </div>

        {/*right div */}
        <div className="flex space-x-4 items-center">
          <p>
            <a className="a_link" href="">Gmail</a>
          </p>
          <p>
            <a className="a_link" href="">Images</a>
          </p>

          <ViewGridIcon className="h-9 w-9 p-1 rounded-full hover:bg-gray-300 cursor-pointer"/>
          {/* profile pic */}
          <Avatar url="/dileep.jpg"/>
        </div>
      </header>
      {/* Body */}

        <form className="flex flex-col items-center mt-20 flex-grow w-4/5">
          <Image src="/googlelogo.png" height="100" width="300"/>
          <div className="flex w-full mt-5 border border-gray-100 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 p-4 items-center sm:max-w-xl lg:max-w-2xl">

            <SearchIcon className="h-5 mr-3 text-gray-500"/>
            <input ref={inputRef} type="text" className="flex-grow focus:outline-none"/>
            
            <MicrophoneIcon className="h-5 ml-3 text-gray-500"/>
          </div>
          <div className="mt-4 flex flex-col space-y-2 justify-center sm:space-y-0 sm:flex-row sm:space-x-4">
            <button onClick={search} className="btn">Google Search</button>
            <button onClick={search} className="btn">I am feeling lucky</button>
          </div>
        </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
