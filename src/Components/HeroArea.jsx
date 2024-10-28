// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const HeroArea = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        
        <SwiperSlide>
          <img src="https://img.cf.rokomari.com/banner/DESKTOP0d802618-03d6-423b-9d06-6fd14fe0cc4e.webp" alt="dummy imgage" className='min-h-64 w-full h-full bg-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.cf.rokomari.com/banner/DESKTOPfd636b27-9001-440e-908a-d4ac25a7a78e.webp" alt="dummy imgage" className='min-h-64 w-full h-full bg-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.cf.rokomari.com/banner/DESKTOPc7c1f355-1b4c-4379-95dd-52e5e44dd3c9.webp" alt="dummy imgage" className='min-h-64 w-full h-full bg-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.cf.rokomari.com/banner/DESKTOPaa4fb989-02a2-433b-8020-d3455098a5ab.webp" alt="dummy imgage" className='min-h-64 w-full h-full bg-cover'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.cf.rokomari.com/banner/DESKTOP9b3d3774-3694-4cf0-9643-d02948db186d.webp" alt="dummy imgage" className='min-h-64 w-full h-full bg-cover'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroArea;