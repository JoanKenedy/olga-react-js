import { p } from "framer-motion/client";
import { IoClose } from "react-icons/io5";
export const Modales = ({ activo, handleEstado, id, MATERNO }) => {
  const handleClick = () => {
    handleEstado(false);
  };

  const estiloActivo = {
    scale: "1",
  };

  const estiloInactivo = {
    scale: "0",
  };

  return (
    <>
      <section
        className=" w-full  fixed lef-0 top-0 right-0 bottom-0 h-full bg-black z-50  flex justify-center items-center duration-1000 origin-center"
        style={activo ? estiloActivo : estiloInactivo}
      >
        <IoClose
          className="text-white absolute right-2 top-2 text-2xl"
          onClick={handleClick}
        />
        <div className="bg-white w-[90%] h-[85%] m-auto">
          {MATERNO[0]
            .filter((dato) => dato.id == id)
            .map((filterDato) => (
              <p>{filterDato.description}</p>
            ))}
        </div>
      </section>
    </>
  );
};