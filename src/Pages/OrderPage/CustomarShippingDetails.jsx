import { useState } from 'react';
// import cod from '../../assets/icons/cod.webp'
import { useSelector } from 'react-redux';
// import axios from 'axios';
const CustomarShippingDetails = () => {
    const { carts } = useSelector(state => state.cart)
    const [formData, setFormData] = useState({
        customerName: "",
        phoneNumber: "",
        email: "",
        // area: "In Dhaka",
        deliveryAddress: "",
        deliveryAreaId: 1,
        
    });

    const products =  carts.map((product) => {
        const variant = product.variant_product[0];
        return {
            product_id: product.id,
            variant_id: variant.id,
            quantity: product.quantity,
        };
    })



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const orderData = {
        order_info: formData,
        products
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(orderData);
        
        // try {
        //     console.log("Form Data:", orderData); // Debugging log
    
        //     const response = await axios.post('https://kichukkhon.arnobghosh.me/api/order', orderData, {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });
        //     console.log("Form submitted:", orderData);
    
        //     console.log('Success:', response.data); // Handle success
        // } catch (error) {
        //     if (error.response) {
        //         console.error('Server Error:', error.response.data);
        //         console.error('Status Code:', error.response.status);
        //     } else if (error.request) {
        //         console.error('No Response Received:', error.request);
        //     } else {
        //         console.error('Error Setting Up Request:', error.message);
        //     }
        // }
        

        // axios.post('https://kichukkhon.arnobghosh.me/api/order', orderData)
        //     .then(response => {
        //         console.log('Response:', response.data); // Handle successful response
        //     })
        //     .catch(error => {
        //         console.error('Error:', error); // Handle error
        //     });

        // Add your form submission logic here
    };

    return (
        <div className="isolate bg-white border border-gray-300">
            <div className="border-b border-gray-300 p-5">
                <h1 className="text-xl font-semibold text-gray-700">Shipping Address
                    <span className="text-base font-thin"> (Please Fill Out Your Information)</span></h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col items-center gap-6 p-5">
                    {/* Full Name and Mobile Number */}
                    <div className="flex items-center gap-10 w-full">
                        <div className="w-full">
                            <label htmlFor="fullName" className="block text-base font-semibold text-gray-700">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                name="customerName"
                                type="text"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="mobileNumber" className="block text-base font-semibold text-gray-700">
                                Mobile Number
                            </label>
                            <input
                                id="mobileNumber"
                                name="phoneNumber"
                                type="text"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                                placeholder="017xx-xxxxxxx"
                                required
                            />
                        </div>
                    </div>

                    {/* Email and Area Selection */}
                    <div className="flex items-center gap-10 w-full">
                        <div className="w-full">
                            <label htmlFor="email" className="block text-base font-semibold text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                                placeholder="xyz@mail.com"
                                required
                            />
                        </div>
                        {/* <div className="w-1/4">
                            <label htmlFor="area" className="block text-base font-semibold text-gray-700">
                                Select Area
                            </label>
                            <select
                                id="area"
                                name="area"
                                value={formData.area}
                                onChange={handleChange}
                                className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 outline-none border-gray-300"
                            >
                                <option value="In Dhaka">In Dhaka</option>
                                <option value="Out Dhaka">Out Dhaka</option>
                            </select>
                        </div> */}
                    </div>

                    {/* Address */}
                    <div className="w-full">
                        <label htmlFor="address" className="block text-base font-semibold text-gray-700">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="deliveryAddress"
                            rows={4}
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                            placeholder="বাসা/ফ্ল্যাট নম্বর, পাড়া-মহল্লার নাম, পরিচিতির এলাকা উল্লেখ করুন"
                            required
                        />
                    </div>
                </div>

                {/* Payment Method */}
                {/* <div className="border-t border-gray-300">
                    <div className="border-b border-gray-300 p-5">
                        <h1 className="text-xl font-semibold text-gray-700">
                            Payment Method <span className="text-base font-thin">(Please select a payment method)</span>
                        </h1>
                    </div>
                    <div className="p-5 space-y-3">
                        <label className="flex items-center gap-5 border p-5">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="COD"
                                checked={formData.paymentMethod === "COD"}
                                onChange={handleChange}
                                required
                            />
                            <img src={cod} alt="Cash on Delivery" />
                            <p className="text-base font-thin text-gray-500">ক্যাশ অন ডেলিভারি</p>
                        </label>
                    </div>
                </div> */}

                {/* Submit Button */}
                <div className="border-t border-gray-300 p-5">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-lg font-semibold text-white hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 duration-300"
                    >
                        Confirm Order
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CustomarShippingDetails;