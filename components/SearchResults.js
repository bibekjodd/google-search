import React from 'react'
import PaginationButtons from './PaginationButtons'

function SearchResults({ results }) {

    return (
        <div className='w-full mx-auto px-5'>
            <p className='text-gray-600 mb-2 '
            >About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime}) seconds</p>
            {results.items.map((result) => (
                <div key={result.link}
                    className='max-w-xl mb-8'>
                    <div>
                        <a href={result.link}
                            className='text-sm font-medium text-gray-700'>
                            {result.formattedUrl}
                        </a>
                        <a href={result.link}>
                            <h2 className='truncate text-lg text-blue-800 font-medium hover:underline'>
                                {result.title}
                            </h2>
                        </a>
                    </div>
                    <p className='line-clamp-2'>{result.snippet}</p>
                </div>
            ))}
            <PaginationButtons />
        </div>
    )
}

export default SearchResults