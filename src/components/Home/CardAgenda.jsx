import Doctor from "../../assets/doctor.gif";
import Phone from "../../assets/call.gif";
import Urgencia from "../../assets/alarma.gif";

export const CardAgenda = () => {
  const Agenda = [
    {
      id: 1,
      Icon: Doctor,
      Title: "Agendar cita",
      text: "El primer paso para una vida plena es agendar consulta",
    },
    {
      id: 2,
      Icon: Urgencia,
      Title: "Nuestros tratamientos",
      text: "Explora los servicios y tratamientos con nuestra especialista",
    },
    {
      id: 3,
      Icon: Phone,
      Title: "Si tienes dudas contáctanos",
      text: "No lo dudes estamos para servirte y darte la mejor atención",
    },
  ];
  return (
    <>
      <article className="w-full  ">
        <div className="container-agenda w-[90%] mx-auto my-8 md:max-w-7xl">
          <ul className="flex flex-col gap-4 md:grid md:grid-cols-3">
            {Agenda.map((el, index) => (
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
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};
