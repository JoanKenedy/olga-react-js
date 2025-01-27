import { CallToAction } from "../components/CallToAction";
import { AboutIndex } from "../components/Home/AboutIndex";
import { Benefits } from "../components/Home/Benefits";
import { CardAgenda } from "../components/Home/CardAgenda";
import { Galery } from "../components/Home/Galery";
import { Hero } from "../components/Home/Hero";
import { Clientes } from "../components/Home/Clientes";

import { Services } from "../components/Home/Services";
import { Testimonials } from "../components/Home/Testimonials";
import { Ultrasonidos } from "../components/Home/Ultrasonidos";
import { ButtonFixed } from "../components/ButtonFixed";

export const Home = () => {
  return (
    <>
      <Hero />
      <Ultrasonidos />
      <AboutIndex />
      <CardAgenda />
      <Benefits />
      <Services />
      <Testimonials />
      <Galery />
      <Clientes />
      <CallToAction />
      <ButtonFixed />
    </>
  );
};
