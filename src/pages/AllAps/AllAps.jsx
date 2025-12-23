import React, { useEffect, useState } from 'react';
import { LiaDownloadSolid } from 'react-icons/lia';
import { MdStar } from 'react-icons/md';
import { Link } from 'react-router';

const AllAps = () => {
    const [trendingApps, setTrendingApps] = useState([]);

    useEffect(() => {
        fetch('/AppsData.json')
            .then(res => res.json())
            .then(data => setTrendingApps(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='bg-[#f8f8f8]'>
            <div className='max-w-11/12 mx-auto'>
                <div>
                    <h2 className='text-6xl text-center font-bold text-[#001931] pt-20'>Our All Applications</h2>
                    <p className='text-center text-[#627382] mt-4 pb-10 text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 w-full'>
                    <h1 className='text-2xl font-bold text-[#001931]'>
                        ({trendingApps.length}) Apps Found
                    </h1>
                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search" />
                        </label>
                    </div>
                </div>
                <div className='grid grid-cols-4 pb-10 gap-y-15 justify-items-center'>
                    {
                        trendingApps.map(tapp =>
                            <Link to={`/details/${tapp?.id}`}>
                                <div className='w-79.25 h-101 bg-white rounded-xl flex flex-col p-4 justify-between cursor-pointer active:scale-95 hover:shadow-sm duration-50'>
                                    <div className='w-71.25 h-71.25'>
                                        <img src={tapp.image} className='object-cover w-full h-full rounded-xl' alt="" />
                                    </div>
                                    <h3 className='font-bold text-xl'>{tapp.title}</h3>
                                    <div className='flex justify-between items-center'>
                                        <div className='min-w-17.25 h-7.75 bg-[#F1F5E8] rounded-lg flex justify-center items-center'>
                                            <p className='text-[#00D390] font-bold'><LiaDownloadSolid className='inline' />{tapp.downloads}</p>
                                        </div>
                                        <div className='w-13.5 h-7.75 bg-[#FFF0E1] rounded-lg flex justify-center items-center'>
                                            <p className='text-[#FF8811] font-bold'><MdStar className='inline' /> {tapp.ratingAvg}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllAps;