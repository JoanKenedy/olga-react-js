import "swiper/css";
import "swiper/css/pagination";
import { GiRoundStar } from "react-icons/gi";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

export function Slide({ dataTestimonials, clienteTestimonials }) {
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
      className="h-full w-full md:max-w-6xl md:mt-4 "
    >
      {dataTestimonials
        ? dataTestimonials.map(({ id, image }) => (
            <SwiperSlide
              key={id}
              id="promociones"
              className="my-3 cursor-pointer md:px-4 relative rounded-md  "
            >
              <div className="flex shadow-xl shadow-gray-400">
                <div className="flex items-center gap-1 ">
                  <img src={image} alt="" className="w-full h-full " />
                </div>
              </div>
            </SwiperSlide>
          ))
        : clienteTestimonials.map(
            ({ id, name, work, testimonial, Inicial }) => (
              <SwiperSlide
                key={id}
                className="my-5 cursor-pointer md:px-10 relativep-3 bg-white py-5 px-3 rounded-md"
              >
                <FaQuoteLeft className="absolute right-7 top-0  text-3xl md:text-4xl text-slate-300 " />

                <div className="calificaciones flex">
                  <GiRoundStar className="text-yellow-500 text-xl" />{" "}
                  <GiRoundStar className="text-yellow-500 text-xl" />{" "}
                  <GiRoundStar className="text-yellow-500 text-xl" />{" "}
                  <GiRoundStar className="text-yellow-500 text-xl" />
                  <GiRoundStar className="text-yellow-500 text-xl" />
                </div>

                <div className="my-5 text-sm text-justify">{testimonial}</div>
                <div className="flex">
                  <div className="flex items-center gap-4">
                    <div className="circle-img w-[30px] h-[30px] rounded-full bg-red-200 flex justify-center items-center text-white">
                      {Inicial}
                    </div>
                    <div>
                      <h4 className="text-center text-sm font-semibold">
                        {name}
                      </h4>
                      <p className="text-primaryDark text-xs">{work}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
    </Swiper>
  );
}
