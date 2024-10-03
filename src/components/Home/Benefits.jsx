import { FaUserDoctor } from "react-icons/fa6";
import { TbNurse } from "react-icons/tb";
import { FaMicrochip } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa6";
import { ContactButton } from "../ContactButton";
import Latidos from "../../assets/latidos.png";

export const Benefits = () => {
  const BENEFICIOS = [
    {
      id: 1,
      Icon: <FaUserDoctor />,
      title: "Especialista en medicina materno fetal",
      description:
        "Como doctora con especialidad en medicina materno fetal, tengo la experiencia y conocimientos necesarios para brindar atención personalizada y de alta calidad a madres y bebés.",
    },
    {
      id: 2,
      Icon: <TbNurse />,
      title: "Cuidado integral y personalizado",
      description:
        "Me enfoco en entender las necesidades únicas de cada paciente, brindando un cuidado integral que abarca tanto la salud física como emocional.",
    },
    {
      id: 3,
      Icon: <FaMicrochip />,
      title: "Tecnología avanzada y equipamiento de última generación",
      description:
        "Nuestro equipo utiliza la tecnología más avanzada para garantizar diagnósticos precisos y tratamientos efectivos",
    },
    {
      id: 4,
      Icon: <FaRegHandshake />,
      title: "Compromiso con la salud y bienestar de la madre y el bebé",
      description:
        "Mi prioridad es asegurarme de que tanto la madre como el bebé reciban la atención y cuidado que merecen, en un ambiente cálido y respetuoso",
    },
  ];
  return (
    <>
      <div className="benefits mt-14 mb-5 w-full max-w-7xl" id="beneficios">
        <div className="container-benefits w-full p-5  text-lightBlack rounded-lg flex flex-col gap-8 md:flex-row md:pt-24 md:pb-24 md:px-10">
          <div className="item-benefits flex justify-center gap-1 flex-col md:w-5/12">
            <h2 className="color-text font-semibold text-2xl md:text-3xl">
              Nuestra Excelencia en Medicina Materno Fetal: 4 Razones para
              Elegirnos
            </h2>

            <ContactButton bg="color-btn" />
          </div>
          <div className="item-benefits grid gap-2 md:w-7/12 md:grid-cols-2">
            {BENEFICIOS.map((beneficio, index) => (
              <div className="p-4 flex flex-col gap-1  group" key={index}>
                <div className="text-2xl md:text-3xl color-text">
                  {beneficio.Icon}
                </div>
                <h3 className="font-semibold text-xl color-text">
                  {beneficio.title}
                </h3>
                <p className="text-sm mt-2 color-text ">
                  {beneficio.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
