"use client";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  title: string;
  selected?: boolean;
};
export default function HeaderOption({ Icon, title, selected }: Props) {
  return (
    <div
      className={`flex  cursor-pointer flex-col  items-center space-x-2 border-b-2 px-1  hover:border-b-blue-500 sm:flex-row ${
        selected ? "border-b-blue-500" : ""
      }`}
    >
      <Icon className="mb-1 translate-y-0.5 text-lg" />
      <p className="xs:block mb-1 hidden ">{title}</p>
    </div>
  );
}
