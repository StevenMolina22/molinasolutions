import { BiLogoPostgresql } from "react-icons/bi";
import { CgFigma } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

export const Techonologies = () => {
  return (
    <div className="flex flex-wrap content-center items-center justify-center gap-24 text-zinc-300">
      <div className="flex items-start gap-4 ">
        <SiDjango size={56} />
        <span className="text-5xl font-extrabold">Django</span>
      </div>
      <div className="flex items-start gap-4">
        <FaReact size={56} />
        <span className="text-5xl font-extrabold">React</span>
      </div>
      <div className="flex items-start gap-4">
        <BiLogoPostgresql size={56} />
        <span className="text-5xl font-extrabold">PostgreSQL</span>
      </div>
      <div className="flex items-start gap-4">
        <CgFigma size={56} />
        <span className="text-5xl font-extrabold">Figma</span>
      </div>
    </div>
  );
};
