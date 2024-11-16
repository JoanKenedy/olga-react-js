import About from "../../assets/foto-olga.png";
import Latidos from "../../assets/latidos.png";
import { BsChatHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const AboutIndex = () => {
  return (
    <>
      <div className="about w-full">
        <div className="container-about w-[90%] m-auto flex flex-col gap-4 md:mt-14 md:grid md:grid-cols-2 md:max-w-7xl md:gap-10 ">
          <div className="item-about flex justify-center items-center">
            <img src={About} alt="" className="rounded-lg w-100 h-[90%]" />
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
            <ul className=" list-disc flex flex-col gap-1 pl-4 text-sm  md:text-base ">
              <li className="bold">
                Médico Cirujano: Universidad Autónoma del Estado de Hidalgo{" "}
              </li>
              <li className=" bold">
                Especialidad Médica en Ginecología y Obstetricia. Hospital
                General de México "Dr. Eduardo Licéaga", Universidad Nacional
                Autónoma de México
              </li>
              <li className=" bold">
                Subespecialidad en Medicina Materno Fetal . Hospital General de
                México "Dr. Eduardo Licéaga", Universidad Nacional Autónoma de
                México
              </li>
            </ul>
            <Link
              to="/sobre-mi"
              className="btn-header w-[150px]  text-white rounded-2xl text-sm px-3 py-2 inline-block my-3 md:w-[180px] text-center md:py-2 md:text-lg md:hover:scale-95 duration-75"
            >
              Saber más
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
