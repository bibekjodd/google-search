"use client";
import HeaderOption from "@/components/header/header-option";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoImagesOutline, IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineVideoStable } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";

export default function HeaderOptions() {
  return (
    <div className="my-5 flex w-full items-center space-x-5 px-5 text-center text-sm font-semibold text-neutral-600 ">
      <HeaderOption Icon={AiOutlineSearch} title="All" selected />
      <HeaderOption Icon={IoImagesOutline} title="Images" />
      <HeaderOption Icon={MdOutlineVideoStable} title="Videos" />
      <HeaderOption Icon={IoNewspaperOutline} title="News" />
      <HeaderOption Icon={TbMapSearch} title="Maps" />
      <HeaderOption Icon={HiOutlineDotsVertical} title="More" />
    </div>
  );
}
