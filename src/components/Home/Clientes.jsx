import { clienteTestimonials } from "../Home/Clientes.data";
import { Slide } from "./Slide";
export const Clientes = () => {
  return (
    <>
      <div className="relative w-full  mt-6 p-5 md:pt-6 md:pb-12 md:mb-4 md:max-w-7xl rounded-lg container-benefits ">
        <div className="grid max-w-5xl gap-8 mx-auto  md:grid-cols-1 ">
          <h2 className="color-text text-2xl mb-2 text-center font-semibold md:text-4xl ">
            Escucha lo que mis pacientes satisfechos tienen que decir.
          </h2>
        </div>
        <Slide clienteTestimonials={clienteTestimonials} />

        <a
          href="https://www.doctoralia.com.mx/olga-miryam-castillo-ramirez/ginecologo/tlalpan#profile-reviews"
          target="_blank"
          className="color-btn w-[180px] m-auto text-white rounded-2xl text-sm px-3 py-2 block my-3 md:w-[180px] text-center md:py-2 md:text-lg md:hover:scale-95 duration-75"
        >
          Más opiniones
        </a>
      </div>
    </>
  );
};
