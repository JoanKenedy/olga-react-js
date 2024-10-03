import { Slide } from "./Slide";

export const Testimonials = () => {
  return (
    <>
      <div
        className="relative w-full  mt-6 p-5 md:pt-6 md:pb-12 md:mb-4 md:max-w-7xl rounded-lg  "
        id="testimonios"
      >
        <div className="grid max-w-5xl gap-8 mx-auto  md:grid-cols-1 ">
          <h2 className="color-text text-2xl mb-2 text-center font-semibold md:text-4xl ">
            Precios competitivos para servicios de alta calidad
          </h2>
        </div>

        <Slide />
      </div>
    </>
  );
};
