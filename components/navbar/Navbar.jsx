const Navbar = () => {
    const logo = "Tailwind"
  return (
    <nav className="bg-blue-600">
      <div className="w-10/12 mx-auto py-3 sm:py-4 md:py-5 duration-300">
        <h1 className="text-xl text-white md:text-2xl duration-300">
          {logo}
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
