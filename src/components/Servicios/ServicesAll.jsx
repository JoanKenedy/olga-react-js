import Materno from "../../assets/mother.gif";
import Gine from "../../assets/uterus.gif";
import Embarazo from "../../assets/embarazo-riesgo.png";
import Control from "../../assets/control-prenatal.png";
import Ultrasonido1 from "../../assets/ultrasonido-1.png";
import Ultrasonido2 from "../../assets/ultrasonido-2.png";
import Ultrasonido3 from "../../assets/ultrasonido-3.png";
import Ultrasonido4 from "../../assets/4d.png";
import DuoTest from "../../assets/duo-test.png";
import DnaTest from "../../assets/dna-test.png";
import Biopsia from "../../assets/biopsia.png";
import Embarazo2 from "../../assets/embarazo.png";
import Perfil from "../../assets/feto.png";
import Parto from "../../assets/nacimiento.png";
import Lista from "../../assets/lista.png";
import Consulta from "../../assets/consulta.png";
import Papanicolau from "../../assets/papanicolau.png";
import Colposcopia from "../../assets/colposcopio.png";
import Vacuna from "../../assets/vacuna.png";
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";
export const ServicesAll = () => {
  const [openDrow, setIsOpenDrow] = useState(false);
  const [openDrow2, setIsOpenDrow2] = useState(false);
  const MATERNO = [
    {
      id: 0,
      title: "Embarazo de alto riesgo",
      Icon: Embarazo,
      description:
        "Creamos materiales atractivos que conecten con tus pacientes.",
    },
    {
      id: 1,
      title: "Control prenatal",
      Icon: Control,
      description:
        "Optimizamos tu contenido para atraer y retener a tus visitantes.",
    },
    {
      id: 2,
      title: "Ultrasonido de primer trimestre",
      Icon: Ultrasonido1,
      description:
        "Videos impactantes para promocionar tus servicios dentales.",
    },
    {
      id: 3,
      title: "Ultrasonido de segundo trimestre",
      Icon: Ultrasonido2,
      description:
        "Maximizamos el alcance y la efectividad de tus campañas publicitarias.",
    },
    {
      id: 4,
      title: "Ultrasonido de tercer trimestre",
      Icon: Ultrasonido3,
      description:
        "Diseñamos sitios web profesionales y fáciles de usar para tu clínica.",
    },
    {
      id: 5,
      title: "Ultrasonido 3D y 4D",
      Icon: Ultrasonido4,
      description:
        "Mejora tu visibilidad online y atrae más pacientes con un perfil optimizado.",
    },
    {
      id: 6,
      title: "Duo Test",
      Icon: DuoTest,
      description:
        "Mejora tu visibilidad online y atrae más pacientes con un perfil optimizado.",
    },
    {
      id: 7,
      title: "DNA fetal",
      Icon: DnaTest,
      description:
        "Mejora tu visibilidad online y atrae más pacientes con un perfil optimizado.",
    },
    {
      id: 8,
      title: "Biopsia de vellosidades coriales",
      Icon: Biopsia,
      description:
        "Mejora tu visibilidad online y atrae más pacientes con un perfil optimizado.",
    },
    {
      id: 9,
      title: "Amniocentesis",
      Icon: Embarazo2,
      description:
        "Mejora tu visibilidad online y atrae más pacientes con un perfil optimizado.",
    },
    {
      id: 10,
      title: "Parto/ Cesárea",
      Icon: Parto,
      description:
        "Mejora tu visibilidad online y atrae más pacientes con un perfil optimizado.",
    },
    {
      id: 11,
      title: "Perfil biofísico",
      Icon: Perfil,
      description:
        "Mejora tu visibilidad online y atrae más pacientes con un perfil optimizado.",
    },
  ];
  const GINECOLOGIA = [
    {
      id: 0,
      title: "Check up",
      Icon: Lista,
      description:
        "Creamos materiales atractivos que conecten con tus pacientes.",
    },
    {
      id: 1,
      title: "Consulta Ginecológica",
      Icon: Consulta,
      description:
        "Optimizamos tu contenido para atraer y retener a tus visitantes.",
    },
    {
      id: 2,
      title: "Papanicolaou",
      Icon: Papanicolau,
      description:
        "Videos impactantes para promocionar tus servicios dentales.",
    },
    {
      id: 3,
      title: "Colposcopia",
      Icon: Colposcopia,
      description:
        "Maximizamos el alcance y la efectividad de tus campañas publicitarias.",
    },
    {
      id: 4,
      title: "Vacuna contra el VPH",
      Icon: Vacuna,
      description:
        "Diseñamos sitios web profesionales y fáciles de usar para tu clínica.",
    },
  ];
  return (
    <>
      <section
        className="w-full  flex flex-col justify-center px-4 items-center  mt-0 mb-8  gap-4 md:mb-8 md:mt-4"
        id="servicios"
      >
        <div className="w-full md:max-w-7xl grid gap-2  md:bg-gray-100 md:p-8">
          <article>
            <h2 className="text-2xl md:text-center mb-2 font-semibold md:text-5xl ">
              Todos nuestros Servicios y Especialidades
            </h2>
            <p className="text-sm md:text-base md:text-center">
              Ofrezco servicios de alta calidad, basados en la última tecnología
              y la experiencia más avanzda. Confíe en mi para su cuidado.
            </p>
            <span className="text-xs md:hidden">
              Da click para ver mis servicios
            </span>
          </article>
          <article className="flex flex-col gap-2 md:grid md:grid-cols-2 md:mt-4">
            <div className="services-item w-full">
              <div
                className="item-title border-2 border-slate-200 bg-white rounded-xl flex  justify-around items-center py-3"
                onClick={() => setIsOpenDrow(!openDrow)}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={Materno}
                    alt=""
                    className="w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
                  />
                  <h2>Materno Fetal</h2>
                </div>

                <FiPlusCircle className="text-xl" />
              </div>
              <div
                className={`${
                  openDrow ? "block" : "hidden"
                } item-title-services md:block `}
              >
                <ul className="grid grid-cols-2 md:grid-cols-3  place-items-center w-full md:p-3 md:gap-2 ">
                  {MATERNO.map((serv, i) => (
                    <li
                      key={i}
                      className="item-agenda flex flex-col justify-center items-center p-4 md:h-[150px] md:w-full  md:border-2 md: border-slate-200 bg-white md:rounded-lg md:hover:scale-95 md:duration-150"
                    >
                      <img src={serv.Icon} alt="" className="w-[50px]" />
                      <h3 className="text-xs text-center">{serv.title}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="services-item">
              <div
                className="item-title border-2 border-slate-200 rounded-xl flex bg-white justify-around items-center py-3 "
                onClick={() => setIsOpenDrow2(!openDrow2)}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={Gine}
                    alt=""
                    className="w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
                  />
                  <h2>Ginecología</h2>
                </div>

                <FiPlusCircle className="text-xl" />
              </div>
              <div
                className={`${
                  openDrow2 ? "block" : "hidden"
                } item-title-services md:block `}
              >
                <ul className=" grid grid-cols-2 place-items-center w-full md:grid-cols-3 md:p-3 md:gap-2">
                  {GINECOLOGIA.map((serv, i) => (
                    <li
                      key={i}
                      className="item-agenda flex flex-col justify-center items-center p-4 md:h-[150px] md:w-full md:border-2 md:border-slate-200 bg-white md:rounded-lg md:hover:scale-95 md:duration-150"
                    >
                      <img src={serv.Icon} alt="" className="w-[50px]" />
                      <h3 className="text-xs text-center">{serv.title}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
