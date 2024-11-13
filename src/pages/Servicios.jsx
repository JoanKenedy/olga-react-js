import { CallToAction } from "../components/CallToAction";
import { Faqs } from "../components/Faqs";
import ScrollTop from "../components/ScrollTop";
import { Hero } from "../components/Servicios/Hero";
import { ServicesAll } from "../components/Servicios/ServicesAll";
import { Testimonials } from "../components/Home/Testimonials";

export const Servicios = () => {
  return (
    <>
      <ScrollTop />
      <Hero />
      <ServicesAll />
      <Testimonials />
      <Faqs />
      <CallToAction />
    </>
  );
};
