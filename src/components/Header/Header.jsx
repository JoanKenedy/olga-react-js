import { useState } from "react";
import Logo from "../../assets/images/logo_header.png";
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
      name: "Sobre mí",
      link: "/sobre-mi",
    },
    {
      id: 3,
      name: "Servicios",
      link: "/servicios",
    },
    {
      id: 4,
      name: "Promociones",
      link: "#promociones",
    },
  ];
  return (
    <>
      <nav className="bg-white h-auto relative">
        <div className="container-nav flex flex-row justify-between w-11/12 max-w-7xl m-auto  items-center  ">
          <a className="logo-header" href="/">
            <img src={Logo} alt="" className="w-40 md:w-48" />
          </a>
          <div
            className={`${
              isOpenMenu ? "left-0" : "-left-full"
            } submenu absolute top-0  w-full h-screen z-50 duration-700 md:left-auto md:bg-transparent md:h-auto md:w-auto md:relative  `}
          >
            <ul className="flex justify-center items-center flex-col md:flex-row">
              <RiCloseLargeLine
                className="absolute z-40 text-white top-5 right-5 text-xl md:hidden"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
              />

              {MENU.map((data, index) => (
                <li
                  className="pt-14 text-white text-lg md:text-slate-900 md:pt-2 md:mx-5"
                  key={index}
                >
                  <a
                    href={data.link}
                    target={data.name === "Academy" ? "_blank" : "_parent"}
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    rel="noreferrer noopener"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <ContactButton bg="bg-rose-300 " classList={`mt-12 md:mt-0`} />
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
