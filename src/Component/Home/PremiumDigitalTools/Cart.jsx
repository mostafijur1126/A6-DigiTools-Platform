import React from 'react';

const Cart = ({ addToCart }) => {
    console.log(addToCart);
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <div className='border border-zinc-200 rounded-2xl p-10 space-y-5'>
                <h1 className='text-4xl font-bold'>Your Cart</h1>
                {
                    addToCart.map(item => {
                        return (
                            <div className='flex items-center justify-between p-8 rounded-3xl bg-[#f8fafd]'>
                                <div className='flex items-center gap-3'>
                                    <div className='border border-zinc-100 p-2 sm:p-3 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center'>
                                        <img className='object-contain w-full h-full' src={item.logo} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-xl font-bold'>{item.name}</h2>
                                        <p>${item.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold text-red-600 cursor-pointer'>Remove</p>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='flex items-center justify-between p-5'>
                    <h4 className='text-xl '>Total</h4>
                    <h4 className='text-3xl font-bold'>$0</h4>
                </div>
                <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full sm:w-auto'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;