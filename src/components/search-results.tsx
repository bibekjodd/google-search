"use client";
import React from "react";
import PaginationButtons from "@/components/pagination-buttons";

export type Results = {
  searchInformation: {
    formattedTotalResults: number;
    formattedSearchTime: string;
  };
  items: {
    link: string;
    formattedUrl: string;
    title: string;
    snippet: string;
  }[];
};

type Props = {
  results?: Results;
};

function SearchResults({ results }: Props) {
  if (!results) return "Search Results";
  return (
    <div className="mx-auto w-full px-5">
      <p className="mb-2 text-gray-600 ">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime}) seconds
      </p>
      {results.items.map((result) => (
        <div key={result.link} className="mb-8 max-w-xl">
          <div>
            <a
              href={result.link}
              className="line-clamp-1 whitespace-normal text-sm font-medium  text-gray-700"
            >
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="truncate text-lg font-medium text-blue-800 hover:underline">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
