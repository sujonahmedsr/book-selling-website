// import { useDispatch } from "react-redux";
// import { addToCart } from "../../RTK/Fearures/getBook/cartSlicer";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { wistList } from "../../RTK/Fearures/getBook/cartSlicer";

const SingleBooks = ({ book }) => {
    const {  title, price, sell_price, img, author, slug } = book


    const dispatch = useDispatch()
    const handleWishList = () => {
        dispatch(wistList(book))
    }

    return (
        <div className=" bg-white rounded-lg shadow p-3 space-y-3 duration-300 group relative cursor-pointer">
            <Link to={`/booksDetails/${slug}`}>
                <img className="h-40 mx-auto" src={img} alt="product image" />
            </Link>
            <div className="space-y-1">
                <h5 className=" text-gray-700 font-semibold">{title.slice(0, 20)}</h5>
                <h4 className=" text-gray-400 ">{author.name}</h4>
                <h2 className="text-lg text-primary font-semibold"> <del className="text-sm text-gray-400">{price}</del> {sell_price} TK.</h2>
            </div>
            <Link to={`/booksDetails/${slug}`} className="absolute bottom-0 flex flex-col gap-2 items-center justify-center left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-300 bg-white/70 ">
                <div className={`py-1 bg-primary hover:bg-gray-600 text-white font-semibold mx-auto block mt-1 duration-300 px-4 text-center`}>
                    <Link to={`/modal/${slug}`}>
                        <button>Quick View</button>
                    </Link>
                </div>
                <div className={`py-1 text-primary text-2xl mt-1 duration-300 px-4 text-center`}>
                    <Link>
                        <button onClick={handleWishList} data-tooltip-id="my-tooltip" data-tooltip-content="Add wishlist">
                            <FaRegHeart />
                        </button>
                    </Link>
                </div>
            </Link>
        </div>
    );
};

export default SingleBooks;