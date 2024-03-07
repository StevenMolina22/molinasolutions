import { Presentation } from "./components/Presentation";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import { Experience } from "./components/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-12 px-3 gap-[144px]">
      {/* google icons provisional*/}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <Navbar />
      <Presentation />
      <AboutUs />
      <Experience />
      {/* <CardList title="FrontEnd Development" listItems={cardFrontContent}/> */}
    </main>
  );
}
