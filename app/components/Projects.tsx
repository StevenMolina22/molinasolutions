import "../sass/Projects.scss";
import ButtonOutline from "./Buttons/ButtonOutline";
import { MediaObject } from "./Others/MediaObject";

export const Projects = () => {
  // image settings
  const imageFirst = "moperclub-page.png";
  const imageSecond = "encrypter-page.jpeg";
  const text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptatibus quidem ut quisquam autem, fuga accusamus consequuntur explicabo. Inventore suscipit eaque ipsum distinctio, ratione reprehenderit id aliquam, sed, voluptate quidem vero vitae libero? Molestiae consectetur sint porro quae ad ipsum nesciunt! Eius non pariatur perspiciatis, incidunt quaerat quibusdam doloremque dolorum dolore ab asperiores aliquam aspernatur nemo, praesentium nostrum veritatis enim";
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        <p className="text-zinc-700">Get to know more</p>
        <h2 className="text-5xl font-medium text-zinc-900">Projects</h2>
      </div>

      {/* Content Projects*/}
      <div className="flex flex-col items-center gap-6">
        {/* first project */}
        <MediaObject
          title="Moperclub"
          caption="Featured Project"
          image={imageFirst}
          body={text}
        />
        {/* second project */}
        <MediaObject
          title="Encrypter"
          caption="Featured Project"
          image={imageSecond}
          body={text}
        />
      </div>
    </div>
  );
};
