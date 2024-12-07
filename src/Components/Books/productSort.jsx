
const ProductSort = ({handleFilterChange}) => {
    return (
        <div className=" bg-gray-50 shadow-md text-base">
            <div className="flex items-center justify-between border border-gray-300 p-3">
                <h1 className="text-xl font-bold">সর্ট করুন</h1>
            </div>
            <div className="p-3 space-y-3">
                <div className="flex items-center gap-2">
                    <label onChange={handleFilterChange}>
                        <input type="radio" name="sortFiltering" value={'latest'}/>
                        <span className="text-gray-700 ml-2">Latest Books</span>
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <label onChange={handleFilterChange}>
                        <input type="radio" name="sortFiltering" value={'price_low_to_high'}/>
                        <span className="text-gray-700 ml-2">Price - Low to High</span>
                    </label>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <label onChange={handleFilterChange}>
                        <input type="radio" name="sortFiltering" value={'price_high_to_low'}/>
                        <span className="text-gray-700 ml-2">Price - High to Low</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ProductSort;