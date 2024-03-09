
export const Footer = () => {
  // returned footer section
  return (
    <footer className="flex flex-col items-center justify-center gap-8 ">
      {/* items */}
      <div className="flex flex-wrap content-start items-start gap-8">
        <span className="text-2xl font-medium text-zinc-900">About</span>
        <span className="text-2xl font-medium text-zinc-900">Projects</span>
        <span className="text-2xl font-medium text-zinc-900">Experience</span>
        <span className="text-2xl font-medium text-zinc-900">Contact</span>
      </div>
      {/* caption */}
      <p className="text-sm text-zinc-600">Copyright all rights reserved by Molina Solutions 2024</p>
    </footer>
  );
};
