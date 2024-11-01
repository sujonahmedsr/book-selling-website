import { useDispatch } from 'react-redux';
import cod from '../../assets/icons/cod.webp'
import retns from '../../assets/icons/rok-icon-replacement.svg'
import { addToCart } from '../../RTK/Fearures/getBook/cartSlicer';
const SingleBookDetails = ({ bookDeta }) => {
    const { title, price, description, category, image, rating } = bookDeta
    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(addToCart(bookDeta))
    }
    return (
        <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-12 md:grid-cols-1 gap-10 border shadow p-5">
                <div className="lg:col-span-4 col-span-1 h-80 p-5 border border-gray-300">
                    <img src={image} alt={title} className="h-72 mx-auto" />
                </div>
                <div className="lg:col-span-8 col-span-1 p-5 text-base">
                    <div className="space-y-3">
                        <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
                        <h1 className="text-base text-gray-700">Author: <span className="">{'Unknown'}</span></h1>
                        <p className=" text-gray-700">Category: in <span className="text-red-500 ">{category}</span></p>
                        <p className=" text-gray-700">Ratins: <span className="text-red-500">{rating?.rate}</span></p>
                        <p className="text-base text-gray-700 ">Description: <span className="font-thin">{description}</span></p>
                        <h1 className="text-lg font-bold text-gray-700">TK. {price}</h1>
                    </div>
                    <div className="flex items-center gap-10 mt-5 text-gray-700">
                        <div className='flex items-center gap-2'>
                            <img src={cod} className='w-6' alt="cod" />
                            <h1>Cash On Delivery</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={retns} alt="retns" />
                            <h1>7 Day Happy Return</h1>
                        </div>
                    </div>
                    <div className="mt-5 space-x-5">
                        <button className="text-lg font-semibold px-6 py-2 
                        bg-gray-700 hover:bg-red-500 text-white duration-300">Add To Cart</button>
                        <button onClick={handleCart} className="text-lg font-semibold  text-white px-6 py-2 bg-red-500  hover:bg-gray-700 hover:text-white duration-300">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBookDetails;