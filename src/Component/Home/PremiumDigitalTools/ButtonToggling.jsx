import React from 'react';

const ButtonToggling = () => {
    return (
        <div className='max-w-7xl mx-auto text-center my-20 space-y-3'>
            <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
            <p>Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box justify-center bg-transparent">
                <input 
                type="radio" 
                name="my_tabs_1" 
                className="tab" 
                aria-label="Products" 
                defaultChecked/>
                <input 
                type="radio"
                name="my_tabs_1" 
                className="tab" 
                aria-label="Cart (2)" />

            </div>
        </div>
    );
};

export default ButtonToggling;