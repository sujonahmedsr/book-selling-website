import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useGetPublicationsQuery } from "../RTK/Fearures/getBook/getBookApi";

const Publication = () => {
    const { data: allPublications, isLoading, isError, error } = useGetPublicationsQuery()

    let content;

    if (isLoading && !isError) content = <div role="status" className="container mx-auto border-gray-100 rounded shadow animate-pulse grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
        <div className=" w-20 mx-auto h-20 rounded-full  bg-gray-100">
        </div>
        <div className=" w-20 mx-auto h-20 rounded-full  bg-gray-100">
        </div>
        <div className=" w-20 mx-auto h-20 rounded-full  bg-gray-100">
        </div>
        <div className=" w-20 mx-auto h-20 rounded-full  bg-gray-100">
        </div>
        <div className=" w-20 mx-auto h-20 rounded-full  bg-gray-100">
        </div>
    </div>;

    if (!isLoading && isError) content = <p className="text-red-600">Error: {error}</p>;

    if (!isLoading && isError && !allPublications?.data?.length === 0) content = <div className="text-red-600">No Data Found...</div>;

    if (!isLoading && !isError && allPublications?.data?.length > 0) {
        content = allPublications?.data?.map(d => <SwiperSlide key={d.id} className="flex items-center flex-col gap-4 text-center">
            <Link to={`/publications/${d.slug}`}>
                <img src={d.img} alt="dummy imgage" className='w-20 mx-auto h-20 rounded-full ' />
                <h1 className="pt-5">{d.name}</h1>
            </Link>
        </SwiperSlide>
        )
    }

    return (
        <div className="container mx-auto mt-24">
            <div className="flex items-center justify-between border border-gray-200 shadow-lg p-5">
                <h1 className="text-lg font-semibold text-red-600">জনপ্রিয় লেখক</h1>
                <Link to={'/writers'}>
                    <button className="px-4 py-2 border border-gray-100 bg-red-600 text-white hover:bg-gray-700 duration-300">সকল লেখক</button>
                </Link>
            </div>

            <>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    loop={true}
                    className="mySwiper mt-10 mb-20">
                    {
                        content
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Publication;