import React from "react";

function Pricing() {
  return (
    <section id="#pricing" className="px-6 py-4 mx-auto lg:px-8 mt-10 max-w-7xl">
      <h2 className="text-5xl font-semibold mb-[4rem]">
        Choose a plan that fits your needs
      </h2>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-gray-300 bg-gray-100 flex flex-col gap-8 p-6">
            <h3 className="text-4xl font-semibold">Free</h3>
            <p className="text-gray-500 text-lg">
              For personal use or testing your app before deploying to
              customers.
            </p>
            <div className="flex flex-col gap-6">
              <p className="text-gray-500 font-semibold text-lg">
                KEY FEATURES
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-center">
                  <i class="fa-solid fa-check text-gray-600"></i>
                  <span>Free for personal use</span>
                </li>
                <li className="flex gap-3 items-center">
                  <i class="fa-solid fa-check text-gray-600"></i>
                  <span>Run app locally</span>
                </li>
                <li className="flex gap-3 items-center">
                  <i class="fa-solid fa-xmark text-gray-600"></i>
                  <span>No Code Signing</span>
                </li>
                <li className="flex gap-3 items-center">
                  <i class="fa-solid fa-xmark text-gray-600"></i>
                  <span>No Native Installers</span>
                </li>
              </ul>
            </div>
            <button className="border border-gray-400 text-[#3238f2] rounded-xl py-4 px-2 font-bold hover:border-gray-700">
              Get Started
            </button>
          </div>
          <div className="rounded-3xl border border-gray-300 bg-gray-100 flex flex-col gap-6 p-6">
            <h3 className="text-4xl font-semibold">Essential</h3>
            <p className="text-gray-500 text-lg">For simple desktop apps.</p>
            <p>
              <span className="font-bold text-2xl">$99</span>/month
            </p>
            <div className="flex flex-col gap-6">
              <p className="text-gray-500 font-semibold text-lg">
                KEY FEATURES
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-center">
                  <i class="fa-solid fa-check text-gray-600"></i>
                  <span>Windows, Mac & Linux</span>
                </li>
                <li className="flex gap-3 items-center">
                  <i class="fa-solid fa-check text-gray-600"></i>
                  <span>Code Signing</span>
                </li>
                <li className="flex gap-3 items-center">
                  <i class="fa-solid fa-check text-gray-600"></i>
                  <span>Native Installers</span>
                </li>
                <li className="flex gap-3 items-center">
                  <i class="fa-solid fa-check text-gray-600"></i>
                  <span>Email/chat support</span>
                </li>
              </ul>
            </div>
            <button className="border border-gray-400 text-[#3238f2] rounded-xl py-4 px-2 font-bold hover:border-gray-700">
              Get Started
            </button>
          </div>
          <div className="relative rounded-3xl border border-gray-300 bg-gray-100 flex flex-col gap-8 p-6">
            <div className="absolute right-8 top-0 -translate-y-1/2 transform rounded-full bg-gradient-to-br from-yellow-300 via-purple-300 to-red-300 p-[1px] w-fit">
              <p className="rounded-full bg-blue-300 px-4 py-1.5 text-sm font-semibold text-[#3238f2]">
                Most popular
              </p>
            </div>
            <h3 className="text-4xl font-semibold">Professional</h3>
            <p className="text-gray-500 text-lg">
              For sophisticated desktop apps.
            </p>
            <p>
              <span className="font-bold text-2xl">$240</span>/month
            </p>
            <div className="flex flex-col gap-6">
              <p className="text-gray-500 font-semibold text-lg">
                EVERYTHING IN ESSENTIAL PLUS
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-center">
                  <i className="fa-solid fa-check text-gray-600"></i>
                  <span>Plugins</span>
                </li>
                <li className="flex gap-3 items-center">
                  <i class="fa-solid fa-check text-gray-600"></i>
                  <span>Branded Download links</span>
                </li>
                <li className="flex gap-3 items-center">
                  <i class="fa-solid fa-check text-gray-600"></i>
                  <span>Analytics</span>
                </li>
                <li className="flex gap-3 items-center">
                  <i class="fa-solid fa-check text-gray-600"></i>
                  <span>Access to restricted API</span>
                </li>
              </ul>
            </div>
            <button className="border bg-[#3238f2] text-white rounded-xl py-4 px-2 font-bold hover:bg-opacity-90">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row bg-black rounded-2xl py-6 mt-10 gap-8">
          <div className="px-8 flex gap-6 flex-col">
            <span className="text-gray-300 text-lg font-semibold">
              DEDICATED SUPPORT AND EXPERT GUIDANCE.
            </span>
            <h3 className="text-5xl font-bold text-white">Enterprise</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white text-lg">
              <li className="flex gap-4 items-center">
                <i class="fa-solid fa-check text-white"></i>
                <span>Whiteglove onboarding</span>
              </li>
              <li className="flex gap-4 items-center">
                <i class="fa-solid fa-check text-white"></i>
                <span>Custom features</span>
              </li>
              <li className="flex gap-4 items-center">
                <i class="fa-solid fa-check text-white"></i>
                <span>Priority support</span>
              </li>
              <li className="flex gap-4 items-center">
                <i class="fa-solid fa-check text-white"></i>
                <span>Shared Slack channel</span>
              </li>
              <li className="flex gap-4 items-center">
                <i class="fa-solid fa-check text-white"></i>
                <span>Dedicated account manager</span>
              </li>
              <li className="flex gap-4 items-center">
                <i class="fa-solid fa-check text-white"></i>
                <span>Custom Billing</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center self-center bg-[#fafafc] mx-6 py-8 px-12 rounded-xl gap-8 w-5/6 lg:w-2/6">
            <div className="grid place-items-center gap-8">
              <p className="text-gray-500 font-semibold text-center text-lg">
                Secure, reliable cross-platform desktop apps for enterprise
                teams.
              </p>
              <button className="bg-[#3238f2] w-full text-white rounded-xl py-4 px-2 font-bold hover:bg-opacity-90">
                Contact Sales
              </button>
              <span className="text-sm text-gray-500 text-center">
                You may also live chat with us by{" "}
                <a href="#" className="border-b text-gray-900 border-gray-900">
                  clicking here
                </a>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
