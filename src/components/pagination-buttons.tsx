"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function PaginationButtons() {
  const searchParams = useSearchParams();
  const startIndex = Number(searchParams.get("start")) || 0;

  return (
    <div className="mb-7 flex max-w-xl justify-center space-x-10">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${searchParams.get("term")}&start=${
            startIndex - 10
          }`}
          className="flex flex-col items-center space-x-1 text-lg hover:text-blue-800"
        >
          <AiOutlineLeft className="text-sm" />
          <p>Previous</p>
        </Link>
      )}
      <Link
        className="flex flex-col items-center space-x-1 text-lg hover:text-blue-800"
        href={`/search?term=${searchParams.get("term")}&start=${
          startIndex + 10
        }`}
      >
        <AiOutlineRight className="text-sm" />
        <p>Next</p>
      </Link>
    </div>
  );
}
