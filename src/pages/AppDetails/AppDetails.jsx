import React, { useEffect, useState } from 'react';
import { LiaDownloadSolid } from 'react-icons/lia';
import { MdReviews, MdStar } from 'react-icons/md';
import { useParams } from 'react-router';
import { addToInstalledDB } from '../../utility/addToDB';

const AppDetails = () => {

    const [trendingApps, setTrendingApps] = useState([]);

    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        fetch('/AppsData.json')
            .then(res => res.json())
            .then(data => {
                setTrendingApps(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const findResult = trendingApps.find(app => app.id == id)

    const handleInstall = (id) =>{
        addToInstalledDB(id)
        setIsInstalled(true)
    }

    if (loading) {
        return (
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading app details...</p>
            </div>
        )
    }

    return (
        <div className='bg-[#f8f8f8]'>
            <div className='max-w-11/12 mx-auto'>
                <div className='pt-20 flex'>
                    <img src={findResult.image} className='shadow-xl' alt="" />
                    <div className='ml-10'>
                        <h1 className='text-5xl font-bold'>{findResult.title}</h1>
                        <p className='text-[#627382] mt-4 pb-5 text-xl'>Developed by {findResult.companyName}</p>
                        <div className='flex gap-6'>
                            <div className='flex flex-col gap-1'>
                                <LiaDownloadSolid className='text-5xl'/>
                                <p>Downloads</p>
                                <h1 className='text-5xl font-bold'>{findResult.downloads}</h1>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <MdStar className='text-5xl'/>
                                <p>Average Ratings</p>
                                <h1 className='text-5xl font-bold'>{findResult.ratingAvg}</h1>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <MdReviews className='text-5xl'/>
                                <p>Total Reviews</p>
                                <h1 className='text-5xl font-bold'>{findResult.reviews}</h1>
                            </div>
                        </div>
                        <button onClick={()=>handleInstall(findResult.id)} disabled={!isInstalled} className='w-[239px] h-[52px] mt-5 bg-[#00D390] text-white text-xl rounded-lg cursor-pointer active:scale-95 hover:opacity-95'>Install Now ({findResult.size} MB)</button>
                    </div>
                </div>
                <h2 className='text-2xl font-bold py-2'>Description</h2>
                <p className='pb-5'>{findResult.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;