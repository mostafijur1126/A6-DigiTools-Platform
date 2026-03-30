import React from 'react';

const CounterSection = () => {
    return (
        <div className=' bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='max-w-7xl mx-auto px-6 py-12 md:py-20'>
                <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
                    <div className='text-center'>
                        <h1 className='text-5xl md:text-6xl font-bold text-white'>50K+</h1>
                        <p className='text-xl text-white mt-4 md:mt-6'>Active Users</p>
                    </div>
                    <div className="hidden md:block h-16 w-[1px] bg-gray-300/50 mx-auto"></div>
                    <div className='text-center'>
                        <h1 className='text-5xl md:text-6xl font-bold text-white'>200+</h1>
                        <p className='text-xl text-white mt-4 md:mt-6'>Premium Tools</p>
                    </div>
                    <div className="hidden md:block h-16 w-[1px] bg-gray-300/50 mx-auto"></div>
                    <div className='text-center'>
                        <h1 className='text-5xl md:text-6xl font-bold text-white'>4.9</h1>
                        <p className='text-xl text-white mt-4 md:mt-6'>Rating</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CounterSection;