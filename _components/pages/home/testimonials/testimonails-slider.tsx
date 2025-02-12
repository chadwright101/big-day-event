"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface SliderProps {
  cssClasses?: string;
  data: { client: string; testimonial: string }[];
}

const TestimonialsSlider = ({ cssClasses, data }: SliderProps) => {
  return (
    <Swiper
      autoplay={{ delay: 10000, disableOnInteraction: true }}
      speed={1000}
      modules={[Autoplay, Navigation, Pagination]}
      pagination={{
        dynamicBullets: true,
      }}
      spaceBetween={40}
      className={cssClasses}
      navigation={{
        nextEl: ".next-button",
        prevEl: ".previous-button",
      }}
      loop
      style={
        {
          "--swiper-pagination-color": "#96AB8F",
          "--swiper-pagination-bullet-inactive-color": "#96AB8F",
          "--swiper-pagination-bullet-inactive-opacity": "0.8",
          "--swiper-pagination-bullet-size": "10px",
        } as React.CSSProperties
      }
    >
      {data.map(({ client, testimonial }, index) => (
        <SwiperSlide key={index} className="space-y-5">
          <p>{testimonial}</p>
          <p className="text-subheading text-left">— {client}</p>
        </SwiperSlide>
      ))}
      <button
        className="hidden desktop:grid next-button absolute -bottom-[7px] z-10 left-5 cursor-pointer place-items-center rounded-[12px] bg-white/[90%] w-10 h-10 hover:opacity-70 ease-in-out duration-300"
        aria-label="Show previous image"
      >
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.49257 17.4925L0 8.99989L8.49257 0.507324L10 2.01476L3.01486 8.99989L10 15.985L8.49257 17.4925Z"
            fill="#96AB8F"
          />
        </svg>
      </button>
      <button
        className="hidden desktop:grid previous-button absolute -bottom-[7px] z-10 right-5 cursor-pointer place-items-center rounded-[12px] bg-white/[90%] w-10 h-10 hover:opacity-70 ease-in-out duration-300"
        aria-label="Show next image"
      >
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.85669 0.356684L9.5 8L1.85669 15.6433L0.499999 14.2866L6.78662 8L0.5 1.71337L1.85669 0.356684Z"
            fill="#96AB8F"
          />
        </svg>
      </button>
    </Swiper>
  );
};

export default TestimonialsSlider;
