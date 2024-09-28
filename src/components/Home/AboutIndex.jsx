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
            <h2 className="font-bold text-xl md:text-4xl">Who We Are</h2>
            <img src={Latidos} alt="" className="w-12  object-cover" />
            <p className="text-sm text-slate-400 font-normal mb-3 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum ultrices gravida. Risus commodo viverra maecenas accumsan
              facilisis.
            </p>
            <ul className="flex flex-col gap-1 text-xs md:text-sm">
              <li className=" flex items-center gap-2">
                <BsChatHeartFill /> We provide high-quality services for the
                whole family.
              </li>
              <li className=" flex items-center gap-2">
                <BsChatHeartFill /> Risus commodo viverra maecenas
              </li>
              <li className=" flex items-center gap-2">
                <BsChatHeartFill /> Your health is our top priorit
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
