"use client";
import { useSearchParams } from "next/navigation";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ProgressLink from "./progress-link";

export default function PaginationButtons() {
  const searchParams = useSearchParams();
  const startIndex = Number(searchParams.get("start")) || 0;

  return (
    <div className="mb-7 flex max-w-xl justify-center space-x-10">
      {startIndex >= 10 && (
        <ProgressLink
          href={`/search?term=${searchParams.get("term")}&start=${
            startIndex - 10
          }`}
          className="flex flex-col items-center space-x-1 text-lg hover:text-blue-800"
        >
          <AiOutlineLeft className="text-sm" />
          <p>Previous</p>
        </ProgressLink>
      )}
      <ProgressLink
        className="flex flex-col items-center space-x-1 text-lg hover:text-blue-800"
        href={`/search?term=${searchParams.get("term")}&start=${
          startIndex + 10
        }`}
      >
        <AiOutlineRight className="text-sm" />
        <p>Next</p>
      </ProgressLink>
    </div>
  );
}
