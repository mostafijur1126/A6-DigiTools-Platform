import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-4'>
            <div className='max-w-7xl mx-auto py-12 md:py-20 text-center space-y-5 md:space-y-6'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug'>Ready to Transform Your Workflow?</h1>
                <p className='text-sm sm:text-base md:text-lg text-white/90'>Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden sm:block" />Start your free trial today.</p>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 pt-2'>
                    <button className='btn rounded-full bg-white text-[#4F39F6] w-full sm:w-auto'>Explore Products</button>
                    <button className='btn bg-transparent border border-white rounded-full text-white w-full sm:w-auto hover:bg-white hover:text-[#4F39F6] transition'>View Pricing</button>
                </div>
                <p className='text-xs sm:text-sm text-white/80 pt-2'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;