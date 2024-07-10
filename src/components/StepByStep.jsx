import React from "react";

function StepByStep() {
  return (
    <section className="flex flex-col gap-[3rem] px-6 py-8 mx-auto lg:px-8 mt-10 max-w-7xl">
      <div className="step1">
        <h2 className="text-5xl font-semibold mb-[4rem]">How it works</h2>
        <div className="rounded-xl bg-gray-200 px-8 py-12 border flex gap-10 lg:justify-between flex-col lg:flex-row">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 px-3 py-1 w-fit rounded-lg font-medium font-display">
              Step 1
            </span>
            <h3 className="text-4xl font-bold">
              Bootstrap straight from your web app
            </h3>
            <p className="text-lg font-light">
              Copy and paste your web app url into ToDesktop. Customise your app
              design, app icon and window frame UI with no code.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Multiple windows
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Customisable menus
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Menubar/tray menus
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Launch on startup
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check "></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Offline support
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Tabs (Mac only)
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-tech translate-y-0 lg:w-1/2">
            <img src="assets/asset 27.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="step2">
        <div className="rounded-xl bg-gray-200 px-8 py-12 border flex flex-col lg:flex-row">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 px-3 py-1 w-fit rounded-lg font-medium font-display">
              Step 2
            </span>
            <div className="-mt-6 -ml-8 flex">
              <svg
                width="61"
                height="17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="svg1552719357_603"
                className="scale-x-[-1] rotate-50 translate-x-[6rem] -translate-y-12 opacity-1"
                // style={{transform: `scaleX(-1) rotate(0deg); opacity: 1`}}
              >
                <path
                  d="M58.913 16.996a1 1 0 0 0 1.083-.91l.78-8.966a1 1 0 1 0-1.993-.173l-.693 7.97-7.97-.693a1 1 0 1 0-.173 1.993l8.966.78Zm-57.115-.394c4.976-6.596 13.995-12.691 24.303-14.08 10.241-1.38 21.845 1.873 32.133 14.121l1.532-1.286C49.054 2.605 36.78-.934 25.834.54 14.954 2.006 5.472 8.41.202 15.398l1.596 1.204Z"
                  fill="url(#svg1552719357_603_a)"
                ></path>
                <defs>
                  <linearGradient
                    id="svg1552719357_603_a"
                    x1="59"
                    y1="16"
                    x2="1"
                    y2="16"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="hsl(228deg 2% 53%)"></stop>
                    <stop
                      offset="1"
                      stopColor="hsl(228deg 2% 53%)"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>{" "}
              <div
                className="mt-6 -ml-3 text-xs font-semibold translate-x-[6rem] -translate-y-20 text-gray-500"
              >
                Optional
              </div>
            </div>
            <h3 className="text-4xl font-bold">
              Add desktop code to customise your web app
            </h3>
            <p className="text-lg font-light">
              No need to create a new repository, just add code from our desktop
              APIs to your codebase and get access to system level
              functionality.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Native notifications
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Global keyboard shortcuts
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Application menu
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Context menu
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check "></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Dock/Icon
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Isolated browser views
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  File system access
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  …plus more APIs in our docs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img src="#" alt="" />
          </div>
        </div>
      </div>

      <div className="step3">
        <div className="rounded-xl bg-gray-200 px-8 py-12 border flex flex-col lg:flex-row">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 px-3 py-1 w-fit rounded-lg font-medium font-display">
              Step 3
            </span>
            <div className="flex items-center gap-2">
              <h3 className="text-4xl font-bold">Publish </h3>
              <span className="animate-tech translate-y-0 text-xl">🚀</span>
            </div>
            <p className="text-lg font-light">
              One-click will publish your desktop app to your customers and give
              you a download link to put on your website.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Super-fast global CDN
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Download links on your domain
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Magic universal links
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Download analytics
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check "></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Manage version numbers
                </a>
              </li>
              <li className="flex gap-4 items-center">
                <i className="fa-solid fa-check"></i>
                <a
                  className="text-lg  border-b border-black border-opacity-30 hover:border-opacity-80"
                  href=""
                >
                  Native installers for all platforms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img src="#" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepByStep;
