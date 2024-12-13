import { useDispatch } from "react-redux";
import { removeCart, updateCartQuantity } from "../../RTK/Fearures/getBook/cartSlicer";

const Card = ({ item }) => {
    const dispatch = useDispatch()
    const { id, title, img, sell_price, quantity } = item
    const deleteCartItem = () => {
        dispatch(removeCart(id))
    }

    const handleCartQuantity = (type, id) => {
        dispatch(updateCartQuantity({ type, id }))
    }
    return (
        <div className="rounded-lg">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md flex border gap-10">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-40 rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 flex flex-col w-full justify-between">
                    {/* product details */}
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                            {title}
                        </h2>
                        <p className="mt-1 text-sm text-gray-700">Price: TK. {(sell_price * quantity).toFixed(2)}</p>
                    </div>

                    {/* add & minus quantity */}
                    <div className="mt-4 md:flex justify-between space-y-6 space-x-6 ">
                        <div className="flex items-center border-gray-100 space-x-3">
                            <span onClick={() => handleCartQuantity('decrement', id)} className="cursor-pointer rounded-l bg-gray-300 py-1 px-3.5 duration-100 active:bg-primary">
                                {" "}
                                -{" "}
                            </span>
                            <span>{quantity}</span>
                            <span onClick={() => handleCartQuantity('increment', id)} className="cursor-pointer rounded-r bg-gray-300 py-1 px-3 duration-100 active:bg-primary">

                                +
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button onClick={deleteCartItem} className="lws-removeFromCart flex items-center gap-2 px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-gray-700 duration-300 text-base" >
                                Remove From Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;