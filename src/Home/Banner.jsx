import React from 'react';
import banner from "../assets/banner.avif"

const Banner = () => {
    return (
        <header className='bg-cover	bg-no-repeat bg-center h-[500px] flex items-center justify-center' style={{ backgroundImage: `url(${banner})` }}>
            
        </header>
    );
};

export default Banner;