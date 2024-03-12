"use client";
import { useState } from "react";
import { ToggleMenuButton } from "./Buttons/ToggleMenuButton";

const Navbar = () => {
  // manage state of the navbar
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNav = () => {
    setShowNavbar(!showNavbar);
  };

  // make a function to toggle the menu of the navbar when the menu button is clicked
  return (
    <header
      id="navbar"
      className={`flex w-full justify-between gap-4 px-4 ${showNavbar && "flex-col items-start"}`}
    >
      <div className="flex w-full justify-between">
        {/* logo */}
        <a className="text-2xl font-medium">Molina Solutions</a>
        {/* menu button */}
        <ToggleMenuButton onClickFunc={toggleNav} />
      </div>

      {/* items */}
      <div
        id="menu"
        className={`flex items-center gap-4 text-xl ${
          showNavbar
            ? "max-md:w-full max-md:flex-col max-md:items-start"
            : "max-md:hidden"
        }`}
      >
        {/* Menu anchor items */}
        <a
          href="#aboutUs"
          className="border-gray-300 hover:underline max-md:w-full max-md:border-b"
        >
          About
        </a>
        <a
          href="#projects"
          className="border-gray-300 hover:underline max-md:w-full max-md:border-b"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="border-gray-300 hover:underline max-md:w-full max-md:border-b"
        >
          Experience
        </a>
        <a
          href="#contactUs"
          className="border-gray-300 hover:underline max-md:w-full max-md:border-b"
        >
          Contact
        </a>
      </div>
      {/* menu button */}
    </header>
  );
};

export default Navbar;
