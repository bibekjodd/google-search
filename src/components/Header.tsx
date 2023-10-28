import React, { useEffect, useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { TbMinusVertical } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;
    if (!term) return;
    router.push(`/search?term=${term}&start=0`);
  };
  useEffect(() => {
    // if (router.isReady) setInputValue(router.query.term);
  }, []);
  return (
    <header className="flex w-full items-center px-2 py-1">
      <img src="/google-logo.png" alt="" className="w-20 sm:w-24 " />
      <form
        onSubmit={search}
        className="xs:w-80 mx-5 mr-auto flex w-72 items-center  space-x-1.5 rounded-full  px-5 py-1 text-lg shadow-md ring-1  ring-gray-200  transition focus-within:shadow-lg sm:mx-10  sm:w-[450px] sm:space-x-2 md:mx-16 md:w-[600px]"
      >
        <input
          ref={searchInputRef}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          name=""
          id=""
          placeholder={"Search Google"}
          className="w-full bg-transparent outline-none"
        />
        <AiOutlineClose
          onClick={() => {
            searchInputRef.current = null;
            // searchInputRef.current?.focus();
          }}
          className="cursor-pointer text-2xl text-gray-500 transition hover:text-black"
        />
        <TbMinusVertical className="xs:block hidden text-3xl text-gray-500 transition" />
        <MdSearch className="xs:block hidden cursor-pointer text-2xl text-blue-500 transition" />
        <img
          src="/voice.png"
          alt=""
          className="hidden w-5 hover:cursor-pointer sm:block"
        />
      </form>

      <div className="ml-auto flex items-center space-x-3">
        <div className="hidden aspect-square rounded-full p-1.5  hover:bg-gray-100 sm:block ">
          <FiSettings className="text-[22px] text-neutral-700" />
        </div>
        <div className="hidden aspect-square rounded-full p-1.5 hover:bg-gray-100 sm:block">
          <CgMenuGridO className="text-[22px] text-neutral-700" />
        </div>

        <img
          loading="lazy"
          src="https://yt3.ggpht.com/ytc/AMLnZu_RzT44-NlvFai7mYSBMW-F1OMtCyoPskJzkYzGwA=s900-c-k-c0x00ffffff-no-rj"
          alt=""
          className="aspect-square w-7 rounded-full transition duration-300 hover:scale-110 "
        />
      </div>
    </header>
  );
}
