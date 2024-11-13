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
import { Modales } from "./Modales";
export const ServicesAll = () => {
  const [openDrow, setIsOpenDrow] = useState(false);
  const [openDrow2, setIsOpenDrow2] = useState(false);
  const [activo, setActivo] = useState(false);
  const [id, setId] = useState(" ");
  const [title, setTitle] = useState("");
  const handleActivo = (id, title) => {
    setActivo(true);
    setId(id);
    setTitle(title);
  };
  const handleEstado = (nuevoEstado) => {
    setActivo(nuevoEstado);
  };

  const descripcion = (
    <div>
      <h2 className="font-semibold text-black ">
        Servicio de Ultrasonidos por Trimestre y Perfil Biofísico
      </h2>
      <p className="text-xs md:text-sm">
        Nuestro centro ofrece una gama completa de servicios de ultrasonidos
        especializados en cada trimestre del embarazo, así como perfil
        biofísico, para garantizar un seguimiento exhaustivo y seguro del
        desarrollo fetal.
      </p>
      <h3 className="font-semibold text-black ">
        1er Trimestre (Semanas 1-12)
      </h3>
      <ul className="list-disc pl-5 text-xs md:text-sm">
        <li>
          Ultrasonido transvaginal o abdominal para confirmar el embarazo y
          verificar el crecimiento fetal.
        </li>
        <li>
          Evaluación del desarrollo embrionario y detección de posibles
          anomalías.
        </li>
        <li>Determinación de la edad gestacional y fecha probable de parto.</li>
      </ul>
      <h3 className="font-semibold text-black ">
        2do Trimestre (Semanas 13-26)
      </h3>
      <ul className="list-disc pl-5 text-xs md:text-sm">
        <li>
          Ultrasonido morfológico detallado para evaluar el crecimiento y
          desarrollo fetal.
        </li>
        <li>Evaluación de los órganos y estructuras fetales.</li>
        <li>Detección de posibles anomalías cromosómicas y congénitas.</li>
        <li>Determinación del sexo del bebé.</li>
      </ul>

      <h3 className="font-semibold text-black ">
        3er Trimestre (Semanas 27-40)
      </h3>
      <ul className="list-disc pl-5 text-xs md:text-sm">
        <li>
          Ultrasonido de crecimiento fetal para monitorear el desarrollo y
          crecimiento del bebé.
        </li>
        <li>Evaluación de la posición fetal y preparación para el parto.</li>
      </ul>

      <h3 className="font-semibold text-black ">Perfil Biofísico</h3>
      <p className="text-xs md:text-sm">
        Evaluación del bienestar fetal a través de 5 parámetros: 1. Movimiento
        fetal 2. Tono fetal 3. Respiración fetal 4. Movimiento cardíaco fetal 5.
        Liquido amniótico
      </p>
    </div>
  );
  const estudiosEspecializados = (
    <div>
      <p className="text-xs md:text-sm">
        Nuestro centro ofrece una gama completa de estudios especializados,
        estos te ayudan a evaluar la salud de la madre y el feto durante el
        embarazo
      </p>
      <h3 className="font-semibold text-black ">Duo test</h3>
      <ul className="list-disc pl-5 text-xs md:text-sm">
        <li>Se realiza entre las 10-14 semanas</li>
        <li>Evalúa riesgo de síndrome de Down, Edwards y Patau</li>
        <li>Combina ultrasonido y análisis de sangre materna</li>
      </ul>
      <h3 className="font-semibold text-black ">DNA Fetal</h3>
      <ul className="list-disc pl-5 text-xs md:text-sm">
        <li>Se hace después de 10 semanas.</li>
        <li>Analiza ADN fetal en sangre materna</li>
        <li>Evalúa riesgo de síndrome de Down, Edwards y Patau</li>
      </ul>

      <h3 className="font-semibold text-black ">
        Biopsia de Vellosidades Coriales
      </h3>
      <ul className="list-disc pl-5 text-xs md:text-sm">
        <li>Entre 10-12 semanas</li>
        <li>Extrae tejido placentario</li>
        <li>Evalúa anomalías cromosómicas y enfermedades genéticas</li>
      </ul>

      <h3 className="font-semibold text-black "> Amniocentesis</h3>
      <ul className="list-disc pl-5 text-xs md:text-sm">
        <li>Después de 15 semanas</li>
        <li>Extrae líquido amniótico</li>
        <li>
          Evalúa anomalías cromosómicas, enfermedades genéticas y desarrollo
          fetal.
        </li>
      </ul>
    </div>
  );

  const MATERNO = [
    {
      id: 0,
      title: "Embarazo de alto riesgo",
      Icon: Embarazo,
      description:
        "El embarazo es un proceso natural y emocionante para muchas mujeres, pero en algunos casos, puede convertirse en una experiencia complicada y peligrosa tanto para la madre como para el bebé. Un embarazo de alto riesgo se refiere a aquellos casos en los que existen factores que aumentan la probabilidad de complicaciones durante el embarazo, el parto o después del nacimiento.",
    },
    {
      id: 1,
      title: "Control prenatal",
      Icon: Control,
      description:
        "El control prenatal es fundamental para garantizar un embarazo saludable y sin complicaciones. Su objetivo principal es vigilar el crecimiento del feto y detectar cualquier señal de riesgo para la madre o el bebé. ",
    },
    {
      id: 2,
      title: "Ultrasonidos",
      Icon: Ultrasonido1,
      description: descripcion,
    },

    {
      id: 6,
      title: "Estudios especializados",
      Icon: DuoTest,
      description: estudiosEspecializados,
    },

    {
      id: 10,
      title: "Parto/ Cesárea",
      Icon: Parto,
      description:
        "El parto y la cesárea son las dos formas principales de dar a luz. La elección entre una y otra depende de varios factores, incluyendo la salud de la madre y el bebé, la posición del feto y las preferencias personales.",
    },
  ];
  const GINECOLOGIA = [
    {
      id: 0,
      title: "Check up",
      Icon: Lista,
      description:
        "El check-up ginecológico es un examen médico rutinario que se realiza para evaluar la salud reproductiva y general de las mujeres. Este examen es fundamental para: *Prevenir enfermedades ginecológicas: *Detectar problemas de salud temprano, *Proporcionar educación y consejos sobre salud reproductiva, *Mantener una buena salud general",
    },
    {
      id: 1,
      title: "Consulta Ginecológica",
      Icon: Consulta,
      description:
        "Una consulta ginecológica es un encuentro médico entre una mujer y su ginecólogo, donde se abordan temas relacionados con la salud reproductiva y general. Este espacio es fundamental para: *Evaluar la salud reproductiva: *Prevenir enfermedades ginecológicas, *Detectar problemas de salud temprano, *Proporcionar educación y consejos sobre salud reproductiva.",
    },
    {
      id: 2,
      title: "Papanicolaou",
      Icon: Papanicolau,
      description:
        "La prueba de Papanicolaou (PAP) es un examen médico que detecta células anormales en el cuello uterino para prevenir y diagnosticar el cáncer cervical. Se realiza recolectando células del cuello uterino con un hisopo y analizandolas en un laboratorio. La frecuencia de la prueba varía según la edad y factores de riesgo. Las mujeres de 21 a 29 años deben realizarse la prueba cada 3 años, mientras que las de 30 a 65 años cada 3-5 años. Aquellas con factores de riesgo deben hacerlo anualmente.",
    },
    {
      id: 3,
      title: "Colposcopia",
      Icon: Colposcopia,
      description:
        "La colposcopia es un examen médico que utiliza un instrumento llamado colposcopio para evaluar la salud del cuello uterino (cervix) y detectar posibles lesiones o anomalías. Este examen se realiza después de un resultado anormal en la prueba de Papanicolaou (PAP) o si se sospecha cáncer cervical.",
    },
    {
      id: 4,
      title: "Vacuna contra el VPH",
      Icon: Vacuna,
      description:
        "La vacuna VPH es una vacuna que protege contra el virus del papiloma humano (VPH), que es la causa principal del cáncer cervical, así como de otros cánceres y lesiones precancerosas. La vacuna VPH es una herramienta importante para prevenir el cáncer cervical y otros cánceres relacionados con el VPH. Es importante seguir las recomendaciones de vacunación y consultar con un médico o profesional de la salud para obtener más información. ",
    },
  ];
  return (
    <>
      <section
        className="w-full  flex flex-col justify-center px-4 items-center  mt-0 mb-8  gap-4 md:mb-8 md:mt-4"
        id="servicios"
      >
        <div className="w-full md:max-w-7xl grid gap-2  md:bg-gray-100 md:p-12">
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
          <article className="flex flex-col gap-2 md:grid md:grid-cols-1 md:mt-4">
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
                  openDrow ? "efecto2 " : " "
                } item-title-services respuesta2 `}
              >
                <ul className="grid grid-cols-2 md:grid-cols-3  place-items-center w-full md:p-3 md:gap-2 ">
                  {MATERNO.map((serv, i) => (
                    <li
                      key={i}
                      onClick={(e) => handleActivo(e.target.id, e.target.title)}
                      id={serv.id}
                      title="MATERNO"
                      className="item-agenda flex flex-col justify-center items-center p-4 md:h-[150px] md:w-full  md:border-2 md: border-slate-200 bg-white md:rounded-lg md:hover:scale-95 md:duration-150 md:gap-3"
                    >
                      <img
                        src={serv.Icon}
                        className="w-[50px] md:w-[60px]"
                        id={serv.id}
                        title="MATERNO"
                      />
                      <h3
                        className="text-xs text-center md:text-sm "
                        id={serv.id}
                        title="MATERNO"
                      >
                        {serv.title}
                      </h3>
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
                  openDrow2 ? "efecto2" : "respuesta2"
                } item-title-services `}
              >
                <ul className=" grid grid-cols-2 place-items-center w-full md:grid-cols-3 md:p-3 md:gap-2">
                  {GINECOLOGIA.map((serv, i) => (
                    <li
                      key={i}
                      onClick={(e) => handleActivo(e.target.id, e.target.title)}
                      id={serv.id}
                      title="GINECOLOGIA"
                      className="item-agenda flex flex-col justify-center items-center p-4 md:h-[150px] md:w-full md:border-2 md:border-slate-200 bg-white md:rounded-lg md:hover:scale-95 md:duration-150 md:gap-2"
                    >
                      <img
                        src={serv.Icon}
                        alt=""
                        className="w-[50px] md:w-[55px]"
                        id={serv.id}
                        title="GINECOLOGIA"
                      />
                      <h3
                        className="text-xs text-center md:text-sm"
                        id={serv.id}
                        title="GINECOLOGIA"
                      >
                        {serv.title}
                      </h3>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
          <Modales
            activo={activo}
            handleEstado={handleEstado}
            id={id}
            title={title}
            MATERNO={[MATERNO]}
            GINECOLOGIA={[GINECOLOGIA]}
          />
        </div>
      </section>
    </>
  );
};
