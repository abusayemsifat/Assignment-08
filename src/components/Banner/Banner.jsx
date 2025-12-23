import React from 'react';
import googleImg from '../../assets/Google_Play_2022_logo.svg.png'
import appleImg from '../../assets/apple_appstore_logo_icon_168587.png'
import heroImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='flex flex-col'>
            <div className='pt-20'>
                <h1 className='text-7xl text-center font-bold text-[#001931]'>WE BUILD</h1>
                <h1 className='text-7xl text-center font-bold mt-4 text-[#001931]'><span className='text-[#632EE3]'>PRODUCTIVE</span> APPS</h1>
            </div>
            <h4 className='text-center text-[#627382] mt-4 pb-10 text-xl'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</h4>
            <div className='pb-10 mx-auto'>
                <button className="btn mr-4"><img src={googleImg} alt="" className='w-30'/></button>
                <button className="btn"><img src={appleImg} alt="" className='w-30'/></button>
            </div>
            <img src={heroImg} className='w-3xl mx-auto' alt="" />
        </div>
    );
};

export default Banner;