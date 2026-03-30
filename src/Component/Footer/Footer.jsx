import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className=' bg-[#101727] text-white'>
            <footer className="max-w-7xl mx-auto px-4 py-10 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                <div className='space-y-3'>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                        DigiTools
                    </h1>
                    <p className='text-sm sm:text-base text-gray-300 leading-relaxed'>
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>
                <div>
                    <h6 className="footer-title text-sm sm:text-base">Product</h6>
                    <ul className='space-y-1 text-sm sm:text-base'>
                        <li className="link link-hover">Branding</li>
                        <li className="link link-hover">Design</li>
                        <li className="link link-hover">Marketing</li>
                        <li className="link link-hover">Advertisement</li>
                    </ul>
                </div>
                <div>
                    <h6 className="footer-title text-sm sm:text-base">Company</h6>
                    <ul className='space-y-1 text-sm sm:text-base'>
                        <li className="link link-hover">Branding</li>
                        <li className="link link-hover">Design</li>
                        <li className="link link-hover">Marketing</li>
                        <li className="link link-hover">Advertisement</li>
                    </ul>
                </div>
                <div>
                    <h6 className="footer-title text-sm sm:text-base">Resources</h6>
                    <ul className='space-y-1 text-sm sm:text-base'>
                        <li className="link link-hover">About us</li>
                        <li className="link link-hover">Contact</li>
                        <li className="link link-hover">Jobs</li>
                        <li className="link link-hover">Press kit</li>
                    </ul>
                </div>
                <div>
                    <h6 className="footer-title text-sm sm:text-base">Social Links</h6>
                    <div className="flex gap-4 mt-2">
                        {/* icons same রাখো */}
                        <a className='hover:text-purple-400 transition'><FaInstagram /></a>
                        <a className='hover:text-purple-400 transition'><FaFacebookSquare /></a>
                        <a className='hover:text-purple-400 transition'><FaXTwitter /></a>
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