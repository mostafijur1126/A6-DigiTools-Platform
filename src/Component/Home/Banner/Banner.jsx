import React from 'react';
import bannerImg from "../../../assets/banner.png";
import watchIcon from "../../../assets/play.png";
import circleIcom from "../../../assets/Group 5.png";

const Banner = () => {
    return (
        <div className=' max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row gap-10 my-10 lg:my-20 items-center justify-between'>
            <div className='space-y-5 text-center lg:text-left'>
                <div className=' flex gap-2 bg-[#E1E7FF] w-fit p-3 rounded-full mx-auto lg:mx-0'>
                        <img className='w-5 sm:w-6' src={circleIcom} alt="" />
                    <p className=' text-sm sm:text-base font-medium bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer'>
                        New: AI-Powered Tools Available
                    </p>

                </div>
                <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight'>Supercharge Your <br />
                    Digital Workflow</h1>
                <p className='text-sm sm:text-base'>Access premium AI tools, design assets, templates, and productivity <span className='hidden sm:inline'><br /></span>
                    software—all in one place. Start creating faster today.<span className='hidden sm:inline'><br /></span>

                    Explore Products
                </p>
                <div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start'>
                    <button 
                    className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full sm:w-auto'>
                        Explore Products</button>
                    <button className='flex items-center justify-center gap-3 border border-[#9514FA] btn rounded-full hover:bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:text-white w-full sm:w-auto'>
                        <img className='w-4 sm:w-5' src={watchIcon} alt="" />
                        Watch Demo
                    </button>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <img className='w-full max-w-md mx-auto lg:max-w-full' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;