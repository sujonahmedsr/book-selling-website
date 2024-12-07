import { useDispatch } from 'react-redux';
import cod from '../../assets/icons/cod.webp'
import retns from '../../assets/icons/rok-icon-replacement.svg'
import { addToCart } from '../../RTK/Fearures/getBook/cartSlicer';
import { Link } from 'react-router-dom';
// import { IoClose } from "react-icons/io5";
// import pdfBook from '../../assets/Img/JS_Chapterwise_Notes.pdf'
import { useState } from 'react';
import RelatedProducts from './RelatedProducts';
import ReviewBooks from './ReviewBooks';
// import { IoClose } from 'react-icons/io5';

const SingleBookDetails = ({ bookDetails }) => {
    const { title, price, sell_price, img, number_of_page, author, publication, subject, edition, book, relatedProducts } = bookDetails

    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(addToCart(bookDetails))
    }

    const [pdfViewer, setPdfViewer] = useState(false)


    return (
        <>
            <div className='grid lg:grid-cols-12 md:grid-cols-1 gap-5'>
                <div className='lg:col-span-9 col-span-1'>
                    <div className="grid lg:grid-cols-12 md:grid-cols-1 gap-5 relative md:h-fit bg-white">
                        <div className='lg:col-span-3 col-span-1'>
                            <button onClick={() => setPdfViewer(!pdfViewer)} className=' text-red-500'>
                                <img alt="Look inside" src="https://wafilife-media.wafilife.com/uploads/2021/08/look-inside.png" /></button>
                            <div className="h-80 max-w-60 w-full">
                                {img && img.length > 0 && <img className="h-72 w-full mx-auto" src={img[0]} alt={title} />}
                            </div>
                        </div>
                        <div className='absolute top-2 right-2'>
                            {/* <Link to={-1}>
                                <IoClose className='text-2xl hover:text-red-500 duration-300'></IoClose>
                            </Link> */}
                        </div>
                        <div className="lg:col-span-9 col-span-1 text-base">
                            <div className="space-y-1">
                                <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
                                <h1 className="text-base text-gray-700">লেখক :
                                    <Link to={`/writerBooks/${author.slug}`} >
                                        <span className="">{author?.name}</span>
                                    </Link>
                                </h1>
                                <p className=" text-gray-700">প্রকাশনী :
                                    <Link to={`/publications/${publication.slug}`}>
                                        <span className="text-red-500 ">{publication?.name}</span>
                                    </Link>

                                </p>
                                <p className=" text-gray-700">বিষয় :
                                    <Link to={`/subjectBooks/${subject.slug}`} >
                                        <span className="text-red-500">{subject?.name}</span>
                                    </Link>
                                </p>


                                <p className="text-base text-gray-700 ">পৃষ্ঠা: <span className="font-thin">{number_of_page}</span> সংস্করণ: <span className="font-thin">{edition?.name}</span> </p>
                                <p className="text-base text-gray-700 "></p>
                                <p className='text-gray-500 font-thin text-sm pt-2'>পৃথিবীটা কী সুন্দর দ্যাখো! পাহাড়ঘেরা মাঠ। সাগরভরা ঢেউ। ফুল-ফসলে ভরা জমি। এসব দেখে বুঝি প্রশ্ন জাগে, কে বানালো এই পৃথিবী? কে সাজালো এমন পরিপাটি? <br /> <br /> সব বানিয়েছেন আল্লাহ। সবকিছু চালানও আল্লাহ। তাই তো তিনি বানিয়েছেন ফেরেশতা। আমাদের বানিয়েছেন। কেন বানিয়েছেন? তাঁর ইবাদত করবো বলে। তিনিই পাঠিয়েছেন নবি-রাসুল। দিয়েছেন আসমানি কিতাব। <br /> <br /> আমরা যখন থাকবো না পৃথিবীতে, যেতে হবে আরেক জগতে। তার নাম আখিরাত। সেখানে আমাদের বিচার হবে। ভালো কাজে মিলবে জান্নাত। আর মন্দ কাজে জাহান্নাম।</p>
                                <h1 className="text-xl font-semibold text-red-600 space-x-3">  {sell_price} tk. <del className='text-sm font-thin text-gray-400'>{price}</del> ({price - sell_price} tk save)</h1>
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
                                <Link to={'/AllCards'}>
                                    <button onClick={handleCart} className="text-lg font-semibold px-6 py-2 
                    bg-gray-700 hover:bg-red-500 text-white duration-300">Buy Now</button>
                                </Link>
                                <button onClick={handleCart} className="text-lg font-semibold  text-white px-6 py-2 bg-red-500  hover:bg-gray-700 hover:text-white duration-300">Add To Cart</button>
                            </div>
                        </div>
                    </div>


                    <ReviewBooks></ReviewBooks>
                </div>

                {/* related products  */}
                <RelatedProducts relatedProducts={relatedProducts}></RelatedProducts>






                {/* pdf viewer  */}
                <div className={`fixed inset-0 ${pdfViewer ? 'flex' : 'hidden'} items-center justify-center bg-black/20 z-10`}>

                    <div className='relative'>
                        <button className='absolute right-5 p-3 bg-white' onClick={() => setPdfViewer(!pdfViewer)}>Close</button>
                        <iframe
                            src={book}
                            // style={{ width: '100%', height: '100%' }}
                            className='max-w-3xl w-[500px] h-96'
                            title="PDF Viewer"
                        />
                    </div>
                </div>
            </div >
        </>
    );
};

export default SingleBookDetails;