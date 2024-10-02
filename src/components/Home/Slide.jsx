import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { dataTestimonials } from "./Testimonials.data";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

export function Slide() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        678: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="h-full w-full md:max-w-6xl md:mt-4"
    >
      {dataTestimonials.map(({ id, image }) => (
        <SwiperSlide
          key={id}
          className="my-3 cursor-pointer md:px-4 relative rounded-md"
        >
          <div className="flex">
            <div className="flex items-center gap-1">
              <img src={image} alt="" className="w-full h-full" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
