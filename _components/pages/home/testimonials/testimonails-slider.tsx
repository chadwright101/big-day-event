"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface SliderProps {
  cssClasses?: string;
  data: { client: string; testimonial: string[]; image: string }[];
}

const CHAR_LIMIT = 350;
const AUTOPLAY_DELAY = 10000;
const SLIDE_CHANGE_DELAY = 1000;
const SLIDE_SPEED = 1000;

const TestimonialsSlider = ({ cssClasses, data }: SliderProps) => {
  const [showMore, setShowMore] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const justExpanded = useRef(false);
  const router = useRouter();
  const [needsReadMoreArray, setNeedsReadMoreArray] = useState<boolean[]>([]);

  useEffect(() => {
    const initialNeedsReadMore = data.map(({ testimonial }) => {
      let charsLeft = CHAR_LIMIT;
      return testimonial.some((text) => {
        charsLeft -= text.length + 2;
        return charsLeft < 0;
      });
    });
    setNeedsReadMoreArray(initialNeedsReadMore);
  }, [data]);

  const handleSlideChange = useCallback(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current;

    if (justExpanded.current) {
      justExpanded.current = false;
      return;
    }

    const currentSlideIndex = swiper.activeIndex % data.length;

    if (showMore && needsReadMoreArray[currentSlideIndex]) {
      requestAnimationFrame(() => {
        router.push("/#testimonials");
      });
    }
    setShowScroll(false);

    setTimeout(() => {
      setShowMore(false);
    }, SLIDE_CHANGE_DELAY);
  }, [showMore, needsReadMoreArray, data.length, router]);

  const swiperStyle = useMemo(
    () =>
      ({
        "--swiper-pagination-color": "#96AB8F",
        "--swiper-pagination-bullet-inactive-color": "#96AB8F",
        "--swiper-pagination-bullet-inactive-opacity": "0.8",
        "--swiper-pagination-bullet-size": "10px",
      } as React.CSSProperties),
    []
  );

  const getDisplayedText = useCallback((testimonial: string[]) => {
    let displayedText = "";
    let charsLeft = CHAR_LIMIT;

    for (let i = 0; i < testimonial.length; i++) {
      if (testimonial[i].length + 2 <= charsLeft) {
        displayedText += testimonial[i];
        charsLeft -= testimonial[i].length;
        if (i < testimonial.length - 1) {
          displayedText += "\n\n";
          charsLeft -= 2;
        }
      } else {
        if (charsLeft > 0 && i < testimonial.length) {
          displayedText += testimonial[i].substring(0, charsLeft);
        }
        break;
      }
    }
    return displayedText;
  }, []);

  const handleReadMore = useCallback(() => {
    setShowMore(true);
    setShowScroll(true);
    justExpanded.current = true;
  }, []);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={handleSlideChange}
      autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: true }}
      speed={SLIDE_SPEED}
      modules={[Autoplay, Navigation, Pagination]}
      pagination={{
        dynamicBullets: true,
      }}
      spaceBetween={40}
      className={classNames(
        "desktop:h-[335px]",
        {
          "h-[520px] min-[380px]:h-[550px] phone:h-[550px] tablet:h-auto":
            !showMore,
          "h-auto": showMore,
        },
        cssClasses
      )}
      navigation={{
        nextEl: ".next-button",
        prevEl: ".previous-button",
      }}
      loop
      style={swiperStyle}
    >
      {data.map(({ client, testimonial, image }, index) => {
        const displayedText = getDisplayedText(testimonial);

        return (
          <SwiperSlide key={index} className="pb-10">
            <div
              className={classNames(
                "flex flex-col justify-between h-full gap-5 tablet:grid grid-cols-[2fr_1fr] desktop:flex",
                {
                  "desktop:overflow-y-scroll desktop:pr-3": showScroll,
                  "overflow-hidden": !showScroll,
                }
              )}
            >
              <div className="space-y-5">
                <p style={{ whiteSpace: "pre-line" }}>
                  {showMore && needsReadMoreArray[index]
                    ? testimonial.join("\n\n")
                    : displayedText}
                  {!showMore && needsReadMoreArray[index] && (
                    <button
                      className="text-linkBlue font-normal"
                      onClick={handleReadMore}
                    >
                      ...Read More
                    </button>
                  )}
                </p>
                <p className="text-subheading text-left">— {client}</p>
              </div>
              <div className="flex justify-center">
                <Image
                  src={image}
                  alt={`${client} testimonial - Big Day Event`}
                  width={600}
                  height={400}
                  className="object-cover aspect-[4/2.5] desktop:hidden"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
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
