
const Navbar = () => {
  return (
    <header className="flex justify-between w-full px-4">
      {/* icons */}
      {/* logo */}
      <a className="text-2xl font-medium">Molina Solutions</a>
      {/* items */}
      <div className="flex gap-4 text-xl max-md:hidden items-center">
        <a className="hover:underline">About</a>
        <a className="hover:underline">Projects</a>
        <a className="hover:underline">Experience</a>
        <a className="hover:underline">Contact</a>
      </div>
      {/* menu button */}
      <button className="md:hidden items-center">
        <i className="material-symbols-outlined ">menu</i>
      </button>
    </header>
  );
};

export default Navbar;