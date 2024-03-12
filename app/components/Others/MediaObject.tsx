import ButtonOutline from "../Buttons/ButtonOutline";
import { ButtonText } from "../Buttons/ButtonText";

// type definition for the media object
type Props = {
  caption: string;
  title: string;
  image: string;
  body: string;
  links: string[];
};

export const MediaObject = ({ caption, title, image, body, links }: Props) => {
  const imageStyle = { backgroundImage: `url(${image})` };

  return (
    <div className="media-object">
      {/* Image */}
      <div style={imageStyle} className="media-object__image rounded-3xl"></div>
      {/* Project Content */}
      <div className="media-object__content flex flex-col items-start gap-3 rounded-2xl">
        {/* info text */}
        <div className="flex flex-col items-end gap-2 max-lg:items-start">
          {/* info title */}
          <div className="flex flex-col items-end gap-1 max-lg:items-start">
            <p className="font-semibold text-zinc-700">{caption}</p>
            <h4 className="text-3xl font-semibold text-zinc-900">{title}</h4>
          </div>
          {/* info content */}
          <div className="gradient-info rounded-2xl p-4">
            <p>{body}</p>
          </div>
        </div>
        {/* buttons */}
        <div className="flex gap-3">
          {/* <ButtonText text="Learn More" /> */}
          <ButtonOutline link={links[0]} text="Demo" />
          <ButtonOutline link={links[1]} text="Code" />
        </div>
      </div>
    </div>
  );
};
