import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className=' bg-[#101727] text-white'>
            <footer className="bg-[#0f172a] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        <div className="space-y-4 text-center sm:text-left">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                                DigiTools
                            </h1>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                Premium digital tools for creators, professionals, and businesses.
                                Work smarter with our suite of powerful tools.
                            </p>
                        </div>
                        <div className="text-center sm:text-left">
                            <h6 className="font-semibold mb-3 text-sm sm:text-base">Product</h6>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                                <li className="hover:text-white cursor-pointer">Branding</li>
                                <li className="hover:text-white cursor-pointer">Design</li>
                                <li className="hover:text-white cursor-pointer">Marketing</li>
                                <li className="hover:text-white cursor-pointer">Advertisement</li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <h6 className="font-semibold mb-3 text-sm sm:text-base">Company</h6>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                                <li className="hover:text-white cursor-pointer">About</li>
                                <li className="hover:text-white cursor-pointer">Careers</li>
                                <li className="hover:text-white cursor-pointer">Contact</li>
                                <li className="hover:text-white cursor-pointer">Press</li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <h6 className="font-semibold mb-3 text-sm sm:text-base">Resources</h6>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                                <li className="hover:text-white cursor-pointer">Help</li>
                                <li className="hover:text-white cursor-pointer">Privacy</li>
                                <li className="hover:text-white cursor-pointer">Terms</li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <h6 className="font-semibold mb-3 text-sm sm:text-base">Follow Us</h6>
                            <div className="flex justify-center sm:justify-start gap-4 text-xl">
                                <a className="hover:text-purple-400 transition">
                                    <FaInstagram />
                                </a>
                                <a className="hover:text-purple-400 transition">
                                    <FaFacebookSquare />
                                </a>
                                <a className="hover:text-purple-400 transition">
                                    <FaXTwitter />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            <div>
                <div className="border-t border-gray-600"></div>
                <div className='max-w-7xl mx-auto px-4 py-4 
        flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-300 text-sm sm:text-base'>
                    <p className='text-center sm:text-left'>© 2026 Digitools. All rights reserved.</p>
                    <ul className='flex flex-wrap justify-center sm:justify-end gap-4'>
                        <li className='cursor-pointer hover:text-white'>Privacy Policy</li>
                        <li className='cursor-pointer hover:text-white'>Terms of Service</li>
                        <li className='cursor-pointer hover:text-white'>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;