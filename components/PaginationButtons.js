import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

function PaginationButtons() {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;


    return (
        <div className='flex max-w-xl justify-center space-x-10 mb-7'>
            {startIndex >= 10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <a className='flex flex-col items-center space-x-1 text-lg hover:text-blue-800'>
                        <AiOutlineLeft className='text-sm' />
                        <p>Previous</p>
                    </a>
                </Link>
            )}
            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <a className='flex flex-col items-center space-x-1 text-lg hover:text-blue-800'>
                    <AiOutlineRight className='text-sm' />
                    <p>Next</p>
                </a>
            </Link>
        </div>
    )
}

export default PaginationButtons