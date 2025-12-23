import React, { useEffect, useState } from 'react';
import { LiaDownloadSolid } from 'react-icons/lia';
import { MdStar } from 'react-icons/md';
import { Link } from 'react-router';

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
            <div className='flex justify-center'>
                <Link to='/allaps' className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white font-bold mx-auto w-30 text-lg">Show All</Link>
            </div>
        </div>
    );
};

export default TrendingApps;