
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';



const ProductItems = ({ product,setAddToCart,addToCart }) => {
    const isAdded = addToCart.some(items => items.id === product.id);
    function buyProduct() {
        if(!isAdded){
            setAddToCart(addToCart=>[...addToCart, product]);
            toast.success("Product add successfuly😍",{
                position: "top-center",
            });
        }else{
            toast.warn('already added🙂', {
                position: "top-center",
            });
        }
    }
    return (
        <div className='border border-zinc-100 p-4 sm:p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 space-y-4 relative bg-white'>
            <div className='flex items-center justify-between'>
                <div className='border border-zinc-100 p-2 sm:p-3 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center'>
                    <img className='object-contain w-full h-full ' src={product.logo} alt="logo" />

                </div>

                <div className={` text-xs sm:text-sm px-3 py-1 rounded-full font-semibold 
                                    ${product.tag === "popular"
                        ? "bg-[#e3e6ff] text-blue-600"
                        : product.tag === "best seller"
                            ? "bg-[#fcf2c5] text-green-600"
                            : product.tag === "new"
                                ? "bg-[#d9fce5] text-green-600"
                                : ""
                    }
                                    `}
                >
                    {product.tag.toUpperCase()}
                </div>
            </div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-bold'>{product.name}</h3>
            <p className='text-sm sm:text-base text-gray-500'>{product.description}</p>
            <p className='text-xl sm:text-2xl font-bold' >${parseInt(product.price)} <span className='text-sm text-gray-500'>/{product.period}</span></p>
            <div>
                <ul className='space-y-1 sm:space-y-2'>
                    {product.features.map((feature, index) => (
                        <li className='flex items-start gap-2 text-sm sm:text-base' key={index}><FaCheck className='text-green-500 mt-1' />{feature}</li>
                    ))}
                </ul>
            </div>
            <button
                onClick={buyProduct}
                className={`btn w-full py-2 sm:py-3 text-sm sm:text-base rounded-full text-white transition duration-300
                    ${isAdded
                        ? "bg-green-500"
                        : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
                    }
  `}
            >
                {isAdded ? "Added to cart" : "Buy Now"}
            </button>
        </div>
    );
};

export default ProductItems;