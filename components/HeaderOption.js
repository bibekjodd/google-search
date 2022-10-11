import React from 'react'

function HeaderOption({ Icon, title, selected }) {
    return (
        <div className={`flex  flex-col items-center  sm:flex-row space-x-2 px-1 border-b-2  hover:border-b-blue-500 cursor-pointer ${selected ? 'border-b-blue-500' : ''}`}>
            <Icon className='text-lg mb-1 translate-y-0.5' />
            <p className='hidden xs:block mb-1 '>{title}</p>
        </div>
    )
}

export default HeaderOption