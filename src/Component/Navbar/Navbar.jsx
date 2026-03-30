import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const Navbar = ({addToCart,setActiveCart}) => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar max-w-7xl mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Products</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="font-bold text-xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Products</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a onClick={()=> setActiveCart("Cart")} className="btn rounded-full btn-ghost text-xl relative">
                        <IoCartOutline />
                        <span className='absolute -top-1 right-1 bg-red-500 text-white text-xs px-1 rounded-full'>{addToCart.length}</span>
                    </a>
                    <a className="btn btn-ghost rounded-full hover:bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:text-white hidden sm:inline-flex mx-3">Login</a>
                    <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full hidden sm:inline-flex">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;