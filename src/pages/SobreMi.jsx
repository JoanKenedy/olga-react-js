import { Hero } from "../components/SobreMi/Hero";

import { Experiencia } from "../components/SobreMi/Experiencia";
import { LineTime } from "../components/SobreMi/LineTime";
import { CallToAction } from "../components/CallToAction";
import { Faqs } from "../components/Faqs";
import { About } from "../components/SobreMi/About";
import ScrollTop from "../components/ScrollTop";
import { Testimonials } from "../components/Home/Testimonials";

export const SobreMi = () => {
  return (
    <>
      <ScrollTop />
      <Hero />
      <About />
      <LineTime />
      <Experiencia />
      <Testimonials />
      <Faqs />
      <CallToAction />
    </>
  );
};
