import { useState } from "react";
import Logo from "../../assets/logo_header.png";
import { RiCloseLargeLine } from "react-icons/ri";
import { ContactButton } from "../ContactButton";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const MENU = [
    {
      id: 1,
      name: "Inicio",
      link: "/",
    },
    {
      id: 2,
      name: "Servicios",
      link: "/servicios",
    },
    {
      id: 3,
      name: "Promociones",
      link: "#promociones",
    },
    {
      id: 4,
      name: "Sobre mí",
      link: "/sobre-mi",
    },
  ];
  return (
    <>
      <nav className="bg-white h-auto relative">
        <div className="container-nav flex flex-row justify-between w-11/12 max-w-7xl m-auto  items-center  ">
          <a className="logo-header" href="/">
            <img src={Logo} alt="" className="w-44 md:w-56" />
          </a>
          <div
            className={`${
              isOpenMenu ? "left-0" : "-left-full"
            } submenu absolute  top-0  w-full h-screen z-50 duration-700 md:left-auto md:bg-transparent md:h-auto md:w-auto md:relative  `}
          >
            <ul className="flex justify-center items-center flex-col md:flex-row">
              <RiCloseLargeLine
                className="absolute z-40 text-white top-5 right-5 text-xl md:hidden"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              />

              {MENU.map((data, index) => (
                <li
                  className="pt-14 uppercase text-white text-xl md:text-slate-900 md:pt-2 md:mx-5 md:capitalize"
                  key={index}
                >
                  <a
                    href={data.link}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    rel="noreferrer noopener"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <a
                href="https://api.whatsapp.com/send?phone=525564529359"
                target="_blank"
                className="btn-header uppercase bg-red-300 mt-12 px-4 py-2 rounded-2xl text-white text-base md:text-base md:hover:scale-95 duration-300 md:mt-0 md:capitalize"
              >
                Contacto
              </a>
            </ul>
          </div>

          <div
            className="menu-bar md:hidden"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};
