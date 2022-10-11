import React, { useRef } from 'react'
import { MdSearch } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { TbMinusVertical } from 'react-icons/tb'
import { FiSettings } from 'react-icons/fi'
import { CgMenuGridO } from 'react-icons/cg'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}&start=0`);
    }
    return (
        <header className='w-full flex items-center py-1 px-2'>
            <img src="/google-logo.png" alt=""
                className='w-20 sm:w-24 ' />
            <form onSubmit={search}
                className='rounded-full px-5 mx-5 sm:mx-10 md:mx-16 mr-auto  py-1 shadow-md  flex space-x-1.5 sm:space-x-2 items-center text-lg  w-72  xs:w-80 sm:w-[450px] md:w-[600px]  ring-1 ring-gray-200 focus-within:shadow-lg transition'>
                <input ref={searchInputRef}
                    type="text" name="" id="" placeholder={'Search Google'}
                    className='bg-transparent outline-none w-full' />
                <AiOutlineClose onClick={() => { searchInputRef.current.value = '' }}
                    className='text-2xl transition text-gray-500 hover:text-black cursor-pointer' />
                <TbMinusVertical className='text-3xl transition text-gray-500 hidden xs:block' />
                <MdSearch className='text-2xl transition text-blue-500 cursor-pointer hidden xs:block' />
                <img src="/voice.png" alt=""
                    className='w-5 hover:cursor-pointer hidden sm:block' />
            </form>

            <div className='flex items-center ml-auto space-x-3'>
                <div className='p-1.5 aspect-square rounded-full hover:bg-gray-100  hidden sm:block '>
                    <FiSettings className='text-[22px] text-neutral-700' />
                </div>
                <div className='p-1.5 aspect-square rounded-full hover:bg-gray-100 hidden sm:block'>
                    <CgMenuGridO className='text-[22px] text-neutral-700' />
                </div>

                <img loading='lazy' src="https://yt3.ggpht.com/ytc/AMLnZu_RzT44-NlvFai7mYSBMW-F1OMtCyoPskJzkYzGwA=s900-c-k-c0x00ffffff-no-rj" alt=""
                    className='w-7 rounded-full transition hover:scale-110 duration-300 aspect-square ' />
            </div>
        </header>
    )
}

export default Header