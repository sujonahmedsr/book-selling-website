
const PriceHistory = () => {
    return (
        <div className="border border-gray-300 p-5 rounded space-y-3 bg-white sticky top-24">
            <h1 className="text-xl font-semibold text-gray-700">Checkout Summary</h1>
            <hr className="my-4" />
            <div className="mb-2 flex items-center justify-between space-y-5">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700">120 tk.</p>
                </div>
                <hr className="my-4" />
                <div className="flex items-center justify-between">
                    <p className="text-gray-700">Shipping</p>
                    <p className="text-gray-700">53 tk.</p>
                </div>
                <hr className="my-4" />
                <div className="flex items-center justify-between">
                    <p className="text-gray-700">Total</p>
                    <div className="">
                        <p className="mb-1 text-gray-700">173 tk.</p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold  text-gray-700">Total Payable Amount</p>
                    <div className="">
                        <p className="mb-1 text-lg font-semibold  text-gray-700">173 tk.</p>
                    </div>
                </div>
        </div>
    );
};

export default PriceHistory;