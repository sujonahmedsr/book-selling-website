import { useSelector } from "react-redux";

const PriceHistory = () => {
    const { selectedItems, totalPrice } = useSelector(state => state.cart)
    const shipping = 53;
    return (
        <div className="border border-gray-300 p-5 rounded space-y-3 bg-white sticky top-24">
            <h1 className="text-xl font-semibold text-gray-700">Checkout Summary</h1>
            <hr className="my-4" />
            <h1>Total Item: {selectedItems}</h1>
            <div className="mb-2 flex items-center justify-between space-y-5">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">TK. {totalPrice.toFixed(2)}</p>
            </div>
            <hr className="my-4" />
            {
                selectedItems &&
                <div className="flex items-center justify-between">
                    <p className="text-gray-700">Shipping</p>
                    <p className="text-gray-700">TK. {shipping}</p>
                </div>
            }
            <hr className="my-4" />

            <hr className="my-4" />
            <div className="flex items-center justify-between">
                <p className="text-lg font-semibold  text-gray-700">Total Payable Amount</p>
                <div className="">
                    <p className="mb-1 text-lg font-semibold  text-gray-700">TK. {(totalPrice + shipping).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default PriceHistory;