import React from 'react';

const ButtonToggling = ({setActiveCart,addToCart}) => {
    return (
        <div className='max-w-7xl mx-auto text-center my-10 sm:my-16 lg:my-20 px-4 space-y-4 sm:space-y-5'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug'>Premium Digital Tools</h1>
            <p className='text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed'>Choose from our curated collection of premium digital products designed<span className='hidden sm:inline'><br /></span>to boost your productivity and creativity.</p>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box justify-center bg-transparent flex-wrap gap-2 sm:gap-3">
                <input 
                onClick={()=> setActiveCart("Products")}
                type="radio" 
                name="my_tabs_1" 
                className="tab rounded-full text-sm sm:text-base px-3 sm:px-5 checked:bg-gradient-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white" 
                aria-label="Products" 
                defaultChecked/>
                <input 
                onClick={()=> setActiveCart("Cart")}
                type="radio"
                name="my_tabs_1" 
                className="tab rounded-full text-sm sm:text-base px-3 sm:px-5 checked:bg-gradient-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white" 
                aria-label={`Cart (${addToCart.length})`} />

            </div>
        </div>
    );
};

export default ButtonToggling;