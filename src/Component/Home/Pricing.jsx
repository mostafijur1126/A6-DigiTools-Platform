import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
    return (
        <div className='max-w-7xl mx-auto py-12 md:py-20 px-4'>
            <h1 className='text-center text-3xl md:text-5xl font-bold'>
                Simple, Transparent Pricing
            </h1>
            <p className='py-4 md:py-5 text-center text-sm md:text-base'>
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10'>
                <div className='bg-[#f9fafc] p-6 md:p-8 rounded-2xl space-y-5 hover:scale-105 hover:bg-gradient-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white transition duration-300'>
                    <div>
                        <h1 className='text-xl md:text-2xl font-bold'>Starter</h1>
                        <p className='text-sm md:text-base'>Perfect for getting started</p>
                    </div>
                    <p className='text-2xl md:text-3xl font-bold'>$0 <span className='text-base'>/month</span></p>
                    <ul className='space-y-2 text-sm md:text-base'>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Access to 10 free tools</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Basic templates</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Community support</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Access to 10 free tools</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> 1 project per month</li>
                    </ul>
                    <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full'>Get Started Free</button>
                </div>
                <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white p-6 md:p-8 rounded-2xl space-y-5 relative scale-100 md:scale-105 shadow-xl'>
                    <div className=" badge badge-warning absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</div>
                    <div>
                        <h1 className='text-xl md:text-2xl font-bold'>Pro</h1>
                        <p className='text-gray-200 text-sm md:text-base'>Best for professionals</p>
                    </div>
                    <p className='text-2xl md:text-3xl font-bold'>
                        $29 <span className='text-base'>/month</span>
                    </p>
                    <ul className='space-y-2 text-sm md:text-base'>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Access to 10 free tools</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Unlimited templates</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Priority support</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Unlimited projects</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Cloud sync</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Advanced analytics</li>
                    </ul>
                    <button className='btn bg-white text-[#4F39F6] w-full rounded-full'>
                        Start Pro Trial
                    </button>
                </div>
                <div className='bg-[#f9fafc] p-6 md:p-8 rounded-2xl space-y-5 hover:scale-105 hover:bg-gradient-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white transition duration-300'>
                    <div>
                        <h1 className='text-xl md:text-2xl font-bold'>Enterprise</h1>
                        <p className='text-sm md:text-base'>For teams and businesses</p>
                    </div>
                    <p className='text-2xl md:text-3xl font-bold'>
                        $99 <span className='text-base'>/month</span>
                    </p>
                    <ul className='space-y-2 text-sm md:text-base'>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Everything in Pro</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Team collaboration</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Custom integrations</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Dedicated support</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> SLA guarantee</li>
                        <li className='flex items-center gap-2 '><FaCheck className='text-green-500' /> Custom branding</li>
                    </ul>
                    <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full'>
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;