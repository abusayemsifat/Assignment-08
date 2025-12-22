import React from 'react';
import errorImg from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center'>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;