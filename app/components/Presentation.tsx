import { ButtonDefault } from "./Buttons/ButtonDefault";
import ButtonOutline from "./Buttons/ButtonOutline";

export const Presentation = () => {
  // defintion of profile image
  const image: string = "/hat-robot2.jpg";
  const imageStyle = { backgroundImage: `url(${image})` };
  // returned presentation component
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {/* profile image */}
      <div
        style={imageStyle}
        className="max-sm:[384px] max-sm[384px] w-[400px] h-[400px] bg-slate-200 rounded-full bg-cover bg-center"
      ></div>
      {/* ... */}

      {/* info content */}
      <div className="flex flex-col justify-center items-center gap-4">
        {/* title text */}
        <div className="inline-flex flex-col justify-center items-center gap-3">
          <p className="text-base text-zinc-800"> Hello we are </p>
          <h1 className="text-5xl font-medium text-zinc-900">
            Molina Solutions
          </h1>
          <h3 className="text-2xl text-zinc-700">Full Stack Developers</h3>
        </div>
        {/* buttons */}
        <div className="flex gap-2 justify-center">
          <ButtonDefault text="Download CV" />
          <ButtonOutline text="Contact Info" />
        </div>
      </div>
    </div>
  );
};

