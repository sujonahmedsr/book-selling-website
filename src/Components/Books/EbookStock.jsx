
const EbookStock = () => {
    return (
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
    );
};

export default EbookStock;