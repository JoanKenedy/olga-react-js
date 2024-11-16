import { useState } from "react";
import Img1 from "../../assets/ultrasonidos/1-trimestre/1.jpg";
import Img2 from "../../assets/ultrasonidos/1-trimestre/2.jpg";
import Img3 from "../../assets/ultrasonidos/1-trimestre/3.jpg";
import Img4 from "../../assets/ultrasonidos/1-trimestre/4.jpg";
import Img5 from "../../assets/ultrasonidos/1-trimestre/5.jpg";
import Img6 from "../../assets/ultrasonidos/1-trimestre/6.jpg";
import { ModalFotos } from "./ModalFotos";

export const Ultrasonidos = () => {
  const [abrirModal, setAbrirModal] = useState(false);
  const handleModal = () => {
    setAbrirModal(true);
  };
  const handleEstadoModal = (nuevoEstado) => {
    setAbrirModal(nuevoEstado);
  };

  return (
    <>
      <div className="ultrasonidos mt-10 container-benefits w-full md:max-w-7xl md:grid md:grid-cols-2 px-4 py-8 rounded-lg">
        <div className="item-ultrasonido">
          <section className="section-slider">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
            <img src={Img4} alt="" className="hidden md:block" />
            <img src={Img5} alt="" className="hidden md:block" />
            <img src={Img6} alt="" className="hidden md:block" />
          </section>
          <button
            className="btn-ultrasonidos block my-3 text-white px-5 py-1 rounded-lg md:m-auto"
            onClick={handleModal}
          >
            Ver más
          </button>
        </div>
        <div className="item-ultrasonido flex flex-col gap-2 justify-center mt-4 md:ml-8 md:-mt-8  ">
          <h2 className="color-text font-semibold text-2xl md:text-4xl">
            Ultrasonidos especializados
          </h2>
          <h3 className="color-text font-semibold text-xl md:text-2xl">
            "Cuida tu embarazo con la mayor precisión y amor"
          </h3>
          <h6 className="font-semibold color-text">
            Ofrezco servicios de ultrasonido en todos los trimestres:
          </h6>
          <ul className="list-disc pl-4 text-sm color-text">
            <li>Ultrasonido 11-14 genético o cromosómico</li>
            <li>Ultrasonido estructural del segundo trimestre</li>
            <li>Ultrasonido de crecimiento y flujometría</li>
            <li>Ultrasonido 3D y 4D</li>
          </ul>
          <h6 className="font-semibold color-text">
            Beneficios de mis servicios:
          </h6>
          <ul className="list-disc pl-4 text-sm color-text">
            <li>Atención personalizada y cuidadosa</li>
            <li>Equipamiento de última tecnología </li>
            <li>Resultados precisos y confiables</li>
            <li>Asesoramiento y orientación en todo momento</li>
          </ul>
        </div>
      </div>
      <ModalFotos
        abrirModal={abrirModal}
        handleEstadoModal={handleEstadoModal}
      />
    </>
  );
};
