import { Link, useNavigate } from 'react-router-dom';
import cod from '../../assets/icons/rok-icon-cod.svg'
import moneyback from '../../assets/icons/rok-icon-moneyback.svg'
import product from '../../assets/icons/rok-icon-original-product.svg'
import replacement from '../../assets/icons/rok-icon-replacement.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const Checkout = () => {
    const navigate = useNavigate()
    const { selectedItems, totalPrice } = useSelector(state => state.cart)
    useEffect(()=>{
        if(!selectedItems > 0){
            navigate('/')
        }
    },[selectedItems, navigate])
    return (
        <div>
            <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 space-y-3">
                <div>
                    <h1 className='text-xl font-semibold'>Your Cart Summary</h1>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-700">Select Items</p>
                    <p className="text-gray-700">{selectedItems}</p>
                </div>
                <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700">TK. {totalPrice?.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-700">Shipping</p>
                    <p className="text-gray-700">0</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                    <p className="text-lg font-bold">Total</p>
                    <div className="">
                        <p className="mb-1 text-lg font-bold">TK. {totalPrice?.toFixed(2)}</p>
                    </div>
                </div>
                <Link to={'/Order_Place'}>
                    <button className="mt-6 w-full rounded-md bg-primary py-2 font-medium text-blue-50 hover:bg-gray-700 flex items-center justify-center gap-2 duration-300">
                        Check out <FaArrowRightLong />
                    </button>
                </Link>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-md mt-10 space-y-5">
                <div className="flex gap-5">
                    <img src={cod} alt={cod} />
                    <p className="text-gray-700">ক্যাশ অন ডেলিভারি</p>
                </div>
                <div className="flex gap-5">
                    <img src={moneyback} alt={moneyback} />
                    <p className="text-gray-700">৭ দিনের মধ্যে পণ্য ফেরত সুবিধা</p>
                </div>
                <div className="flex gap-5">
                    <img src={product} alt={product} />
                    <p className="text-gray-700">১০০% অরিজিনাল প্রোডাক্ট </p>
                </div>
                <div className="flex gap-5">
                    <img src={replacement} alt={replacement} />
                    <p className="text-gray-700">১০০% টাকা ফেরত গ্যারান্টি</p>
                </div>

            </div>
        </div>
    );
};

export default Checkout;