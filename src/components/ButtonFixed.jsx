import Doctoralia from "../assets/doctoralia.png";
import Whats from "../assets/btn-whats.png";
import { useEffect, useState } from "react";

export const ButtonFixed = () => {
  const [visible, setVisible] = useState(false);

  const ButonsFixed = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", ButonsFixed);

  return (
    <>
      <section className={` ${visible ? "block" : "hidden"}`}>
        <div className="container-buttons flex flex-col gap-3 fixed bottom-2 right-1 z-40  ">
          <a
            href="https://www.doctoralia.com.mx/olga-miryam-castillo-ramirez/ginecologo/tlalpan"
            target="_blank"
            className=""
          >
            <img
              src={Doctoralia}
              alt=""
              className="w-[60px] h-[60px] md:w-[65px] md:h-[65px] md:hover:animate-bounce "
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=525564529359"
            target="_blank"
          >
            <img
              src={Whats}
              alt=""
              className="w-[60px] h-[60px] md:w-[65px] md:h-[65px] md:hover:animate-bounce"
            />
          </a>
        </div>
      </section>
    </>
  );
};
