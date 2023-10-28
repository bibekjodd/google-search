"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MdSearch } from "react-icons/md";
export default function Page() {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const term = searchInputRef.current?.value;
    if (!term) return;

    router.push(`/search?term=${term}&start=0`);
  };
  return (
    <div className="flex h-screen w-full flex-col text-base">
      <header className="flex w-full items-center justify-end space-x-2 px-4 py-2 sm:px-5 ">
        <span className="cursor-pointer p-1 hover:underline">Gmail</span>
        <span className="cursor-pointer p-1 hover:underline ">Images</span>
        <div className="cursor-pointer rounded-full p-1 hover:bg-gray-100">
          <CgMenuGridO className="text-[22px] text-neutral-700" />
        </div>
        <button>
          <img
            loading="lazy"
            src="https://lh3.googleusercontent.com/ogw/AOh-ky0SNvZMkQn6eD_FWcbDNlBj-bte_5BULh1ZIwjl=s32-c-mo"
            alt=""
            className="w-8 rounded-full transition duration-300 hover:scale-110"
          />
        </button>
      </header>

      <section className="my-10 mb-auto flex w-full flex-col items-center px-5">
        <img src="/google.svg" alt="" className="h-24 sm:h-28 md:h-32" />
        <form onSubmit={search} className="flex w-full flex-col items-center">
          <div className="xs:py-2 xs:w-96  flex w-full items-center space-x-1.5 rounded-full px-4 py-1.5  text-lg shadow-md ring-1 ring-gray-200 transition focus-within:shadow-lg  sm:w-[500px] sm:space-x-2">
            <MdSearch className="text-2xl text-gray-500" />
            <input
              ref={searchInputRef}
              type="text"
              name=""
              id=""
              className="w-full bg-transparent outline-none"
            />
            <img src="/voice.png" alt="" className="w-7 hover:cursor-pointer" />
          </div>
          <div className="xs:space-x-5 my-5 flex items-center justify-center space-x-2">
            <button className="rounded-md bg-gray-50 px-3 py-1.5 hover:bg-gray-100">
              Google Search
            </button>
            <button className="rounded-md bg-gray-50 px-3 py-1.5 hover:bg-gray-100">
              {`I'm Feeling Lucky`}
            </button>
          </div>
        </form>
        <h1 className="text-sm">
          Google Offered in:{" "}
          <span className="ml-1 cursor-pointer text-blue-500 hover:underline">
            {" "}
            नेपाली
          </span>
        </h1>
      </section>

      {/* bottom */}
      <div className="flex w-full flex-row flex-wrap items-center justify-center px-5 py-2 text-sm">
        <span className="mx-2.5 hidden cursor-pointer hover:underline sm:block">
          About
        </span>
        <span className="mx-2.5 hidden cursor-pointer hover:underline sm:block">
          Advertising
        </span>
        <span className="mx-2.5 hidden cursor-pointer hover:underline sm:block">
          How Search works
        </span>
        <span className="mx-2.5 ml-auto cursor-pointer hover:underline">
          Privacy
        </span>
        <span className="mx-2.5 cursor-pointer hover:underline">Terms</span>
        <span className="mx-2.5 cursor-pointer hover:underline">Settings</span>
      </div>
    </div>
  );
}
