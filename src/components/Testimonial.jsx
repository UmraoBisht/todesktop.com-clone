import React from "react";

function Testimonial() {
  return (
    <section className="px-6 py-4 mx-auto lg:px-8 mt-10 max-w-7xl">
      <h2 className="text-5xl font-semibold mb-[4rem]">Customer stories</h2>
      <div className="rounded-lg border flex flex-col lg:flex-row items-end pt-6">
        <div className="left flex flex-col gap-8 p-8">
          <div className="h-4 w-fit">
            <img src="src/assets/asset 44.svg" alt="" />
          </div>
          <p className="font-bold text-xl pt-2">
            ClickUp used ToDesktop to get their desktop app in front of
            customers in days instead of months.
          </p>
          <div className="tag-container flex gap-2 flex-wrap py-2">
            <div className="w-fit border border-yellow-300 bg-yellow-100 rounded-lg px-3 py-1 flex items-center gap-2">
              <i className="fa-solid fa-check text-yellow-800"></i>
              <p className="text-yellow-800 font-bold">Chromeless UI</p>
            </div>
            <div className="w-fit border border-yellow-300 bg-yellow-100 rounded-lg px-3 py-1 flex items-center gap-2">
              <i className="fa-solid fa-check text-yellow-800"></i>
              <p className="text-yellow-800 font-bold">Native spellcheck</p>
            </div>
            <div className="w-fit  border border-yellow-300 bg-yellow-100 rounded-lg px-3 py-1 flex items-center gap-2">
              <i className="fa-solid fa-check text-yellow-800"></i>
              <p className="text-yellow-800 font-bold">Task time in menubar</p>
            </div>
            <div className="w-fit  border border-yellow-300 bg-yellow-100 rounded-lg px-3 py-1  flex items-center gap-2">
              <i className="fa-solid fa-check text-yellow-800"></i>
              <p className="text-yellow-800 font-bold">
                Notification count in the dock
              </p>
            </div>
            <div className="w-fit border border-yellow-300 bg-yellow-100 rounded-lg px-3 py-1  flex items-center gap-2">
              <i className="fa-solid fa-check text-yellow-800"></i>
              <p className="text-yellow-800 font-bold">
                Global hotkey to create task
              </p>
            </div>
          </div>
          <q className="text-gray-500 text-lg">
            ToDesktop provided us with a{" "}
            <span className="text-gray-800">polished desktop app</span> in no
            time. Their expert team guided us through a smooth migration from
            our outdated legacy desktop app, enabling us to deliver{" "}
            <span className="text-gray-800"> new and improved features </span>
            to our customers within days.
          </q>
          <div className="flex gap-3">
            <div className="w-12">
              <img
                src="src/assets/asset 45.jpeg"
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h3>Zeb Evans</h3>
              <p className="text-gray-500">
                Founder & SEO,{" "}
                <a
                  href="#"
                  className="border-b border-dashed hover:border-solid hover:border-gray-800"
                >
                  {" "}
                  ClickUp{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img src="src/assets/asset 46.png" className="pl-12" alt="" />
        </div>
      </div>
      <div className="grid-container grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br from-red-200 via-purple-200 to-yellow-200 group">
          <div className="rounded-2xl w-full gap-10 bg-gray-50 h-full flex justify-between flex-col p-9 group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:via-purple-100 group-to-yellow-100">
            <div className="flex gap-2 md:flex-col">
              <div className="p-3 rounded-full w-8 h-8 md:w-12 md:h-12 flex justify-center items-center bg-blue-200">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="font-bold text-2xl">Native APIs</h3>
            </div>
            <p className="text-lg font-normal">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 overflow-hidden rounded-full flex items-center justify-center">
                  <img
                    src="src/assets/asset 47.png"
                    alt=""
                    className="min-w-12 min-h-12"
                  />
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center -ml-3 border border-white">
                  <img
                    src="src/assets/asset 48.jpeg"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-2">
                <p>Rick Pastoor</p>
                <span className="w-fit text-gray-500 border-b hover:border-solid hover:border-gray-800">
                  Rise
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br from-red-200 via-purple-200 to-yellow-200 group">
          <div className="rounded-2xl w-full gap-10 bg-gray-50 h-full flex justify-between flex-col p-9 group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:via-purple-100 group-to-yellow-100">
            <div className="flex gap-2 md:flex-col">
              <div className="p-3 rounded-full w-8 h-8 md:w-12 md:h-12 flex justify-center items-center bg-blue-200">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <h3 className="font-bold text-2xl">Cleaner, less cluttered UI</h3>
            </div>
            <p className="text-lg font-normal">
              Having a desktop app gives us the freedom to design the experience
              we want, including better keyboard shortcuts and a cleaner UI. It
              was a no-brainer for us to use ToDesktop.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="src/assets/asset 49.png"
                  alt=""
                  className="min-w-12 min-h-12"
                />
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center -ml-3 border border-white">
                <img
                  src="src/assets/asset 50.jpeg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex flex-col ml-2">
                <p>Max Musing</p>
                <a
                  href="#"
                  className="w-fit text-gray-500 border-b hover:border-solid hover:border-gray-800"
                >
                  Basedash
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br from-red-200 via-purple-200 to-yellow-200 group">
          <div className="rounded-2xl w-full gap-10 bg-gray-50 h-full flex justify-between flex-col p-9 group-hover:bg-gradient-to-br group-hover:from-red-100 group-hover:via-purple-100 group-to-yellow-100">
            <div className="flex gap-2 md:flex-col">
              <div className="p-3 rounded-full w-8 h-8 md:w-12 md:h-12 flex justify-center items-center bg-blue-200">
                <i class="fa-solid fa-infinity"></i>
              </div>
              <h3 className="font-bold text-2xl">Code optional</h3>
            </div>
            <p className="text-lg font-normal">
              It was unbelievably simple for us to get a desktop app up and
              running, and we didn’t have to write a single line of code. Once
              we had this MVP, we were able to extend the app’s functionality
              with custom behavior using ToDesktop’s libraries.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="src/assets/asset 51.png"
                  alt=""
                  className="min-w-12 min-h-12"
                />
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center -ml-3 border border-white">
                <img
                  src="src/assets/asset 52.jpeg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex flex-col ml-2">
                <p>Pouya Rad</p>
                <a
                  href="#"
                  className="w-fit text-gray-500 border-b hover:border-solid hover:border-gray-800"
                >
                  LifeAt
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
