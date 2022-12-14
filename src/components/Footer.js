import React from 'react';

import IngresiveLogo from "../assets/ingresive_logo.png";

const Footer = () => {
    return (
        <div className='mt-5 border-t-2 border-gray-200 py-6 flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center'>
            <div className="logo">
                <h3 className='text-xl text-gray-800 font-bold'>Zuri<span className='text-red-600 text-4xl'>.</span>Internship</h3>
            </div>
            <div className="stack">
                <h3 className='text-gray-400'>HNG Internship 9 Frontend Task</h3>
            </div>
            <div className="ingresive-logo flex justify-start md:justify-end">
                <img className='w-[30%] md:w-[50%]' src={IngresiveLogo} alt="" />
            </div>
        </div>
    )
}

export default Footer