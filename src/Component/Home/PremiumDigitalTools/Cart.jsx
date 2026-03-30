import React from 'react';

const Cart = ({ addToCart,setAddToCart }) => {
    console.log(addToCart);
    const totalPrice = addToCart.reduce((sum , item) => sum + item.price, 0);
    function handelDelete(id) {
        console.log(id);
        setAddToCart(addToCart => addToCart.filter(item => item.id !== id));

    }
    function proceedToCheckout() {
        setAddToCart([]);
    }

    return (
        <div className='max-w-7xl mx-auto my-10 sm:my-16 lg:my-20 px-4'>
            <div className='border border-zinc-200 rounded-2xl p-4 sm:p-6 lg:p-10 space-y-5'>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left'>Your Cart</h1>
                {
                    addToCart.map(item => {
                        return (
                            <div key={item.id} className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-[#f8fafd]'>
                                <div className='flex items-center gap-3 sm:gap-4'>
                                    <div className='border border-zinc-100 p-2 sm:p-3 rounded-full w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center'>
                                        <img className='object-contain w-full h-full' src={item.logo} alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-lg sm:text-xl font-bold'>{item.name}</h2>
                                        <p className='text-sm sm:text-base'>${parseInt(item.price)}</p>
                                    </div>
                                </div>
                                <div className='text-right sm:text-left'>
                                    <p onClick={() => handelDelete(item.id)} className='font-bold text-red-600 cursor-pointer text-sm sm:text-base'>Remove</p>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='flex items-center justify-between p-3 sm:p-5 border-t'>
                    <h4 className='text-lg sm:text-xl '>Total</h4>
                    <h4 className='text-2xl sm:text-3xl font-bold'>${parseInt(totalPrice)}</h4>
                </div>
                <button onClick={proceedToCheckout} className='btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;