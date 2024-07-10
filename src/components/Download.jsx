import React from "react";

function Download() {
  return (
    <section className="px-6 py-4 mx-auto lg:px-8 mt-10 max-w-7xl">
      <div className="rounded-3xl bg-black flex flex-col lg:flex-row items-end pt-6">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col p-8 gap-6">
            <span className="font-bold text-gray-300">
              READY TO START BUILDING?
            </span>
            <h1 className="text-5xl font-semibold text-gray-100">
              Create your desktop app for free*
            </h1>
            <p className="text-gray-300 font-semibold">
              ToDesktop Builder will take you step-by-step through the process
              of creating your first desktop app in just a few minutes.
            </p>
            <button className="py-3 mt-4 px-6 flex gap-2 items-center justify-center bg-[#3238f2] rounded-lg text-white font-bold text-lg w-fit hover:bg-blue-600">
              <i class="fa-solid fa-download"></i>
              Download ToDesktop Builder
            </button>
            <p className="text-gray-400 text-sm italic">
              *You can create a desktop app and run it on your computer for
              free. You will only be charged if you want to create a
              distributable app for your customers.
            </p>
          </div>
          <div className="pl-6 overflow-hidden self-end">
            <img
              src="src/assets/asset 53.png"
              alt=""
              className="relative -bottom-1 -right-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
