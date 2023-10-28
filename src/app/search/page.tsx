import { useRouter } from "next/router";
import React from "react";
import Header from "@/components/Header";
import HeaderOption from "@/components/HeaderOption";
import { AiOutlineSearch } from "react-icons/ai";
import { IoImagesOutline } from "react-icons/io5";
import { MdOutlineVideoStable } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbMapSearch } from "react-icons/tb";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { API_KEY, CONTEXT_KEY } from "../key";
import Head from "next/head";
import SearchResults from "../components/SearchResults";

export default function Search({ results }) {
  const router = useRouter();
  console.log(results);

  return (
    <div className="w-full flex flex-col items-center p-2 ">
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      <Header term={router.query.term} />
      <div className="w-full flex flex-col items-start sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-[1200px]">
        <div className="w-full flex items-center text-sm font-semibold text-neutral-600 space-x-5 my-5 px-5 text-center ">
          <HeaderOption Icon={AiOutlineSearch} title="All" selected />
          <HeaderOption Icon={IoImagesOutline} title="Images" />
          <HeaderOption Icon={MdOutlineVideoStable} title="Videos" />
          <HeaderOption Icon={IoNewspaperOutline} title="News" />
          <HeaderOption Icon={TbMapSearch} title="Maps" />
          <HeaderOption Icon={HiOutlineDotsVertical} title="More" />
        </div>
        <SearchResults results={results} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "0";

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
