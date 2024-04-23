import "../sass/Projects.scss";
import ButtonOutline from "./Buttons/ButtonOutline";
import { MediaObject } from "./Others/MediaObject";

export const Projects = () => {
  // image settings
  const imageFirst = "moperclub-page.png";
  const imageSecond = "encrypter-page.jpeg";
  const buttonLinksEncypter = [
    "https://stevenmolina22.github.io/Proyecto-Cifrador/",
    "https://github.com/StevenMolina22/Proyecto-Cifrador",
  ];
  const buttonLinksMoper = [
    "https://moperclub-client.vercel.app/",
    "https://github.com/StevenMolina22/moperclub-client",
  ];
  const textMoper =
    "Discover our innovative project, harmonizing React TS frontend with Django PostgreSQL backend. Crafted with a responsive design and elegant Figma layouts, it seamlessly integrates backend data into interactive sliders and cards. Experience efficient information retrieval and presentation, ensuring a captivating user experience powered by meticulously organized code and advanced technologies.";
  const textEncypter =
    "Explore our cutting-edge encrypter project featuring an exquisite, responsive design. Seamlessly encrypt or decrypt text with intuitive functionality. Leveraging Sass, HTML, and JS technologies, this tool ensures smooth encryption operations, empowering users with enhanced data security and privacy ";
  return (
    <section id="projects" className="flex flex-col items-center gap-6">
      {/* Title */}
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        <p className="text-zinc-700">Get to know more</p>
        <h2 className="text-5xl font-medium text-zinc-900">Projects</h2>
      </div>

      {/* Content Projects*/}
      <div className="flex flex-col items-center gap-8">
        {/* first project */}
        <MediaObject
          title="Moperclub"
          caption="Featured Project"
          image={imageFirst}
          body={textMoper}
          links={buttonLinksMoper}
        />
        {/* second project */}
        <MediaObject
          title="Encrypter"
          caption="Featured Project"
          image={imageSecond}
          body={textEncypter}
          links={buttonLinksEncypter}
        />
        </div>
    </section>
  );
};
