import React, { useEffect, useState } from 'react';
import { LiaDownloadSolid } from 'react-icons/lia';
import { MdStar } from 'react-icons/md';

const TrendingApps = () => {
    const [trendingApps, setTrendingApps] = useState([]);

    useEffect(() => {
        fetch('/AppsData.json')
            .then(res => res.json())
            .then(data => setTrendingApps(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='max-w-11/12 mx-auto pt-20 pb-20'>
            <h1 className='text-5xl text-center font-bold'>Trending Apps</h1>
            <p className='mt-4 text-gray-400 text-center mb-10'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-4 pb-10 gap-y-15 justify-items-center'>
                {
                    trendingApps.slice(0, 8).map(tapp =>
                        <div className='w-[317px] h-[404px] bg-white rounded-xl flex flex-col p-4 justify-between'>
                            <div className='w-[285px] h-[285px]'>
                                <img src={tapp.image} className='object-cover w-full h-full rounded-xl' alt="" />
                            </div>
                            <h3 className='font-bold text-xl'>{tapp.title}</h3>
                            <div className='flex justify-between items-center'>
                                <div className='min-w-[69px] h-[31px] bg-[#F1F5E8] rounded-lg flex justify-center items-center'>
                                    <p className='text-[#00D390] font-bold'><LiaDownloadSolid className='inline' />{tapp.downloads}</p>
                                </div>
                                <div className='w-[54px] h-[31px] bg-[#FFF0E1] rounded-lg flex justify-center items-center'>
                                    <p className='text-[#FF8811] font-bold'><MdStar className='inline' /> {tapp.ratingAvg}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-center'>
                <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white font-bold mx-auto w-30 text-lg">Show All</a>
            </div>
        </div>
    );
};

export default TrendingApps;