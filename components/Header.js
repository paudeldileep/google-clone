import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";

import { SearchIcon, XIcon } from "@heroicons/react/outline";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();

  //function for search
  const inputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const inputTerm = inputRef.current.value;
    if (!inputTerm) return;
    console.log(inputTerm);
    router.push(`/search?term=${inputTerm}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-4 items-center">
        <Image
          src="/googlelogo.png"
          alt="logo"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow border border-gray-100 rounded-full shadow-lg max-w-3xl items-center px-8 py-2 ml-10 mr-5">
          <input
            ref={inputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (inputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-7 ml-3 hidden cursor-pointer sm:inline-flex text-blue-500 border-l-2 pl-2 border-gray-300 " />
          <SearchIcon className="h-7 ml-3 hidden cursor-pointer sm:inline-flex text-blue-500 pl-2 " />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <ViewGridIcon className="h-9 w-9 p-1 rounded-full hover:bg-gray-300 cursor-pointer ml-auto"/>
          {/* profile pic */}
          <Avatar url="/dileep.jpg"/>
      </div>
        <HeaderOptions/>
    </header>
  );
}

export default Header;
