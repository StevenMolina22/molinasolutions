"use client";
import React from "react";
import { ButtonDefault } from "./Buttons/ButtonDefault";
import ButtonOutline from "./Buttons/ButtonOutline";

interface PresentationProps {}

const Presentation: React.FC<PresentationProps> = () => {
  // defintion of profile image
  const image = "/hat-robot2.jpg"; // Define image path
  const imageStyle = { backgroundImage: `url(${image})` };
  const curriculumURL = "https://drive.google.com/file/d/1XcdWTHNq4KtZAe7bJB6DR50HrEH8aNiy/view?usp=drive_link";

  return (
    // returned presentation component
    <section id="presentation" className="flex flex-wrap justify-center gap-4">
      <div
        style={imageStyle}
        className="h-[400px] w-[400px] rounded-full bg-cover bg-center max-sm:h-[368px] max-sm:w-[368px]"
      ></div>

      {/* info content */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="inline-flex flex-col items-center justify-center gap-3">
          <p className="text-base text-zinc-800"> Hello we are </p>
          <h1 className="text-5xl font-medium text-zinc-900">
            Molina Solutions
          </h1>
          <h3 className="text-2xl text-zinc-700">Full Stack Developers</h3>
        </div>

        <div className="flex justify-center gap-2">
          <ButtonDefault link={curriculumURL} text="Download CV" />
          <ButtonOutline link="#contactUs" text="Contact Info" />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
