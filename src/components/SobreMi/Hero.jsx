import { useEffect, useState } from "react";
import Back from "../../assets/sobre.png";
import BackCel from "../../assets/sobre-cel.png";
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
        <div className="container-hero-inicio w-[90%] m-auto relative md:max-w-7xl md:grid md:grid-cols-2 md:h-[420px]">
          <div className="item-hero-inicio flex flex-col gap-2 ">
            <h1 className="color-text text-sm md:uppercase md:text-xl md:mb-4 ">
              Bienvenidos a Sobre mí
            </h1>
            <h2 className="color-text text-lg font-bold phrase md:text-6xl md:mb-4 ">
              Ahora conocéme un poco más
            </h2>
            <p className="text-inicio color-text text-xs text-left md:mb-4 md:leading-7 ">
              Con una pasión por brindar atención de calidad a mujeres y bebés.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=525564529359"
              target="_blank"
              className="color-btn w-[150px]  text-white rounded-2xl text-sm px-3 py-2 inline-block my-3 md:w-[180px] text-center md:py-3 md:text-lg md:hover:scale-95 duration-75"
            >
              Contacto
            </a>
          </div>
          <div className="item-hero-inicio hidden md:block"></div>
        </div>
      </section>
    </>
  );
};
