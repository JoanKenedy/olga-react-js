import { Hero } from "../components/SobreMi/Hero";
import { AboutIndex } from "../components/Home/AboutIndex";
import { Experiencia } from "../components/SobreMi/Experiencia";
import { LineTime } from "../components/SobreMi/LineTime";
import { CallToAction } from "../components/CallToAction";

export const SobreMi = () => {
  return (
    <>
      <Hero />
      <AboutIndex />
      <LineTime />
      <Experiencia />
      <CallToAction />
    </>
  );
};
