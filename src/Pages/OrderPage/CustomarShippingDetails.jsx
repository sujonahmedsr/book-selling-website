import cod from '../../assets/icons/cod.webp'
const CustomarShippingDetails = () => {
    return (
        <div className="isolate bg-white border border-gray-300">
            <div className="border-b border-gray-300 p-5">
                <h1 className="text-xl font-semibold text-gray-700">Shipping Address
                    <span className="text-base font-thin"> (Please Fill Out Your Information)</span></h1>
            </div>
            <form className="">
                <div className="flex flex-col items-center gap-x-8 gap-y-6 p-5">
                    <div className="flex items-center gap-10 w-full">
                        <div className="w-full">
                            <label htmlFor="first-name" className="block text-base font-semibold leading-6 text-gray-700">
                                Full Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="full_name"
                                    name="full_name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                                    placeholder="name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="first-name" className="block text-base font-semibold leading-6 text-gray-700">
                                Mobile Number
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="Mobile_Number"
                                    name="Mobile_Number"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                                    placeholder="017xx-xxxxxxx"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <label htmlFor="email" className="block text-base font-semibold leading-6 text-gray-700">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                                placeholder="xyz@mail.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <label htmlFor="message" className="block text-base font-semibold leading-6 text-gray-700">
                            Address
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md border px-3.5 py-2 text-gray-900 placeholder:text-gray-400 outline-none border-gray-300"
                                defaultValue={''}
                                placeholder="বাসা/ফ্ল্যাট নম্বর, পাড়া-মহল্লার নাম, পরিচিতির এলাকা উল্লেখ করুন"
                                required
                            />
                        </div>
                    </div>

                </div>
                <div className="border-t border-gray-300">
                    <div className="border-b border-gray-300 p-5">
                        <h1 className="text-xl font-semibold text-gray-700">Payment Method
                        <span className="text-base font-thin"> (Please select a payment method)</span></h1>
                    </div>
                    <div className="p-5 space-y-3">
                        <h1 className="text-lg font-semibold text-gray-600">ক্যাশ অন ডেলিভারি</h1>
                        <p className="text-sm text-gray-600 font-thin">পণ্য হাতে পেয়ে টাকা পরিশোধ করুন</p>
                        <div className='flex items-center gap-5 border p-5'>
                            <input type="radio" />
                            <img src={cod} alt="cod" />
                            <p className='text-base font-thin text-gray-500'>ক্যাশ অন ডেলিভারি</p>
                        </div>
                    </div>
                </div>
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