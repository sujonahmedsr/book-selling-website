import { useDispatch } from "react-redux";
import { addToCart } from "../../RTK/Fearures/getBook/cartSlicer";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const SingleModalBook = ({ bookDetails }) => {
    const {slug, title, sell_price, img, author, category } = bookDetails

    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(addToCart(bookDetails))
    }
    return (
        <div className='max-w-4xl mx-auto '>
            <div className="flex md:flex-row flex-col p-5 items-center relative md:h-fit bg-white gap-5">
                <div className='col-span-2'>
                    {/* <button onClick={() => setPdfViewer(!pdfViewer)} className=' text-primary'>
                                <img alt="Look inside" src="https://wafilife-media.wafilife.com/uploads/2021/08/look-inside.png" /></button> */}
                    <div className="h-80 min-w-60 w-full">
                        {img && img.length > 0 && <img className="h-72 w-full mx-auto" src={img[0]} alt={title} />}
                    </div>
                </div>
                <div className='absolute top-2 right-2'>
                    <Link to={-1}>
                        <IoClose className='text-2xl hover:text-primary duration-300'></IoClose>
                    </Link>
                </div>
                <div className="text-base col-span-4">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
                        <h1 className="text-base text-gray-700">লেখক :
                            <Link to={`/writerBooks/${author.slug}`} >
                                <span className="text-primary">{author?.name}</span>
                            </Link>
                        </h1>
                        {/* <p className=" text-gray-700">প্রকাশনী :
                                    <Link to={`/publications/${publication.slug}`}>
                                        <span className="text-primary ">{publication?.name}</span>
                                    </Link>
                                </p>
                                <p className=" text-gray-700">বিষয় :
                                    <Link to={`/subjectBooks/${subject.slug}`} >
                                        <span className="text-primary">{subject?.name}</span>
                                    </Link>
                                </p> */}


                        {/* <p className="text-base text-gray-700 ">পৃষ্ঠা: <span className="font-thin">{number_of_page}</span> সংস্করণ: <span className="font-thin">{edition?.name}</span> </p> */}
                        <p className="text-base text-gray-700 "></p>
                        <p className='text-gray-500 font-thin text-sm pt-2 select-none'>পৃথিবীটা কী সুন্দর দ্যাখো! পাহাড়ঘেরা মাঠ। সাগরভরা ঢেউ। ফুল-ফসলে ভরা জমি। এসব দেখে বুঝি প্রশ্ন জাগে, কে বানালো এই পৃথিবী? কে সাজালো এমন পরিপাটি? <Link className="text-primary" to={`/booksDetails/${slug}`}>See More...</Link></p>
                        <h1 className="text-xl font-semibold text-primary space-x-3">  {sell_price} tk.</h1>
                    </div>

                    <div className="mt-5 space-x-5">
                        <Link to={'/AllCards'}>
                            <button onClick={handleCart} className="text-lg font-semibold px-6 py-2 
                    bg-gray-700 hover:bg-primary text-white duration-300">Buy Now</button>
                        </Link>
                        <button onClick={handleCart} className="text-lg font-semibold  text-white px-6 py-2 bg-primary  hover:bg-gray-700 hover:text-white duration-300">Add To Cart</button>
                    </div>

                    <div className="text-sm font-semibold mt-10 text-gray-600">
                        <h1>Category: {category?.name}</h1>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleModalBook;