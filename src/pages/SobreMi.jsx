import { Hero } from "../components/SobreMi/Hero";
import { AboutIndex } from "../components/Home/AboutIndex";
import { Experiencia } from "../components/SobreMi/Experiencia";
import { LineTime } from "../components/SobreMi/LineTime";
import { CallToAction } from "../components/CallToAction";
import { Faqs } from "../components/Faqs";

export const SobreMi = () => {
  return (
    <>
      <Hero />
      <AboutIndex />
      <LineTime />
      <Experiencia />
      <Faqs />
      <CallToAction />
    </>
  );
};
