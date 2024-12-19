import { useEffect, useState } from "react";
import { useAllDistrictQuery, useAllUpazilasQuery, useGetProfileQuery } from "../../RTK/Fearures/getBook/getBookApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import useAuth from "../providers/useAuth";

const GiftCustomarDetails = () => {
    const {user} = useAuth()
    const {data: userData} = useGetProfileQuery(user?.id)

    const { data: allDistricts } = useAllDistrictQuery()
    const { data: allUpazila } = useAllUpazilasQuery()
    const [districts, setDistricts] = useState([]);
    const [upazilas, setUpazilas] = useState([]);
    const [filteredUpazilas, setFilteredUpazilas] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedUpazila, setSelectedUpazila] = useState("");
    const [erros, setError] = useState('')

    useEffect(() => {
        setDistricts(allDistricts)
        setUpazilas(allUpazila)
    }, [allDistricts, allUpazila])

    // Filter upazilas based on selected district
    useEffect(() => {
        if (selectedDistrict) {
            const selectD = districts?.data?.find(item => item.name === selectedDistrict)
            const filtered = upazilas?.data?.filter(
                (upazila) => upazila?.district_id === Number(selectD.id)
            );
            setFilteredUpazilas(filtered);
        } else {
            setFilteredUpazilas([]);
        }
    }, [selectedDistrict, upazilas, districts]);


    const navigate = useNavigate()
    const [orderSuccess, serOrderSuccess] = useState(null)
    const { carts } = useSelector(state => state.cart)
    const [formData, setFormData] = useState({
        customerName: userData?.user?.name,
        phoneNumber: userData?.user?.phone,
        email: userData?.user?.email,
        deliveryAddress: "",
        deliveryAreaId: 1,
        gift_name: "",
        gift_number: "",
        gift_city: "",
        gift_upazila: "",
        gift_address: "",
        // gift_date: "",
        gift_charge: "20"
    });


    const products = carts.map((product) => {
        const variant = product.variant_product[0];
        return {
            product_id: product?.id,
            variant_id: variant?.id,
            quantity: product?.quantity,
        };
    })
    console.log(products);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDistrictChange = (e) => {
        const value = e.target.value;
        // const district = allDistricts?.data?.find(item => item.name === value)
        setSelectedDistrict(value);
        setFormData({
            ...formData,
            gift_city: value,
        });
    };

    const handleUpazilaChange = (e) => {
        const value = e.target.value; 
        // const upazila = allUpazila?.data?.find(item => item.name === value)      
        setSelectedUpazila(value);
        setFormData({
            ...formData,
            gift_upazila: value,
        });
        
        
    };

    const orderData = {
        order_info: formData,
        products
    }

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://kichukkhon.arnobghosh.me/api/order', orderData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            serOrderSuccess(response.data);

            if (response?.data?.status === 'success') {
                await localStorage.removeItem('carts');
                toast("Order placed successfully")
            }

            await delay(2000)

            navigate('/OrderSuccessMessage')
            window.location.reload()

        } catch (error) {
            setError(error.message)
            
            if (error.response) {
                console.error('Server Error:', error.response.data);
                console.error('Status Code:', error.response.status);
            } else if (error.request) {
                console.error('No Response Received:', error.request);
            } else {
                console.error('Error Setting Up Request:', error.message);
            }
        }
    };
    return (
        <div className="isolate bg-white border border-gray-300">
            <div className="border-b border-gray-300 p-5">
                <h1 className="text-xl font-semibold text-gray-700">Shipping Address
                    <span className="text-base font-thin"> (Please Fill Out Your Information)</span></h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-0">
                    <div className="flex flex-col items-center gap-6 p-5">
                        <div>
                            <h1 className="text-primary text-xl font-semibold">Gift From</h1>
                        </div>
                        {/* Full Name and Mobile Number */}
                        <div className="flex flex-col items-center gap-5 w-full">
                            <div className="w-full">
                                <label htmlFor="fullName" className="block text-base font-semibold text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    id="fullName"
                                    name="customerName"
                                    type="text"
                                    // defaultValue={userData?.user?.name}
                                    value={formData.customerName}
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
                                    // defaultValue={userData?.user?.phone}
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                                    placeholder="017xx-xxxxxxx"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email and Area Selection */}
                        <div className="flex flex-col items-center gap-5 w-full">
                            <div className="w-full">
                                <label htmlFor="email" className="block text-base font-semibold text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    // defaultValue={userData?.user?.email}
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

                        {/* <div className='flex items-center justify-between gap-5 w-full'>
                            <select onChange={(e) => setSelectedDistrict(e.target.value)}
                                value={selectedDistrict}
                                className=' mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300' name="" id="">
                                <option value="">Select District</option>
                                {
                                    districts?.data?.map(district => <option key={district.id} value={district?.name}>{district?.bn_name}</option>)
                                }

                            </select>
                            <select onChange={(e) => setSelectedUpazila(e.target.value)}
                                value={selectedUpazila} disabled={!selectedDistrict}
                                className=' mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300' name="" id="">
                                <option value="">Upazilas</option>
                                {
                                    filteredUpazilas?.map(district => <option key={district?.id} value={district?.name}>{district?.bn_name}</option>)
                                }
                            </select>
                        </div> */}


                        {/* Address */}
                        {/* <div className="w-full">
                            <label htmlFor="address" className="block text-base font-semibold text-gray-700">
                                Address
                            </label>
                            <textarea
                                id="address"
                                name="deliveryAddress"
                                rows={4}
                                value={formData.deliveryAddress}
                                onChange={handleChange}
                                className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                                placeholder="বাসা/ফ্ল্যাট নম্বর, পাড়া-মহল্লার নাম, পরিচিতির এলাকা উল্লেখ করুন"
                                required
                            />
                        </div> */}
                    </div>
                    <div className="flex flex-col items-center gap-6 p-5">
                    <div>
                            <h1 className="text-primary text-xl font-semibold">Gift To</h1>
                        </div>
                        {/* Full Name and Mobile Number */}
                        <div className="flex flex-col items-center gap-5 w-full">
                            <div className="w-full">
                                <label htmlFor="gift_name" className="block text-base font-semibold text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    id="gift_name"
                                    name="gift_name"
                                    type="text"
                                    value={formData.gift_name}
                                    onChange={handleChange}
                                    className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="gift_number" className="block text-base font-semibold text-gray-700">
                                    Mobile Number
                                </label>
                                <input
                                    id="gift_number"
                                    name="gift_number"
                                    type="text"
                                    value={formData.gift_number}
                                    onChange={handleChange}
                                    className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                                    placeholder="017xx-xxxxxxx"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email and Area Selection */}
                        <div className="flex flex-col items-center gap-5 w-full">
                            {/* <div className="w-full">
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
                            </div> */}
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

                        <div className='flex items-center justify-between gap-5 w-full'>
                            <select 
                            // onChange={(e) => setSelectedDistrict(e.target.value)}
                            onChange={handleDistrictChange}
                                value={selectedDistrict}
                                className=' mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300' name="" id="">
                                <option value="">Select District</option>
                                {
                                    districts?.data?.map(district => <option key={district.id} value={district?.name}>{district?.bn_name}</option>)
                                }

                            </select>
                            <select 
                            onChange={handleUpazilaChange}
                            // onChange={(e) => setSelectedUpazila(e.target.value)}
                                value={selectedUpazila} disabled={!selectedDistrict}
                                className=' mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300' name="" id="">
                                <option value="">Upazilas</option>
                                {
                                    filteredUpazilas?.map(district => <option key={district?.id} value={district?.name}>{district?.bn_name}</option>)
                                }
                            </select>
                        </div>


                        {/* Address */}
                        <div className="w-full">
                            <label htmlFor="deliveryAddress" className="block text-base font-semibold text-gray-700">
                                Address
                            </label>
                            <textarea
                                id="deliveryAddress"
                                name="deliveryAddress"
                                rows={4}
                                // value={formData.gift_address}
                                value={formData.deliveryAddress}
                                onChange={handleChange}
                                className="mt-2.5 block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                                placeholder="বাসা/ফ্ল্যাট নম্বর, পাড়া-মহল্লার নাম, পরিচিতির এলাকা উল্লেখ করুন"
                                required
                            />
                        </div>
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

                <p className="text-red-500">{erros}</p>

                {/* Submit Button */}
                <div className="border-t border-gray-300 p-5">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-lg font-semibold text-white hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary duration-300"
                    >
                        {
                            orderSuccess?.status === "success" ? "Order placed successfully" : "Confirm Gift Order "
                        }

                    </button>
                </div>
            </form>
        </div>
    );
};

export default GiftCustomarDetails;