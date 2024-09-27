import { ContactButton } from "../ContactButton";
import Back from "../../assets/back-cel.png";
import { LiteYoutube } from "./LiteYoutube";

export const Hero = () => {
  return (
    <section
      className="w-full  "
      style={{
        height: "750px",
        width: "100%",
        backgroundImage: `url(${Back})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      id="inicio"
    ></section>
  );
};
