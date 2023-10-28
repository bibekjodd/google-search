"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { MdSearch } from "react-icons/md";
import { TbMinusVertical } from "react-icons/tb";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get("term") || "");
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;
    if (!term) return;
    router.push(`/search?term=${term}&start=0`);
  };
  return (
    <header className="flex w-full items-center px-2 py-1">
      <Link href="/">
        <img src="/google-logo.png" alt="" className="w-20 sm:w-24 " />
      </Link>

      <form
        onSubmit={search}
        className="xs:w-80 mx-5 mr-auto flex w-72 items-center  space-x-1.5 rounded-full  px-7 py-3 text-lg shadow-md ring-1  ring-gray-200  transition focus-within:shadow-lg sm:mx-10  sm:w-[450px] sm:space-x-2 md:mx-16 md:w-[600px]"
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
          className="w-full bg-transparent text-base outline-none"
        />
        <AiOutlineClose
          onClick={() => {
            setInputValue("");
            searchInputRef.current?.focus();
          }}
          className="cursor-pointer text-xl text-gray-500 transition hover:text-black"
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
