import { h2 } from "framer-motion/client";
import { IoClose } from "react-icons/io5";
export const Modales = ({
  activo,
  handleEstado,
  id,
  title,
  MATERNO,
  GINECOLOGIA,
}) => {
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
        className=" w-full  fixed lef-0 top-0 right-0 bottom-0 h-full modalInfo z-50  flex justify-center items-center duration-1000 origin-center"
        style={activo ? estiloActivo : estiloInactivo}
      >
        <IoClose
          className="text-white absolute right-2 top-2 text-2xl"
          onClick={handleClick}
        />
        <div className="bg-white w-[90%] h-[85%] m-auto md:w-[45%] md:h-[70%] rounded-lg flex gap-2 justify-center items-center">
          {title == "MATERNO"
            ? MATERNO[0]
                .filter((dato) => dato.id == id)
                .map((filterDato) => (
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <h2>{filterDato.title}</h2>
                    <p>{filterDato.description}</p>
                  </div>
                ))
            : GINECOLOGIA[0]
                .filter((dato) => dato.id == id)
                .map((filterDato) => (
                  <div className="flex flex-col gap-3 justify-center items-center">
                    <h2>{filterDato.title}</h2>
                    <p>{filterDato.description}</p>
                  </div>
                ))}
        </div>
      </section>
    </>
  );
};
