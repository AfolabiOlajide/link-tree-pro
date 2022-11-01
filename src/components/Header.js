import React from 'react'

const Header = ({image, name}) => {
    return (
        <div className='flex flex-col space-y-4 items-center justify-center'>
            <div id='profile_img' className="img w-[5rem] h-[5rem] rounded-full overflow-hidden">
                <img src={image} className="w-full object-cover" alt="" />
            </div>
            <div className="name">
                <h1 id='twitter' className='text-2xl font-bold text-gray-800'>{name}</h1>
                <h2 id='slack' className='text-2xl font-bold text-gray-800 hidden'>{name}</h2>
            </div>
        </div>
    )
}

export default Header