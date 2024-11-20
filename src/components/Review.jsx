import { useEffect, useState } from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { BiUserPin } from "react-icons/bi";
import ReviewCard from "./ReviewCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
      <div className="">
        <p className="text-4xl font-bold text-center">Clint Review</p>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center p-10">
            <p className="text-yellow-500 text-7xl">
              <LuBadgeCheck></LuBadgeCheck>
            </p>
            <p className="text-3xl font-bold">5+</p>
            <p>Year Experience</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-yellow-500 text-7xl">
              <BiUserPin />
            </p>
            <p className="text-3xl font-bold">150+</p>
            <p>Satisfied Customer</p>
          </div>
        </div>
      </div>

      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
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
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <ReviewCard key={review.id} review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
