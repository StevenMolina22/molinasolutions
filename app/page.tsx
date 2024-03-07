import { Presentation } from "./components/Presentation";
import Navbar from "./components/Navbar";
import { CardList } from "./components/Cards/CardList";
import { cardFrontContent, cardBackContent} from "./utils/HomeData"
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-16 px-3 gap-[128px]">
      {/* google icons provisional*/}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <Navbar />
      <Presentation />
      <AboutUs />
      <CardList title="FrontEnd Development" listItems={cardFrontContent}/>
    </main>
  );
}
