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
    const { data: allBooks, isLoading, isError, error } = useBooksProductsApiQuery()
    let content = null

    if (isLoading && !isError) {
        content = <div className="text-lg font-semibold text-gray-700">Loading...</div>
    }
    if (!isLoading && isError) {
        content = <div className="text-red-600">{error?.status}</div>
    }
    if (!isLoading && !isError && allBooks?.length === 0) {
        content = <div className="text-lg font-semibold text-gray-700">No Products Found...</div>
    }
    if (!isLoading && !isError && allBooks?.length > 0) {
        content = allBooks.slice(0, 8).map(book =>
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
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                {content}
            </Swiper>
        </div>
    );
};

export default BookInHomePage;