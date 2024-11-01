
const ProductSort = () => {
    return (
        <div className="border border-gray-300 bg-gray-50 shadow-md">
            <div className="flex items-center justify-between border-b border-gray-300 p-3">
                <h1 className="text-xl font-bold text-gray-700">Sort</h1>
                <p className="text-red-500 hover:text-red-600 duration-300">Reset Sort</p>
            </div>
            <div className="p-3 space-y-3">
                <div className="flex items-center gap-2">
                    <label>
                        <input type="radio" />
                        <span className="text-gray-700 ml-2">Best Seller</span>
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <label>
                        <input type="radio" />
                        <span className="text-gray-700 ml-2">Ratings</span>
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <label>
                        <input type="radio" />
                        <span className="text-gray-700 ml-2">Price - Low to High</span>
                    </label>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <label>
                        <input type="radio" />
                        <span className="text-gray-700 ml-2">Price - High to Low</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ProductSort;