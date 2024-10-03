import About from "../../assets/about-1.jpg";
import Latidos from "../../assets/latidos.png";
import { BsChatHeartFill } from "react-icons/bs";

export const AboutIndex = () => {
  return (
    <>
      <div className="about w-full">
        <div className="container-about w-[90%] m-auto flex flex-col gap-4 md:my-12 md:grid md:grid-cols-2 md:max-w-7xl md:gap-10 ">
          <div className="item-about">
            <img src={About} alt="" className="rounded-lg" />
          </div>
          <div className="item-about md:flex md:justify-center md:flex-col ">
            <h2 className="font-bold text-xl md:text-4xl">Sobre mi</h2>
            <img src={Latidos} alt="" className="w-12  object-cover" />
            <p className="text-sm text-slate-400 font-normal mb-3 md:text-base">
              Con una sonrisa cálida y un corazón dedicado, soy la Dra. Olga
              Castillo, una experta en medicina materno fetal y ginecología con
              más de 8 años de experiencia en cuidar la salud y bienestar de
              mujeres y bebés.
            </p>
            <ul className=" list-disc flex flex-col gap-1 pl-4 text-xs  md:text-sm ">
              <li className=" ">Mis más de 8 años de experiencia me avalan.</li>
              <li className="  ">
                Con la tecnología de punta para ofrecerte un diaganostico
                preciso.
              </li>
              <li className="  ">
                Por ultimo y mas importante, hago mi trabajo con orgullo y
                pasión y se ve reflejado en mis pacientes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
