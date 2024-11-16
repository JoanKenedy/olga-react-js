import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../../assets/ultrasonidos/1-trimestre/1.jpg";
import Img2 from "../../assets/ultrasonidos/1-trimestre/2.jpg";
import Img3 from "../../assets/ultrasonidos/1-trimestre/3.jpg";
import Img4 from "../../assets/ultrasonidos/1-trimestre/4.jpg";
import Img5 from "../../assets/ultrasonidos/1-trimestre/5.jpg";
import Img6 from "../../assets/ultrasonidos/1-trimestre/6.jpg";
import Img7 from "../../assets/ultrasonidos/1-trimestre/7.jpg";
import Img8 from "../../assets/ultrasonidos/1-trimestre/9.jpg";
import Img9 from "../../assets/ultrasonidos/1-trimestre/10.jpg";
import Img10 from "../../assets/ultrasonidos/1-trimestre/11.jpg";
import Img11 from "../../assets/ultrasonidos/1-trimestre/12.jpg";
import Img12 from "../../assets/ultrasonidos/1-trimestre/13.jpg";
import Img13 from "../../assets/ultrasonidos/1-trimestre/14.jpg";
import Img14 from "../../assets/ultrasonidos/1-trimestre/15.jpg";
import Img15 from "../../assets/ultrasonidos/1-trimestre/16.jpg";

import Segundo1 from "../../assets/ultrasonidos/2-trimestre/1.jpg";
import Segundo2 from "../../assets/ultrasonidos/2-trimestre/2.jpg";
import Segundo3 from "../../assets/ultrasonidos/2-trimestre/3.jpg";
import Segundo4 from "../../assets/ultrasonidos/2-trimestre/4.jpg";
import Segundo5 from "../../assets/ultrasonidos/2-trimestre/5.jpg";
import Segundo6 from "../../assets/ultrasonidos/2-trimestre/6.jpg";
import Segundo7 from "../../assets/ultrasonidos/2-trimestre/7.jpg";
import Segundo8 from "../../assets/ultrasonidos/2-trimestre/8.jpg";
import Segundo9 from "../../assets/ultrasonidos/2-trimestre/9.jpg";
import Segundo10 from "../../assets/ultrasonidos/2-trimestre/10.jpg";
import Segundo11 from "../../assets/ultrasonidos/2-trimestre/11.jpg";
import Segundo12 from "../../assets/ultrasonidos/2-trimestre/12.jpg";
import Segundo13 from "../../assets/ultrasonidos/2-trimestre/13.jpg";
import Segundo14 from "../../assets/ultrasonidos/2-trimestre/14.jpg";
import Segundo15 from "../../assets/ultrasonidos/2-trimestre/15.jpg";

import Tercer1 from "../../assets/ultrasonidos/3-trimestre/1.jpg";
import Tercer2 from "../../assets/ultrasonidos/3-trimestre/2.jpg";
import Tercer3 from "../../assets/ultrasonidos/3-trimestre/3.jpg";
import Tercer4 from "../../assets/ultrasonidos/3-trimestre/4.jpg";
import Tercer5 from "../../assets/ultrasonidos/3-trimestre/5.jpg";
import Tercer6 from "../../assets/ultrasonidos/3-trimestre/6.jpg";
import Tercer7 from "../../assets/ultrasonidos/3-trimestre/7.jpg";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
export const SliderFotos = () => {
  const PrimerTrimestre = [
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
    {
      id: 13,
      image: Img13,
    },
    {
      id: 14,
      image: Img14,
    },
    {
      id: 15,
      image: Img15,
    },
  ];
  const SegundoTrimestre = [
    {
      id: 1,
      image: Segundo1,
    },
    {
      id: 2,
      image: Segundo2,
    },
    {
      id: 3,
      image: Segundo3,
    },
    {
      id: 4,
      image: Segundo4,
    },
    {
      id: 5,
      image: Segundo5,
    },
    {
      id: 6,
      image: Segundo6,
    },
    {
      id: 7,
      image: Segundo7,
    },
    {
      id: 8,
      image: Segundo8,
    },
    {
      id: 9,
      image: Segundo9,
    },
    {
      id: 10,
      image: Segundo10,
    },
    {
      id: 11,
      image: Segundo11,
    },
    {
      id: 12,
      image: Segundo12,
    },
    {
      id: 13,
      image: Segundo13,
    },
    {
      id: 14,
      image: Segundo14,
    },
    {
      id: 15,
      image: Segundo15,
    },
  ];
  const TercerTrimestre = [
    {
      id: 1,
      image: Tercer1,
    },
    {
      id: 2,
      image: Tercer2,
    },
    {
      id: 3,
      image: Tercer3,
    },
    {
      id: 4,
      image: Tercer4,
    },
    {
      id: 5,
      image: Tercer5,
    },
    {
      id: 6,
      image: Tercer6,
    },
    {
      id: 7,
      image: Tercer7,
    },
  ];
  return (
    <>
      <div className="container-slider-ultrasonidos">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <h2 className="color-text font-semibold text-center text-xl md:text-2xl">
              Primer Trimestre
            </h2>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="h-auto w-full md:max-w-6xl md:mt-2"
            >
              {PrimerTrimestre.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="  mt-2 mb-5 cursor-pointer px-2  relative bg-slate-50  rounded-md md:mt-0 md:px-5 "
                >
                  <img src={item.image} alt="" className="max-w-[100%] " />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <h2 className="color-text font-semibold text-center text-xl md:text-2xl">
              Segundo Trimestre
            </h2>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="h-auto w-full md:max-w-6xl md:mt-2"
            >
              {SegundoTrimestre.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="mt-2 mb-4 cursor-pointer px-2  relative bg-slate-50  rounded-md md:mt-0 md:px-5 "
                >
                  <img src={item.image} alt="" className="max-w-[100%] " />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden md:block">
            <h2 className="color-text font-semibold text-center text-xl md:text-2xl">
              Tercer Trimestre
            </h2>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="h-auto w-full md:max-w-6xl md:mt-2"
            >
              {TercerTrimestre.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="mt-2 mb-5 cursor-pointer px-2  relative bg-slate-50  rounded-md md:px-5 md:mt-0 "
                >
                  <img src={item.image} alt="" className="max-w-[100%] " />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
