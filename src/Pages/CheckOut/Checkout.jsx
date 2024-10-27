import cod from '../../assets/icons/rok-icon-cod.svg'
import moneyback from '../../assets/icons/rok-icon-moneyback.svg'
import product from '../../assets/icons/rok-icon-original-product.svg'
import replacement from '../../assets/icons/rok-icon-replacement.svg'
import { FaArrowRightLong } from "react-icons/fa6";
const Checkout = () => {

    return (
        <div>
            <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0">
                <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700">$120</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-700">Shipping</p>
                    <p className="text-gray-700">0</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                    <p className="text-lg font-bold">Total</p>
                    <div className="">
                        <p className="mb-1 text-lg font-bold">$120 USD</p>
                        <p className="text-sm text-gray-700">No VAT</p>
                    </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-red-500 py-2 font-medium text-blue-50 hover:bg-red-600 flex items-center justify-center gap-2 ">
                    Check out <FaArrowRightLong />
                </button>
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