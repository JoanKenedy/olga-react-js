import { useEffect, useState } from "react";
import Back from "../../assets/bg-principal.jpg";
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
        <div className="item-hero-inicio ">
          <h1 className="text-white text-base md:uppercase md:text-xl md:mb-4 ">
            Welcome our Medical Care Center
          </h1>
          <h2 className="text-white text-lg font-bold md:text-6xl md:mb-4 ">
            Take Care of Your Healt
          </h2>
          <p className="text-inicio text-white text-xs text-left md:mb-4 md:leading-7 ">
            We're always available for our Patients with emergent problems. You
            can easily reach us 24/7 via the phone number below:
          </p>
          <a
            href=""
            className="bg-white rounded-2xl text-sm text-black px-3 py-2 inline-block my-3 md:w-[180px] text-center md:py-3 md:text-lg md:hover:scale-95 duration-75"
          >
            Our Services
          </a>
        </div>
        <div className="item-hero-inicio hidden md:block"></div>
      </div>
    </section>
  );
};
