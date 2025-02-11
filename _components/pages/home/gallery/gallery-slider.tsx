"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface SliderProps {
  cssClasses?: string;
  data: string[];
  desktop?: boolean;
  priority?: boolean;
}

const GallerySlider = ({ cssClasses, data, desktop }: SliderProps) => {
  if (desktop) {
    return (
      <Swiper
        autoplay={{ delay: 5000 }}
        speed={1000}
        effect="fade"
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        className={cssClasses}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".previous-button",
        }}
        loop
        style={
          {
            "--swiper-pagination-color": "#FFFFFF",
            "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
            "--swiper-pagination-bullet-inactive-opacity": "0.8",
            "--swiper-pagination-bullet-size": "10px",
          } as React.CSSProperties
        }
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide}
              alt={`Big Day Event - Image ${index + 1}`}
              className="rounded-none w-full h-full object-cover"
              fill
            />
          </SwiperSlide>
        ))}
        <button
          className="next-button absolute top-[49%] z-10 left-[60px] cursor-pointer grid place-items-center rounded-[12px] bg-white/[90%] w-10 h-10 hover:bg-white ease-in-out duration-300"
          aria-label="Show previous image"
        >
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-ml-0.5"
          >
            <path
              d="M10.1125 20.5L0.112549 10.5L10.1125 0.5L11.8875 2.275L3.66255 10.5L11.8875 18.725L10.1125 20.5Z"
              fill="#D38672"
            />
          </svg>
        </button>
        <button
          className="previous-button absolute top-[49%] z-10 right-[60px] cursor-pointer grid place-items-center rounded-[12px] bg-white/[90%] w-10 h-10 hover:bg-white ease-in-out duration-300"
          aria-label="Show next image"
        >
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-mr-0.5"
          >
            <path
              d="M1.88751 0.499999L11.8875 10.5L1.88751 20.5L0.112512 18.725L8.33751 10.5L0.112513 2.275L1.88751 0.499999Z"
              fill="#D38672"
            />
          </svg>
        </button>
      </Swiper>
    );
  } else {
    return (
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        spaceBetween={12}
        speed={1500}
        modules={[Autoplay, Pagination]}
        className={cssClasses}
        pagination={{
          dynamicBullets: true,
        }}
        loop
        style={
          {
            "--swiper-pagination-color": "#FFFFFF",
            "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
            "--swiper-pagination-bullet-inactive-opacity": "0.8",
          } as React.CSSProperties
        }
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide}
              alt={`Big Day Event - Image ${index + 1}`}
              className="rounded-none w-full h-full object-cover"
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
};

export default GallerySlider;
