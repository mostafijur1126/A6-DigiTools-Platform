import React from 'react';
import user from '../../assets/user.png';

const GetStarted = () => {
    return (
        <div>
            <div className='text-center py-12 md:py-20 bg-[#f9fafc] space-y-5 px-4' >
                <h1 className='text-3xl md:text-5xl font-bold'>Get Started in 3 Steps</h1>
                <p className='text-sm md:text-base'>Start using premium digital tools in minutes, not hours.</p>
                <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10'>
                    <div className='flex flex-col items-center justify-center relative bg-white p-6 md:p-10 rounded-3xl space-y-3 min-h-[260px]'>
                        <div className="badge bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 flex items-center justify-center absolute top-4 right-4">01</div>
                        <div className='p-4 md:p-6 w-fit bg-[#f5e7ff] rounded-full'>
                            <img className='w-8 md:w-10' src={user} alt="" />
                        </div>
                        <h2 className='text-xl md:text-2xl font-bold'>Create Account</h2>
                        <p className='text-sm md:text-base'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center relative bg-white p-6 md:p-10 rounded-3xl space-y-3 min-h-[260px]'>
                        <div className="badge bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 flex items-center justify-center absolute top-4 right-4">02</div>
                        <div className='p-4 md:p-6 w-fit bg-[#f5e7ff] rounded-full'>
                            <img className='w-8 md:w-10' src={user} alt="" />
                        </div>
                        <h2 className='text-xl md:text-2xl font-bold'>Choose Products</h2>
                        <p className='text-sm md:text-base'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center relative bg-white p-6 md:p-10 rounded-3xl space-y-3 min-h-[260px]'>
                        <div className="badge bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 flex items-center justify-center absolute top-4 right-4">03</div>
                        <div className='p-4 md:p-6 w-fit bg-[#f5e7ff] rounded-full'>
                            <img className='w-8 md:w-10' src={user} alt="" />
                        </div>
                        <h2 className='text-xl md:text-2xl font-bold'>Start Creating</h2>
                        <p className='text-sm md:text-base'>Download and start using your premium  tools immediately.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default GetStarted;