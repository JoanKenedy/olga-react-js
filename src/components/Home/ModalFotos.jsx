import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { IoClose } from "react-icons/io5";
import Img1 from "../../assets/ultrasonidos/1-trimestre/16.jpg";
import Img2 from "../../assets/ultrasonidos/1-trimestre/4.jpg";
import Segundo1 from "../../assets/ultrasonidos/2-trimestre/17.jpeg";
import Segundo2 from "../../assets/ultrasonidos/2-trimestre/16.jpeg";
import Tercer1 from "../../assets/ultrasonidos/3-trimestre/3.jpg";
import Tercer2 from "../../assets/ultrasonidos/3-trimestre/7.jpg";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

export const ModalFotos = ({ abrirModal, handleEstadoModal }) => {
  const E1 = (
    <ul className="list-disc text-sm px-4 md:text-base">
      <li>
        Ultrasonido transvaginal o abdominal para confirmar el embarazo y
        verificar el crecimiento fetal.
      </li>
      <li>
        Evaluación del desarrollo embrionario y detección de posibles anomalías.
      </li>
      <li>Determinación de la edad gestacional y fecha probable de parto.</li>
    </ul>
  );

  const E2 = (
    <ul className="list-disc text-sm px-4 md:text-base">
      <li>
        Ultrasonido morfológico detallado para evaluar el crecimiento y
        desarrollo fetal.
      </li>
      <li>Evaluación de los órganos y estructuras fetales.</li>
      <li>Detección de posibles anomalías cromosómicas y congénitas</li>
      <li>Determinación del sexo del bebé.</li>
    </ul>
  );

  const E3 = (
    <ul className="list-disc text-sm px-4 md:text-base">
      <li>
        Ultrasonido de crecimiento fetal para monitorear el desarrollo y
        crecimiento del bebé.
      </li>
      <li>Evaluación de la posición fetal y preparación para el parto</li>
    </ul>
  );

  const InfoUltrasonidos = [
    {
      imgSrc: Img1,
      img2: Img2,
      title:
        "1er Trimestre (Semanas 11-14) Ultrasonido transvaginal o abdominal",
      Info: E1,
    },
    {
      imgSrc: Segundo1,
      img2: Segundo2,
      title: "2do Trimestre (Semanas 18-24)",
      Info: E2,
    },
    {
      imgSrc: Tercer1,
      img2: Tercer2,
      title: "3er Trimestre (Semanas 28 en adelante)",
      Info: E3,
    },
  ];
  const handleClick2 = () => {
    handleEstadoModal(false);
  };
  const estiloActivo = {
    scale: "1",
  };

  const estiloInactivo = {
    scale: "0",
  };
  return (
    <>
      <div
        className="section-modal w-full  fixed lef-0 top-0 right-0 bottom-0 h-full  z-50  flex justify-center items-center duration-1000 origin-center"
        style={abrirModal ? estiloActivo : estiloInactivo}
      >
        <IoClose
          className="text-white absolute right-2 top-2 text-2xl md:text-white"
          onClick={handleClick2}
        />
        <div className="container-modal bg-white w-[95%] h-[85%] rounded-xl md:w-[50%] md:h-[80%] flex flex-col justify-center items-center">
          <div className="container-ultrasonidos w-[100%]">
            <h2 className="color-text font-semibold text-center text-xl md:text-2xl">
              Ultrasonidos especializados
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
              {InfoUltrasonidos.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="  mt-2 mb-5 cursor-pointer flex justify-center gap-4 items-center flex-col px-10  relative rounded-md md:mt-0 md:px-5 "
                >
                  <h2 className="color-text font-semibold text-center text-base md:text-2xl">
                    {item.title}
                  </h2>
                  <div className="flex ">
                    <img
                      src={item.imgSrc}
                      alt=""
                      className="max-w-[170px] m-auto md:max-w-[230px]"
                    />
                    <img
                      src={item.img2}
                      alt=""
                      className="max-w-[170px] m-auto md:max-w-[230px]"
                    />
                  </div>

                  {item.Info}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
