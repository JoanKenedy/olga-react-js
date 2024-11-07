import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../../assets/ultrasonidos/1.jpg";
import Img2 from "../../assets/ultrasonidos/2.jpg";
import Img3 from "../../assets/ultrasonidos/3.jpg";
import Img4 from "../../assets/ultrasonidos/4.jpg";
import Img5 from "../../assets/ultrasonidos/5.jpg";
import Img6 from "../../assets/ultrasonidos/6.jpg";
import Img7 from "../../assets/ultrasonidos/1.jpg";
import Img8 from "../../assets/ultrasonidos/2.jpg";
import Img9 from "../../assets/ultrasonidos/3.jpg";
import Img10 from "../../assets/ultrasonidos/4.jpg";
import Img11 from "../../assets/ultrasonidos/5.jpg";
import Img12 from "../../assets/ultrasonidos/6.jpg";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
export const SliderFotos = () => {
  const dataFotos = [
    {
      id: 1,
      image: Img1,
    },
    {
      id: 2,
      image: Img2,
    },
    {
      id: 3,
      image: Img3,
    },
    {
      id: 4,
      image: Img4,
    },
    {
      id: 5,
      image: Img5,
    },
    {
      id: 6,
      image: Img6,
    },
    {
      id: 7,
      image: Img7,
    },
    {
      id: 8,
      image: Img8,
    },
    {
      id: 9,
      image: Img9,
    },
    {
      id: 10,
      image: Img10,
    },
    {
      id: 11,
      image: Img11,
    },
    {
      id: 12,
      image: Img12,
    },
  ];
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        678: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="h-auto w-full md:max-w-6xl md:mt-4"
    >
      {dataFotos.map((item, i) => (
        <SwiperSlide
          key={i}
          className="my-5 cursor-pointer px-2  relative bg-slate-50  rounded-md md:px-5 "
        >
          <img src={item.image} alt="" className="max-w-[100%] " />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
