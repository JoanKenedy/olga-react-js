import { CallToAction } from "../components/CallToAction";
import { Faqs } from "../components/Faqs";
import { Hero } from "../components/Servicios/Hero";
import { ServicesAll } from "../components/Servicios/ServicesAll";

export const Servicios = () => {
  return (
    <>
      <Hero />
      <ServicesAll />
      <Faqs/>
      <CallToAction />
    </>
  );
};
