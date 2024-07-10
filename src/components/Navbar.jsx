import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState("hidden");
  const handleMenu = () => {
    // Add your menu handling logic here
    setIsMenuOpen(isMenuOpen == "hidden" ? "block" : "hidden");
  };
  return (
    <nav className="p-3 sticky top-0 w-full z-50 bg-white flex justify-between items-center shadow-md">
      <a href="#" className="flex justify-center items-center gap-2">
        <img
          className="object-cover max-w-12 max-h-12"
          src="src/assets/asset 0.png"
          alt="logo"
        />
        <span className="text-lg font-medium font-display">ToDesktop</span>
      </a>

      <div className="hidden lg:flex gap-8">
        <a href="#" className="text-gray-700 font-semibold hover:text-primary">
          Pricing
        </a>
        <a href="#" className="text-gray-700 font-semibold hover:text-primary">
          Docs
        </a>
        <a href="#" className="text-gray-700 font-semibold hover:text-primary">
          Changelog
        </a>
        <a href="#" className="text-gray-700 font-semibold hover:text-primary">
          Blog
        </a>
        <a href="#" className="text-gray-700 font-semibold hover:text-primary">
          Login
        </a>
      </div>

      <button className="hidden md:flex items-center gap-2 border border-gray-400 hover:border-gray-700 py-2 px-6 rounded-md">
        <img src="src/assets/asset 1.svg" alt="" />
        <span className="font-semibold ">Electron Developers </span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>

      <button className="p-2 md:hidden" onClick={handleMenu}>
        <i className="fa-solid fa-bars text-gray-800"></i>
      </button>

      <div className={`${isMenuOpen} md:hidden z-10 fixed bg-red-50 inset-0`}>
        <div className="flex justify-between items-center p-3">
          <a href="#home" className="flex justify-center items-center gap-2">
            <img
              className="object-cover max-w-12 max-h-12"
              src="src/assets/asset 0.png"
              alt="logo"
            />
            <span className="text-lg font-medium font-display">ToDesktop</span>
          </a>
          <button className="p-2 md:hidden" onClick={handleMenu}>
            <i className="fa-solid fa-times text-gray-800"></i>
          </button>
        </div>

        <div className="flex flex-col px-5 py-4 md:hidden gap-4 ">
          <a
            href="#pricing"
            className="py-3 px-4 text-gray-700 font-bold text-xl hover:bg-gray-50 rounded-md"
          >
            Pricing
          </a>
          <a
            href="#docs"
            className="py-3 px-4 text-gray-700 font-bold text-xl hover:bg-gray-50 rounded-md"
          >
            Docs
          </a>
          <a
            href="#changelog"
            className="py-3 px-4 text-gray-700 font-bold text-xl hover:bg-gray-50 rounded-md"
          >
            Changelog
          </a>
          <a
            href="#blog"
            className="py-3 px-4 text-gray-700 font-bold text-xl hover:bg-gray-50 rounded-md"
          >
            Blog
          </a>
          <a
            href="#login"
            className="py-2 px-4 text-gray-700 font-bold text-xl hover:bg-gray-50 rounded-md"
          >
            Login
          </a>
        </div>
        <div className="h-[1px] bg-gray-300 mx-4"></div>
        <button className=" w-full mt-6 gap-3 px-6 py-4 flex items-center hover:bg-gray-300 rounded-md">
          <img src="src/assets/asset 1.svg" alt="" />
          <span>Electron Developers </span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
