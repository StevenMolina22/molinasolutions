import { CardSimple } from "./Cards/CardSimple";
// started responsive design

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
    <section id="aboutUs" className="flex flex-col items-center gap-6">
      {/* title text */}
      <div className="g-2 flex flex-col items-center justify-center p-4">
        <h3 className="text-zinc-900">Get to know more</h3>
        <h2 className="text-5xl font-medium">About us </h2>
      </div>
      {/* content */}
      <div className="flex flex-wrap content-center items-center justify-center gap-12">
        {/* image */}
        <div
          style={imageStyle}
          className="h-[400px] w-[400px] rounded-3xl bg-cover bg-center max-sm:w-full"
        ></div>
        {/* info */}
        <div className="flex flex-col flex-wrap content-center items-center gap-6">
          {/* cards */}
          <div className="justity-center flex items-center gap-8 max-md:gap-4">
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
          <div className="flex w-full max-w-[600px] items-center gap-3">
          We are a dynamic team of software developers specializing in crafting top-notch websites using cutting-edge technologies. From conceptualization and design to deployment and maintenance, we handle every stage of your project with precision. Whether you require custom development, responsive design, or e-commerce solutions, we have the expertise to deliver results that exceed your expectations. Let us bring your vision to life on the web.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
