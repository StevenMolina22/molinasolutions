import { CardSimple } from "./Cards/CardSimple";

const AboutUs = () => {
  // image declaration
  const image: string = "/minion-robot.jpg";
  const imageStyle = { backgroundImage: `url(${image})` };
  // messages data
  const messageExperience: string[] = [
    "4+ Years Experience",
    "Front and Back development",
  ];
  const messageEducation: string[] = [
    "Universidad del Valle",
    "Universidad de Buenos Aires",
  ];

  // returned about us section
  return (
    <div className="flex flex-col items-center gap-6">
      {/* title text */}
      <div className="flex flex-col justify-center items-center p-4 g-2">
        <h3 className="text-zinc-900">Get to know more</h3>
        <h2 className="text-5xl font-medium">About us </h2>
      </div>
      {/* content */}
      <div className="flex flex-wrap items-center justify-center content-center gap-12 ">
        {/* image */}
        <div
          style={imageStyle}
          className="w-[400px] h-[400px] rounded-3xl bg-cover bg-center"
        ></div>
        {/* info */}
        <div className="flex flex-col flex-wrap items-center content-center gap-6">
          {/* cards */}
          <div className="flex justity-center items-center gap-8">
            <CardSimple
              title="Experience"
              messages={messageExperience}
              icon="group"
            />
            <CardSimple
              title="Education"
              messages={messageEducation}
              icon="group"
            />
          </div>
          {/* body text */}
          <div className="flex items-center gap-3 w-full max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur. Massa nec non mattis nullam.
            Mi dictum egestas erat nec porttitor nibh scelerisque ut risus.
            Fermentum nibh augue neque pellentesque justo. Phasellus sit non
            amet massa semper purus leo leo. Quam tincidunt netus vitae enim et.
            Id nulla vitae tristique sed id orci massa in in.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
