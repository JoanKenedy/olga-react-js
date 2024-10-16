import { useEffect, useState } from "react";
import Back from "../../assets/servicios.png";
import BackCel from "../../assets/servicios-cel.png";
export const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const mobile = 768;

  const fotosChanges = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", fotosChanges);

    return () => {
      window.removeEventListener("resize", fotosChanges);
    };
  });
  return (
    <>
      <section
        className="hero-inicio w-full bg-cover bg-no-repeat md:flex md:justify-center "
        style={
          width < mobile
            ? { backgroundImage: `url(${BackCel})` }
            : { backgroundImage: `url(${Back})` }
        }
        id="inicio"
      >
        <div className="container-hero-inicio w-[96%] m-auto relative grid grid-cols-2 md:max-w-7xl md:grid md:grid-cols-2 md:h-[420px]">
          <div className=" item-hero-inicio block "></div>
          <div className="item-hero-inicio flex flex-col ml-32 md:ml-36   gap-2">
            <h1 className=" color-text text-sm md:uppercase md:text-xl md:mb-4 ">
              Bienvenidos a las sección Servicos
            </h1>
            <h2 className="color-text text-lg font-bold  md:text-6xl md:mb-4 ">
              Ahora conocé todos mis Servicios
            </h2>
            <p className="inline-block color-text text-xs  md:mb-4 md:leading-7 md:text-base ">
              Con una extensa gama de servicios , que tengo para tí y tu bebé.
            </p>
            <a
              href=""
              className="color-btn w-[120px]  text-white rounded-2xl text-sm px-3 py-2 inline-block my-3 md:w-[180px] text-center md:py-3 md:text-lg md:hover:scale-95 duration-75"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
