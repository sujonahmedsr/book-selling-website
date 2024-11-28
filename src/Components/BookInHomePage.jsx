import { useBooksProductsApiQuery } from "../RTK/Fearures/getBook/getBookApi";
import SingleBooks from "./Books/SingleBooks";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

const BookInHomePage = () => {
    const limit = 7
    const { data: allBooks, isLoading, isError, error } = useBooksProductsApiQuery({limit})

    
    let content = null

    if (isLoading && !isError) {
        content = <div role="status" className="max-w-full border-gray-100 rounded shadow animate-pulse grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        <div className=" h-64 bg-gray-200 rounded">
        </div>
        <div className=" h-64 bg-gray-200 rounded">
        </div>
        <div className=" h-64 bg-gray-200 rounded">
        </div>
        <div className=" h-64 bg-gray-200 rounded">
        </div>
      </div>
    }
    if (!isLoading && isError) {
        content = <div className="text-red-600">{error?.status}</div>
    }
    if (!isLoading && !isError && allBooks?.data?.length === 0) {
        content = <div className="text-lg font-semibold text-gray-700">No Products Found...</div>
    }
    if (!isLoading && !isError && allBooks?.data?.length > 0) {
        content = allBooks?.data?.map(book =>
            <SwiperSlide key={book.id}>
                <SingleBooks book={book}></SingleBooks>
            </SwiperSlide>
        )
    }
    
    return (
        <div className="p-3">
            <Swiper
                spaceBetween={30}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper mt-10">
                {content}
            </Swiper>
        </div>
    );
};

export default BookInHomePage;