import React, { use } from 'react';
import ProductItems from './ProductItems';


const Products = ({ productData,setAddToCart,addToCart }) => {
    const products = use(productData);
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
                {
                    products.map((product) => {
                        return (
                            <ProductItems addToCart={addToCart} setAddToCart={setAddToCart} product={product} key={product.id}></ProductItems>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;