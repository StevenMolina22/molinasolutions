// responsive settings started
export const Footer = () => {
  // returned footer section
  return (
    <footer className="flex flex-col items-center justify-center gap-8 ">
      {/* items */}
      <div className="flex flex-wrap content-center items-center justify-center gap-8 max-sm:flex-col">
        <a
          href="#aboutUs"
          className="text-2xl font-medium text-zinc-900 hover:underline"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-2xl font-medium text-zinc-900 hover:underline"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="text-2xl font-medium text-zinc-900 hover:underline"
        >
          Experience
        </a>
        <a
          href="#contactUs"
          className="text-2xl font-medium text-zinc-900 hover:underline"
        >
          Contact
        </a>
      </div>
      {/* caption */}
      <p className="text-sm text-zinc-600">
        Copyright all rights reserved by Molina Solutions 2024
      </p>
    </footer>
  );
};
