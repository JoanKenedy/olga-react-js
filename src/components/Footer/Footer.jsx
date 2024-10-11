import Logo from "../../assets/logo_header.png";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

export const Footer = () => {
  const Company = [
    {
      id: 1,
      name: "Inicio",
      link: "#inicio",
    },
    {
      id: 2,
      name: "Sobre mí",
      link: "#sobremi",
    },
    {
      id: 3,
      name: "Servicios",
      link: "#servicios",
    },
    {
      id: 4,
      name: "Promociones",
      link: "#promociones",
    },
    {
      id: 5,
      name: "Contacto",
      link: "https://api.whatsapp.com/send?phone=525575791467",
    },
  ];
  const Features = [
    {
      id: 1,
      name: "Embarazo de alto riesgo",
      link: "#servicios",
    },
    {
      id: 2,
      name: "Control prenatal ",
      link: "#servicios",
    },
    {
      id: 3,
      name: "Ultrasonido de primer trimestre",
      link: "#servicios",
    },
    {
      id: 4,
      name: "Ultrasonido de segundo trimestre",
      link: "#servicios",
    },
    {
      id: 5,
      name: "Parto/ Cesárea",
      link: "#servicios",
    },
  ];
  const Helps = [
    {
      id: 1,
      name: "Ultrasonido de tercer trimestre",
      link: "https://api.whatsapp.com/send?phone=525575791467",
    },
    {
      id: 2,
      name: "Check up",
      link: "#servicios",
    },
    {
      id: 3,
      name: "Consulta Ginecológica",
      link: "#servicios",
    },
    {
      id: 4,
      name: "Papanicolaou",
      link: "#servicios",
    },
    {
      id: 5,
      name: "Vacuna contra el VPH",
      link: "#servicios",
    },
  ];
  return (
    <>
      <footer className="footer w-full  h-auto relative m-auto ">
        <div className="container-footer max-w-7xl  flex flex-col justify-start gap-3 w-11/12  m-auto pt-40 md:grid md:grid-cols-4  md:pb-3 md:pt-60 ">
          <div className="item-footer flex flex-col gap-4 ">
            <img src={Logo} alt="" className="max-w-52" />
            <p className="color-text text-sm">
              Nuestro compromiso es brindarte una atención excepcional, con
              calidez y profesionalismo.
            </p>
            <div className="link-redes-foote flex gap-3">
              <a href="">
                <FaFacebook className="text-xl color-text" />
              </a>
              <a href="">
                <RiInstagramFill className="text-xl color-text" />
              </a>
              <a href="">
                <FaTiktok className="text-xl color-text" />
              </a>
            </div>
          </div>
          <div className="item-footer md:flex md:flex-col md:items-center">
            <h4 className="font-semibold color-text text-sm md:text-base">
              Menú
            </h4>
            <ul className="menu-footer flex justify-start flex-col md:gap-3">
              {Company.map((com, index) => (
                <li className="text-sm color-text font-light" key={index}>
                  <a href={com.link}>{com.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="item-footer md:flex md:flex-col md:items-center">
            <h4 className="font-semibold color-text text-sm md:text-base">
              Servicios
            </h4>
            <ul className="menu-footer flex justify-start flex-col md:gap-3">
              {Features.map((feature, index) => (
                <li className="text-sm color-text font-light" key={index}>
                  <a href={feature.link}>{feature.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="item-footer ml-0 md:flex md:flex-col md:items-center">
            <h4 className="font-semibold color-text text-sm md:text-base">
              Más servicios
            </h4>
            <ul className="menu-footer flex justify-start flex-col md:gap-3">
              {Helps.map((help, index) => (
                <li className="text-sm color-text font-light" key={index}>
                  <a href={help.link}>{help.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hr-div color-btn max-w-7xl m-auto my-2"></div>
        <div
          className="item md:flex md:flex-row justify-between max-w-7xl
       m-auto p-2 "
        >
          <p className="text-xs color-text font-light">
            @2024 Olga Castillo. Todos los derechos reservados
          </p>
          <div className="terminos flex gap-5">
            <a href="" className="text-xs color-text font-light">
              Política de privacidad
            </a>
            <a href="" className="text-xs color-text font-light">
              Terminos y Condiciones
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
