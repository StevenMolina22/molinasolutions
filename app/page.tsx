import { Presentation } from "./components/Presentation";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import { Experience } from "./components/Experience";
import { Techonologies } from "./components/Techonologies";
import { Projects } from "./components/Projects";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="flex max-w-[100vw] flex-col items-center gap-[128px] px-4 py-12">
      {/* google icons provisional*/}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <Navbar />
      <Presentation />
      <AboutUs />
      <Experience />
      <Techonologies />
      <Projects />
      <ContactUs />
      <Footer />
      {/* <CardList title="FrontEnd Development" listItems={cardFrontContent}/> */}
    </main>
  );
}
