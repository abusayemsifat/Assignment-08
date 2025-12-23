import React from 'react';

const Trusted = () => {
    return (
        <div className='h-[410px] w-full bg-linear-to-r from-[#9F62F2] to-[#632EE3] flex flex-col py-20'>
            <h2 className='text-5xl font-bold text-center text-white'>Trusted by Millions, Built for You</h2>
            <div className='flex justify-between w-[1000px] mx-auto mt-10'>
                <div>
                <p className='text-gray-100 text-center'>Total Downloads</p>
                <h1 className='text-6xl font-bold text-white my-2 text-center'>29.6M</h1>
                <p className='text-gray-100 text-center'>21% More Than Last Month</p>
            </div>
            <div>
                <p className='text-gray-100 text-center'>Total Reviews</p>
                <h1 className='text-6xl font-bold text-white my-2 text-center'>906K</h1>
                <p className='text-gray-100 text-center'>46% More Than Last Month</p>
            </div>
            <div>
                <p className='text-gray-100 text-center'>Active Apps</p>
                <h1 className='text-6xl font-bold text-white my-2 text-center'>132+</h1>
                <p className='text-gray-100 text-center'>31 More Will Launch</p>
            </div>
            </div>
        </div>
    );
};

export default Trusted;