import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Back from "../../assets/bg-principal.png";
import BackCel from "../../assets/back-cel.png";

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
            Bienvenidos a Medicina Materno Fetal Dra. Olga Castillo
          </h1>
          <h2 className="color-text text-lg font-bold phrase md:text-6xl md:mb-4 ">
            Cuidamos de ti, cuidamos de tu bebé.
          </h2>
          <p className="text-inicio color-text text-xs text-left md:mb-4 md:leading-7 ">
            Ofrezco servicios de medicina materno fetal y ginecología de alta
            calidad, comprometidos con tu salud y bienestar.
          </p>
          <Link
            to="/servicios"
            className="btn-header w-[150px]  text-white rounded-2xl text-sm px-3 py-2 inline-block my-3 md:w-[180px] text-center md:py-3 md:text-lg md:hover:scale-95 duration-75"
          >
            Servicios
          </Link>
        </div>
        <div className="item-hero-inicio hidden md:block"></div>
      </div>
    </section>
  );
};
