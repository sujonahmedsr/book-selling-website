// import { useDispatch } from "react-redux";
// import { addToCart } from "../../RTK/Fearures/getBook/cartSlicer";
import { Link } from "react-router-dom";

const SingleBooks = ({ book }) => {
    const {  title, price, sell_price, img, author, slug } = book
    

    // const dispatch = useDispatch()
    // const handleCart = () => {
    //     dispatch(addToCart(book))
    // }

    return (
        <div className=" bg-white border rounded-lg shadow border-gray-300 hover:border-gray-400 p-3 space-y-3 duration-300 group relative">
            <Link to={`/booksDetails/${slug}`}>
                <img className="h-40 mx-auto" src={img} alt="product image" />
            </Link>
            <div className="space-y-2">
                <h5 className=" text-gray-700 font-semibold">{title.slice(0, 20)}</h5>
                <h4 className=" text-gray-400 ">{author.name}</h4>
                <h2 className="text-lg text-red-600 font-semibold"> <del className="text-sm text-gray-400">{price}</del> {sell_price} TK.</h2>
            </div>
            <div className="absolute top-0 left-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                {/* <button onClick={handleCart} className={`py-1 w-full bg-gray-600 hover:bg-red-500 text-white font-semibold mx-auto block mt-1 duration-300`}>Add To Cart</button> */}
                <div>
                    <Link to={`/booksDetails/${slug}`}>
                        <button className={`py-1 w-full bg-red-500 hover:bg-gray-600 text-white font-semibold mx-auto block mt-1 duration-300 px-4`}>Quick View</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBooks;