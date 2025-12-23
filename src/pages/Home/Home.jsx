import React from 'react';
import Banner from '../../components/Banner/Banner';
import Trusted from '../../components/Trusted/Trusted';

const Home = () => {
    return (
        <div className='bg-[#f8f8f8]'>
            <div className=''>
                <Banner></Banner>
                <Trusted></Trusted>
            </div>
        </div>
    );
};

export default Home;