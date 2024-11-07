import { IoClose } from "react-icons/io5";
import { SliderFotos } from "./SliderFotos";

export const ModalFotos = ({ abrirModal, handleEstadoModal }) => {
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
          className="text-white absolute right-2 top-2 text-2xl"
          onClick={handleClick2}
        />
        <div className="container-modal bg-white w-[95%] h-[60%] rounded-xl md:w-[70%] md:h-[80%] flex flex-col justify-center items-center">
          <h2 className="color-text font-semibold text-2xl md:text-4xl text-center mt-3">
            Muestra de mi trabajo
          </h2>
          <SliderFotos/>
        </div>
      </div>
    </>
  );
};
