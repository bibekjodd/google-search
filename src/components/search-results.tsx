import React from "react";
import PaginationButtons from "@/components/pagination-buttons";
import { fetchSearchResults } from "@/lib/fetch-search-results";

type Props = {
  term?: string;
  startIndex?: string | number;
};

export default async function SearchResults({ term, startIndex }: Props) {
  if (!term) return <div>Provide the search term to see results</div>;

  const results = await fetchSearchResults({
    term,
    startIndex: startIndex || 0,
  });
  if (!results) return <></>;

  return (
    <div className="mx-auto w-full px-5">
      <p className="mb-2 text-gray-600 ">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime}) seconds
      </p>
      {results.items?.map((result) => (
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
      {results.items && <PaginationButtons />}
    </div>
  );
}
