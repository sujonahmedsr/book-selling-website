// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HeroArea = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    axios.get('https://kichukkhon.arnobghosh.me/api/sliders') // Example API URL
      .then((response) => {
        setData(response.data.data); // Update state with the response data
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  // Conditional rendering
  if (loading) return <div role="status" className="max-w-full border-gray-100 rounded shadow animate-pulse">
    <div className="flex items-center justify-center h-64 bg-gray-100 rounded">

    </div>
    <div className="flex items-center">

      <div>
        <div className="h-2.5 bg-gray-100 rounded-full w-32"></div>
        <div className="w-48 h-2 bg-gray-100 rounded-full"></div>
      </div>
    </div>
  </div>;
  if (error) return <div role="status" className="max-w-full border-gray-100 rounded shadow animate-pulse">
    <div className="flex items-center justify-center h-64 bg-gray-100 rounded">
      <p className='text-red-600'>Error: {error}</p>
    </div>
    <div className="flex items-center">

      <div>
        <div className="h-2.5 bg-gray-100 rounded-full w-32"></div>
        <div className="w-48 h-2 bg-gray-100 rounded-full"></div>
      </div>
    </div>
  </div>;

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

        {
          data?.map(d => <SwiperSlide key={d.id}>
            <img src={d.img} alt="dummy imgage" className='min-h-64 w-full h-full bg-cover' />
          </SwiperSlide>)
        }
      </Swiper>
    </>
  );
};

export default HeroArea;