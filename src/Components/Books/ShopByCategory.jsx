
const ShopByCategory = () => {
    return (
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
    );
};

export default ShopByCategory;