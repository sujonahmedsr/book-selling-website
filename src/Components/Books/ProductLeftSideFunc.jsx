import { IoIosSearch } from "react-icons/io";

const ProductLeftSideFunc = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="border border-gray-300 bg-gray-50 shadow-md">
                <div className="flex items-center justify-between border-b border-gray-300 p-3">
                    <h1 className="text-xl font-bold text-gray-700">Shop by Categories</h1>
                </div>
                <div className="p-4 space-y-2 h-40 text-sm overflow-scroll overflow-x-hidden webkit-scrollbar">
                    <div className="flex items-center gap-2 ">
                        <input type="radio" />
                        <p className="text-gray-700">আতিকুর রহমান</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" />
                        <p className="text-gray-700">পরিচয় প্রকাশন</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" />
                        <p className="text-gray-700">কওমী লাইব্রেরী</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" />
                        <p className="text-gray-700">শর্ষিণা লাইব্রেরী</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" />
                        <p className="text-gray-700">দারুত তাকবীর</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" />
                        <p className="text-gray-700">মুসলিম ভিলেজ</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" />
                        <p className="text-gray-700">ইলহাম</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" />
                        <p className="text-gray-700">দারুল ফালাহ</p>
                    </div>
                </div>
            </div>
            <div className="border border-gray-300 bg-gray-50 shadow-md">
                <div className="flex items-center justify-between border-b border-gray-300 p-3">
                    <h1 className="text-xl font-bold text-gray-700">Sort</h1>
                    <p className="text-red-500 hover:text-red-600 duration-300">Reset Sort</p>
                </div>
                <div className="p-3 space-y-3">
                    <div className="flex items-center gap-2">
                        <input type="radio" />
                        <p className="text-gray-700">Best Seller</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" />
                        <p className="text-gray-700">Ratings</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" />
                        <p className="text-gray-700">Price - Low to High</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" />
                        <p className="text-gray-700">Price - High to Low</p>
                    </div>

                </div>
            </div>
            <div className="bg-gray-100 border border-gray-300 shadow-lg">
                <div className="flex items-center gap-2 border-b border-gray-300 p-5">
                    <input type="radio" />
                    <h1 className="text-xl font-semibold text-gray-700">eBook</h1>
                </div>
                <div className="flex items-center gap-2 p-5">
                    <input type="radio" />
                    <h1 className="text-xl font-semibold  text-gray-700">In Stock</h1>
                </div>
            </div>
            <div className="border border-gray-300 bg-gray-50 shadow-md">
                <div className="flex items-center justify-between border-b border-gray-300 p-3">
                    <h1 className="text-xl font-bold text-gray-700">Filter</h1>
                    <p className="text-red-500 hover:text-red-600 duration-300">Reset Filter</p>
                </div>
                <div className="space-y-3">
                    <div className="space-y-3 border-gray-300 border-b p-3">
                        <h1 className="text-lg font-semibold text-gray-700">Authors</h1>
                        <div className="items-center justify-between border rounded-full flex w-full bg-gray-100 p-1">
                            <input type="text" className="outline-none w-full px-4 bg-transparent" placeholder="Serch Author" />
                            <button className="rounded-full"><IoIosSearch className="text-2xl text-gray-600" /></button>
                        </div>
                        <div className="px-2 space-y-2 h-40 text-sm overflow-scroll overflow-x-hidden webkit-scrollbar">
                            <div className="flex items-center gap-2 ">
                                <input type="radio" />
                                <p className="text-gray-700">আতিকুর রহমান</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">পরিচয় প্রকাশন</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">কওমী লাইব্রেরী</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">শর্ষিণা লাইব্রেরী</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">দারুত তাকবীর</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">মুসলিম ভিলেজ</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">ইলহাম</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">দারুল ফালাহ</p>
                            </div>
                        </div>
                    </div>



                    <div className="space-y-3 p-3">
                        <h1 className="text-lg font-semibold text-gray-700">By Publishers</h1>
                        <div className="items-center justify-between border rounded-full flex w-full bg-gray-100 p-1">
                            <input type="text" className="outline-none w-full px-4 bg-transparent" placeholder="Serch Publisher" />
                            <button className="rounded-full"><IoIosSearch className="text-2xl text-gray-600" /></button>
                        </div>
                        <div className="px-2 space-y-2 h-40 text-sm overflow-scroll overflow-x-hidden webkit-scrollbar">
                            <div className="flex items-center gap-2 ">
                                <input type="radio" />
                                <p className="text-gray-700">আতিকুর রহমান</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">পরিচয় প্রকাশন</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">কওমী লাইব্রেরী</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">শর্ষিণা লাইব্রেরী</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">দারুত তাকবীর</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">মুসলিম ভিলেজ</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">ইলহাম</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <p className="text-gray-700">দারুল ফালাহ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLeftSideFunc;