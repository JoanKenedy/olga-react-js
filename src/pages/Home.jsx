import { CallToAction } from "../components/CallToAction";
import { AboutIndex } from "../components/Home/AboutIndex";
import { Benefits } from "../components/Home/Benefits";
import { CardAgenda } from "../components/Home/CardAgenda";
import { Hero } from "../components/Home/Hero";
import { Packages } from "../components/Home/Packages";
import { Services } from "../components/Home/Services";
import { Testimonials } from "../components/Home/Testimonials";

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutIndex />
      <CardAgenda />
      <Benefits />
      <Services />
      <Testimonials />
      <Packages />
      <CallToAction />
    </>
  );
};
