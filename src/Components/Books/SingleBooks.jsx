import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../RTK/Fearures/getBook/cartSlicer";

const SingleBooks = ({ book }) => {
    const {id, title, price,  image } = book

    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(addToCart(book))
    }

    return (
        <div className=" bg-white border rounded-lg shadow border-gray-300 hover:border-gray-400 p-3 space-y-3 duration-200">
            <Link to={`/booksDetails/${id}`}>
                <img className="h-40 mx-auto" src={image} alt="product image" />
            </Link>
            <div className="text-center">
                <h5 className=" text-gray-700 ">{title.slice(0, 20)}</h5>
                <h2 className="text-lg text-gray-700 font-semibold">TK. {price}</h2>
            </div>
            <div>
                <button onClick={handleCart} className={`py-1 w-full bg-gray-600 hover:bg-red-500 text-white font-semibold mx-auto block mt-1 duration-300`}>Add To Cart</button>
                <Link to={`/booksDetails/${id}`}>
                    <button className={`py-1 w-full bg-red-500 hover:bg-gray-600 text-white font-semibold mx-auto block mt-1 duration-300`}>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleBooks;