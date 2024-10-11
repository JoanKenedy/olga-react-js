import Bag from "../../assets/experiencia.png";
import Feliz from "../../assets/pacientes.png";
import Doctora from "../../assets/doctora.png";
import Hospital from "../../assets/Hospital.png";
export const Experiencia = () => {
  return (
    <>
      <section className="bg-slate-100">
        <div className="container-experiencia">
          <ul>
            <li>
              <img src={Bag} alt="" />
            </li>
            <li>
              <img src={Feliz} alt="" />
            </li>
            <li>
              <img src={Doctora} alt="" />
            </li>
            <li>
              <img src={Hospital} alt="" />
            </li>
          </ul>
          <article></article>
        </div>
      </section>
    </>
  );
};
