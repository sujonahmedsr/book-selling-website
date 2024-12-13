import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart, removeWishList } from "../RTK/Fearures/getBook/cartSlicer";
const WishListCards = ({ item }) => {
    const {id, slug, img, title, sell_price, author } = item
    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(addToCart(item))
    }
    const deleteCartItem = () => {
            dispatch(removeWishList(id))
        }
    return (
        <div className="rounded-lg relative">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md flex border gap-10">
                <img
                    src={img}
                    alt={title}
                    className="h-60 max-w-40 w-full"
                />
                <div className="sm:ml-4 flex flex-col w-full space-y-3">
                    {/* product details */}
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                            {title}
                        </h2>
                        <h2 className="text-base text-gray-600">
                            {author?.name}
                        </h2>
                    </div>
                    <p className='text-gray-500 font-thin text-sm pt-2 select-none'>পৃথিবীটা কী সুন্দর দ্যাখো! পাহাড়ঘেরা মাঠ। সাগরভরা ঢেউ। ফুল-ফসলে ভরা জমি। এসব দেখে বুঝি প্রশ্ন জাগে, কে বানালো এই পৃথিবী? কে সাজালো এমন পরিপাটি? <Link className="text-primary" to={`/booksDetails/${slug}`}>See More...</Link></p>
                    <h1 className="text-lg font-semibold text-primary space-x-3">  {sell_price} tk.</h1>
                    <div className="space-x-5 flex items-center gap-2">
                        <Link to={'/AllCards'}>
                            <button
                                onClick={handleCart} 
                                className="text-sm font-semibold px-4 py-2
                                    bg-gray-700 hover:bg-primary text-white duration-300">Buy Now</button>
                        </Link>
                        <button
                            onClick={handleCart} 
                            className="text-sm font-semibold  text-white px-4 py-2 bg-primary  hover:bg-gray-700 hover:text-white duration-300">Add To Cart</button>
                    </div>
                    <div className="absolute top-0 right-5 text-2xl">
                        <button onClick={deleteCartItem} data-tooltip-id="my-tooltip" data-tooltip-content="Delete from wishlist">
                            <MdDelete />
                            </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WishListCards;