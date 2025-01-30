const Header = () => {
  return (
    <header className="mt-18 lg:mx-[200px] sm:mt-20 md:mt-30 py-4  flex justify-center lg:mt-10">
      <div className="p-4 text-center md:mx-10 text-5xl lg:text-6xl sm:text-7xl font-bold">
        Intro to{" "}
        <span className="bg-linear-to-tl from-sky-500 to-indigo-500 bg-clip-text text-transparent font-medium">
          React.js
        </span>{" "}
        in Our Bootcamp
      </div>
    </header>
  );
};

export default Header;
