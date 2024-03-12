import { CardList } from "./Cards/CardList";
import { cardFrontContent, cardBackContent } from "../utils/HomeData";

export const Experience = () => {
  // returned experienced section
  return (
    <section id="experience" className="flex flex-col items-center justify-center gap-8">
      {/* title text */}
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-zinc-800">Get to know more</span>
        <h2 className="text-5xl font-medium text-zinc-900">Experience</h2>
      </div>
      {/* cards */}
      <div className="flex flex-wrap content-center items-center justify-center gap-8">
        <CardList title="FrontEnd Development" listItems={cardFrontContent} />
        <CardList title="BackEnd Development" listItems={cardBackContent} />
      </div>
    </section>
  );
};
