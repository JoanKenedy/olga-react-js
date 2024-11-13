import { ContactButton } from "../ContactButton";
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
        <div className="bg-white w-[90%] h-[92%] m-auto md:w-[55%] md:h-[90%] rounded-lg flex flex-col gap-2 justify-center items-center">
          {title == "MATERNO"
            ? MATERNO[0]
                .filter((dato) => dato.id == id)
                .map((filterDato) => (
                  <div className="flex flex-col gap-3 justify-center items-center px-5 py-3">
                    <h2 className="text-xl text-center md:text-2xl font-bold color-text ">
                      {filterDato.title}
                    </h2>
                    <p className="text-justify text-sm md:text-base">
                      {filterDato.description}
                    </p>
                  </div>
                ))
            : GINECOLOGIA[0]
                .filter((dato) => dato.id == id)
                .map((filterDato) => (
                  <div className="flex flex-col gap-3 justify-center items-center px-5 py-3">
                    <h2 className="text-xl text-center md:text-2xl font-bold color-text ">
                      {filterDato.title}
                    </h2>
                    <p className="text-justify text-sm md:text-base">
                      {filterDato.description}
                    </p>
                  </div>
                ))}
          <a
            href="https://api.whatsapp.com/send?phone=525575791467"
            target="_blank"
            className="bg-rose-300 px-4 py-2 rounded-2xl text-white text-sm md:text-base md:hover:scale-95 duration-300"
          >
            Más información
          </a>
        </div>
      </section>
    </>
  );
};
