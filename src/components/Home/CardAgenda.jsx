import Doctor from "../../assets/doctor.gif";
import Phone from "../../assets/call.gif";
import Urgencia from "../../assets/alarma.gif";
import { Link } from "react-router-dom";

export const CardAgenda = () => {
  const Agenda = [
    {
      id: 1,
      Icon: Doctor,
      Title: "Agendar cita",
      text: "El primer paso para una vida plena es agendar consulta",
      link: "https://api.whatsapp.com/send?phone=525564529359",
    },
    {
      id: 2,
      Icon: Urgencia,
      Title: "Nuestros tratamientos",
      text: "Explora los servicios y tratamientos con nuestra especialista",
      link: "/servicios",
    },
    {
      id: 3,
      Icon: Phone,
      Title: "Si tienes dudas contáctanos",
      text: "No lo dudes estamos para servirte y darte la mejor atención",
      link: "https://api.whatsapp.com/send?phone=525564529359",
    },
  ];
  return (
    <>
      <article className="w-full  ">
        <div className="container-agenda w-[90%] mx-auto my-8 md:max-w-7xl">
          <h2 className="color-text font-semibold text-2xl md:text-4xl my-4">
            Agenda tu cita
          </h2>
          <ul className="flex flex-col gap-4 md:grid md:grid-cols-3">
            {Agenda.map((el, index) => (
              <Link to={el.link}>
                <li
                  key={index}
                  className=" item-agenda flex flex-col justify-center items-center gap-2 border border-slate-300 rounded-lg p-10 md:p-12"
                >
                  <div className="box-icon h-[90px] w-[90px] flex justify-center items-center ">
                    <img src={el.Icon} alt="" className="w-20" />
                  </div>

                  <h2>{el.Title}</h2>
                  <p className="text-center text-sm">{el.text}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};
