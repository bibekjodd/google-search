import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import { MdSearch } from 'react-icons/md'
function Home() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;

        router.push(`/search?term=${term}&start=0`);
    }
    return (
        <div className='w-full flex flex-col h-screen text-base'>
            <header className='w-full flex px-5 py-2 justify-end space-x-2 items-center '>
                <span className='hover:underline cursor-pointer p-1'>Gmail</span>
                <span className='hover:underline cursor-pointer p-1 '>Images</span>
                <div className='p-1 hover:bg-gray-100 rounded-full cursor-pointer'>
                    <CgMenuGridO className='text-[22px] text-neutral-700' />
                </div>
                <button>
                    <img loading='lazy' src="https://lh3.googleusercontent.com/ogw/AOh-ky0SNvZMkQn6eD_FWcbDNlBj-bte_5BULh1ZIwjl=s32-c-mo" alt=""
                        className='w-8 rounded-full transition hover:scale-110 duration-300' />
                </button>
            </header>

            <section className='w-full flex flex-col items-center mb-auto my-10 px-5'>
                <img src="/google.svg" alt=""
                    className='h-24 sm:h-28 md:h-32' />
                <form onSubmit={search}
                    className='flex flex-col items-center w-full'>
                    <div
                        className='rounded-full px-4  py-1.5 xs:py-2 flex space-x-1.5 sm:space-x-2 items-center text-lg  w-full xs:w-96 sm:w-[500px] ring-1 ring-gray-200 shadow-md  focus-within:shadow-lg transition'>
                        <MdSearch className='text-2xl text-gray-500' />
                        <input ref={searchInputRef} type="text" name="" id=""
                            className='bg-transparent outline-none w-full' />
                        <img src="/voice.png" alt=""
                            className='w-7 hover:cursor-pointer' />
                    </div>
                    <div className='flex items-center justify-center space-x-2 xs:space-x-5 my-5'>
                        <button className='bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-md'>Google Search</button>
                        <button className='bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-md'>I'm Feeling Lucky</button>
                    </div>
                </form>
                <h1 className='text-sm'>Google Offered in: <span className='text-blue-500 hover:underline cursor-pointer ml-1'> नेपाली</span></h1>
            </section>


            {/* bottom */}
            <div className='w-full flex flex-row items-center px-5 py-2 flex-wrap justify-center'>
                <span className='hover:underline cursor-pointer mx-2.5 hidden sm:block'>About</span>
                <span className='hover:underline cursor-pointer mx-2.5 hidden sm:block'>Advertising</span>
                <span className='hover:underline cursor-pointer mx-2.5 hidden sm:block' >How Search works</span>
                <span className='hover:underline cursor-pointer mx-2.5 ml-auto' >Privacy</span>
                <span className='hover:underline cursor-pointer mx-2.5'>Terms</span>
                <span className='hover:underline cursor-pointer mx-2.5'>Settings</span>
            </div>

        </div>
    )
}

export default Home