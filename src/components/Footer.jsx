import React from "react";

function Footer() {
  return (
    <footer className="px-6 py-4 mx-auto lg:px-8 mt-8 max-w-7xl">
      <div className="flex justify-center items-center flex-col gap-8 p-6  rounded-xl bg-[#fafafc] md:flex-row-reverse md:justify-between">
        <div className="flex justify-between items-center px-2 flex-col gap-6 md:flex-row md:py-10">
          <h3 className="font-semibold text-lg text-gray-500 hover:text-gray-900 
          ">
            Documentation
          </h3>
          <div className="flex justify-center items-center gap-8">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i class="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <i class="fa-brands fa-github text-2xl"></i>
            </a>
          </div>
        </div>
        <a href="#" className="flex justify-center items-center">
          <img src="assets/asset 0.png" alt="" />
          <h3 className="text-xl font-semibold">ToDesktop</h3>
        </a>
      </div>
      <div className="px-6 py-4 grid place-items-center gap-4 mb-8">
        <p className="flex justify-center items-center gap-3">
          <img src="assets/y.png" alt="" className="w-4 h-4" />
          <span className="text-sm text-gray-600">A Y Combinator company.</span>
        </p>
        <span className="text-sm text-gray-400">
          © 2024 ToDesktop, Inc. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
