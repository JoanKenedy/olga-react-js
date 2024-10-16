import Bag from "../../assets/experiencia.png";
import Feliz from "../../assets/pacientes.png";
import Doctora from "../../assets/doctor.png";
import Hospital from "../../assets/Hospital.png";
import FondoVideo from "../../assets/video-block-img.jpg";
import BtnVideo from "../../assets/boton-de-play.png";
export const Experiencia = () => {
  return (
    <>
      <section className="bg-slate-100 w-full">
        <div className="container-experiencia w-[95%] m-auto py-8  md:grid md:grid-cols-2 md:gap-8 md:max-w-6xl md:py-14">
          <ul className="grid gap-8 md:grid-cols-2 ">
            <li className="flex items-center justify-center flex-col border border-gray-300 rounded-lg py-[30px] px-[20px] gap-2 bg-white shadow-lg">
              <div className="bg-zinc-200 w-[70px] h-[70px] rounded-full flex justify-center items-center md:w-[90px] md:h-[90px]">
                <img src={Bag} alt="" className="w-[40px] md:w-[50px] " />
              </div>
              <h2 className="font-bold text-2xl">10</h2>
              <p className="text-center font-medium text-gray-500 text-lg">
                Años de experiencia
              </p>
            </li>
            <li className="flex items-center justify-center flex-col border border-gray-300 rounded-lg py-[30px] px-[20px] gap-2 bg-white shadow-lg">
              <div className="bg-zinc-200 w-[70px] h-[70px] rounded-full flex justify-center items-center md:w-[90px] md:h-[90px]">
                <img src={Feliz} alt="" className="w-[40px] md:w-[50px] " />
              </div>
              <h2 className="font-bold text-2xl">2754</h2>
              <p className="text-center font-medium text-gray-500 text-lg">
                Pacientes felices
              </p>
            </li>
            <li className="flex items-center justify-center flex-col border border-gray-300 rounded-lg py-[30px] px-[20px] gap-2 bg-white shadow-lg">
              <div className="bg-zinc-200 w-[70px] h-[70px] rounded-full flex justify-center items-center md:w-[90px] md:h-[90px]">
                <img src={Doctora} alt="" className="w-[40px] md:w-[50px] " />
              </div>
              <h2 className="font-bold text-2xl">4.8</h2>
              <p className="text-center font-medium text-gray-500 text-lg">
                Calificación de doctora
              </p>
            </li>
            <li className="flex items-center justify-center flex-col border border-gray-300 rounded-lg py-[30px] px-[20px] gap-2 bg-white shadow-lg">
              <div className="bg-zinc-200 w-[70px] h-[70px] rounded-full flex justify-center items-center md:w-[90px] md:h-[90px]">
                <img src={Hospital} alt="" className="w-[40px] md:w-[50px] " />
              </div>
              <h2 className="font-bold text-2xl">1</h2>
              <p className="text-center font-medium text-gray-500 text-lg">
                Hospital de Primer nivel
              </p>
            </li>
          </ul>
          <article className="">
            <div
              className="container-video w-full bg-cover bg-no-repeat md:flex md:justify-center h-[280px] relative md:h-[500px]"
              style={{
                backgroundImage: `url(${FondoVideo})`,
              }}
            >
              <a
                href="https://www.youtube.com/embed/jRcfE2xxSAw?autoplay=1"
                className="video-play"
              >
                <img src={BtnVideo} alt="" className="w-[90px]" />
                <span className="st-video-animation ">
                  <span></span>
                </span>
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
