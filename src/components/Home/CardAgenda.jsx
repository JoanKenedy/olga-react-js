import Doctor from "../../assets/doctor.png";
import Phone from "../../assets/ring-phone.png";
import Urgencia from "../../assets/alarma.png";

export const CardAgenda = () => {
  const Agenda = [
    {
      id: 1,
      Icon: Doctor,
      Title: "Qualified Doctors",
      text: "Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.",
    },
    {
      id: 2,
      Icon: Phone,
      Title: "24 Hours Service",
      text: "Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.",
    },
    {
      id: 3,
      Icon: Urgencia,
      Title: "Need Emergency",
      text: "Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.",
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
                className=" item-agenda flex flex-col justify-center items-center gap-2 border border-slate-300 rounded-lg p-5 md:p-12"
              >
                <img src={el.Icon} alt="" className="w-16" />
                <h2>{el.Title}</h2>
                <p className="text-justify text-sm">{el.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
};
