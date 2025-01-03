import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner0 from "../assets/banner0.jpg";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div data-aos="fade-down" data-aos-duration="1000">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-[300px] md:h-[500px]"
            style={{
              backgroundImage:
                `url(${banner0})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold">Nature is Calling Escape Now</h1>
                <p className="mb-5">
                Step into the Wilderness, Embrace Adventure, and Rediscover the Beauty of Our Planet
                </p>
                <button className="btn  btn-accent">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner1}
            alt=""
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner2}
            alt=""
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner3}
            alt=""
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner4}
            alt=""
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner5}
            alt=""
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;

{
  /* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide><img src={banner1} alt="" className="w-full lg:max-h-[500px] object-cover" /></SwiperSlide>
          <SwiperSlide><img src={banner2} alt="" className="w-full lg:max-h-[500px] object-cover" /></SwiperSlide>
          <SwiperSlide><img src={banner3} alt="" className="w-full lg:max-h-[500px] object-cover" /></SwiperSlide>
          <SwiperSlide><img src={banner4} alt="" className="w-full lg:max-h-[500px] object-cover" /></SwiperSlide>
          <SwiperSlide><img src={banner5} alt="" className="w-full lg:max-h-[500px] object-cover" /></SwiperSlide>
        </Swiper> */
}
