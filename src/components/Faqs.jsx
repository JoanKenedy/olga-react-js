import { useEffect, useState } from "react";
import FAQS from "../assets/img-faqs.jpg";
import { IoIosArrowDown } from "react-icons/io";

export const Faqs = () => {
  const [selected, setSelected] = useState(null);

  const toogle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const PREGUNTAS = [
    {
      id: 1,
      pregunta: "¿Qué pruebas me realizarán durante el embarazo?",
      respuesta:
        "Para controlar que tu embarazo se está desarrollando sin ninguna complicación, te realizarán 3 ecografías (semana 12, 20 y 34 aproximadamente) y una analítica de sangre y orina cada trimestre. Si todos los resultados son correctos, en principio, no sería necesario realizar más pruebas. Lo importante es que le comuniques a tu médico o ginecólogo que estás embarazada lo antes posible.",
    },
    {
      id: 2,
      pregunta: "¿Tengo que tomar vitaminas en el embarazo?",
      respuesta:
        "Además de una dieta sana variada y equilibrada, todas las embarazadas necesitan un suplemento de ácido fólico y de yodo durante toda la gestación. Lo ideal es comenzar tres meses antes del embarazo y continuar después del parto dependiendo del tipo de lactancia que hayas elegido para tu bebé.",
    },
    {
      id: 3,
      pregunta: "¿Cuánto kilos puedo aumentar en el embarazo?",
      respuesta:
        "En general se recomienda aumentar como máximo entre 9 y 12 kilos durante todo el embarazo para prevenir enfermedades y complicaciones en el parto. Esta recomendación se puede ampliar o disminuir dependiendo de tu peso al inicio del embarazo. Tu matrona o tu ginecólogo te lo indicarán en la primera consulta.",
    },
    {
      id: 4,
      pregunta: "¿Puedo tener relaciones sexuales durante el embarazo?",
      respuesta:
        "Si tu embarazo se está desarrollando con normalidad no es necesario que interrumpas las relaciones sexuales en ningún momento, siempre y cuando no te resulten molestas. Debes evitarlas cuando tu ginecólogo te lo indique expresamente, bien por amenaza de aborto, amenaza de parto prematuro, placenta previa, sospecha de rotura de bolsa o cualquier otro motivo que considere oportuno. Salvo contraindicación, las relaciones sexuales durante el embarazo son beneficiosas para ti y para el bebé. ",
    },
  ];

  return (
    <>
      <section className="w-full">
        <div className="container-section-faqs px-4 md:max-w-7xl md:m-auto">
          <h2 className=" font-semibold text-2xl md:text-4xl">
            Preguntas Frecuentes
          </h2>
          <div className="faqs w-full md:grid md:grid-cols-2 gap-2  py-4">
            <div className="item-faqs hidden md:block  ">
              <img
                src={FAQS}
                alt=""
                className="max-w-[100%] md:h-[400px] md:w-[550px] object-cover"
              />
            </div>
            <div className="item-faqs w-full  md:flex md:items-center md:justify-center ">
              <div className="w-full flex flex-col gap-4 md:gap-4 ">
                {PREGUNTAS.map((item, i) => (
                  <div className="w-full">
                    <div
                      className="flex w-full justify-between items-center text-sm md:text-base cursor-pointer item-history p-3 rounded-lg"
                      onClick={() => toogle(i)}
                    >
                      <p>{item.pregunta}</p>
                      <IoIosArrowDown
                        className={`${
                          selected == i ? "rotate-180" : "rotate-0"
                        } duration-500 text-lg `}
                      />
                    </div>
                    <p
                      className={`${
                        selected == i
                          ? "efecto "
                          : "respuesta  "
                      } w-full text-sm md:text-sm  mt-2  text-justify px-2`}
                    >
                      {item.respuesta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
