import { CardText } from "./Cards/CardText";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

// Define a type for the icon prop that accepts both React Icons and Hero Icons

// card text items type definition
type CardItem = {
  Icon: React.FC;
  message: string;
};

export const ContactUs = () => {
  // card text items content
  const itemsContentSocial: CardItem[] = [
    { Icon: IoMail, message: "molinasolutions@gmail.com" },
    { Icon: FaLinkedin, message: "LinkedIn/MolinaSolutions" },
  ];
  const itemsContentNumbers: CardItem[] = [
    { Icon: FaWhatsapp, message: "+54 9 11 6221-6633" },
    { Icon: FaWhatsapp, message: "+57 315 3248483" },
  ];
  // returned contact us section
  return (
    <section id="contactUs" className="flex flex-col items-center gap-4">
      {/* title text */}
      <div className="flex flex-col items-center justify-center">
        <span className="text-zinc-600">Get to know more</span>
        <h2 className="text-5xl font-medium text-zinc-900">Contact Us</h2>
      </div>
      {/* card items */}
      <div className="flex flex-wrap content-center items-center justify-center gap-4">
        <CardText cards={itemsContentSocial} />
        <CardText cards={itemsContentNumbers} />
      </div>
    </section>
  );
};
