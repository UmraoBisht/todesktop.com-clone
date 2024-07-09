
function Hero() {
  function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
      const isIntersecting = entries[0].isIntersecting;
      console.log(isIntersecting);
    };
    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-300 via-orange-300 to-transparent">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:items-center sm:text-center sm:pt-4">
        <div className="flex w-fit items-center border border-yellow-300 bg-yellow-100 rounded-lg px-3 py-1 my-6  sm:mt-10 gap-2 shadow-md hover:shadow-xl hover:-translate-y-1 transition ease-in-out group">
          <div className="w-2 h-2 rounded-full bg-yellow-400 border border-yellow-600"></div>
          <p className="font-display font-bold text-yellow-600">
            v0.21.1:{" "}
            <span className="text-yellow-800 font-semibold">
              Find-in-page bug fixes
            </span>
          </p>
          <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300"></i>
        </div>
        <div className="hidden features-section sm:flex items-center gap-4 my-6">
          <div className="flex justify-center items-center gap-2 text-gray-500">
            <i className="fa-solid fa-code"></i>
            <p className="text-gray-600 font-semibold">Code optional</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2726 1.27302C11.9002 1.27198 11.5335 1.36501 11.2067 1.54347C11.0887 1.17932 10.8788 0.851739 10.5973 0.592328C10.3158 0.332917 9.9722 0.150436 9.59964 0.062493C9.22708 -0.0254497 8.83815 -0.0158859 8.47036 0.0902621C8.10258 0.19641 7.76836 0.395559 7.49996 0.668492C7.1903 0.352445 6.79352 0.135793 6.36022 0.0461694C5.92693 -0.0434545 5.47676 -0.00198909 5.06713 0.165277C4.65749 0.332544 4.30697 0.61803 4.06025 0.985326C3.81353 1.35262 3.6818 1.78508 3.68187 2.22755V3.50024H2.72734C2.13729 3.50234 1.57201 3.73767 1.15478 4.1549C0.737544 4.57213 0.502218 5.13741 0.500122 5.72746V7.00016C0.500122 8.85663 1.2376 10.6371 2.55033 11.9498C3.86305 13.2625 5.64349 14 7.49996 14C9.35643 14 11.1369 13.2625 12.4496 11.9498C13.7623 10.6371 14.4998 8.85663 14.4998 7.00016V3.50024C14.4977 2.91019 14.2624 2.34491 13.8451 1.92768C13.4279 1.51045 12.8626 1.27512 12.2726 1.27302V1.27302ZM13.2271 7.00016C13.2271 8.51909 12.6237 9.97581 11.5497 11.0499C10.4756 12.1239 9.01889 12.7273 7.49996 12.7273C5.98103 12.7273 4.52431 12.1239 3.45026 11.0499C2.37621 9.97581 1.77282 8.51909 1.77282 7.00016V5.72746C1.77282 5.47431 1.87339 5.23152 2.05239 5.05252C2.2314 4.87351 2.47419 4.77294 2.72734 4.77294H3.68187V6.68199C3.68187 6.85076 3.74891 7.01262 3.86825 7.13196C3.98759 7.25129 4.14944 7.31834 4.31821 7.31834C4.48698 7.31834 4.64884 7.25129 4.76818 7.13196C4.88752 7.01262 4.95456 6.85076 4.95456 6.68199V2.22755C4.95456 1.97439 5.05513 1.7316 5.23414 1.5526C5.41314 1.37359 5.65593 1.27302 5.90909 1.27302C6.16224 1.27302 6.40503 1.37359 6.58404 1.5526C6.76304 1.7316 6.86361 1.97439 6.86361 2.22755V4.77294C6.86361 4.94171 6.93065 5.10357 7.04999 5.22291C7.16933 5.34225 7.33119 5.40929 7.49996 5.40929C7.66873 5.40929 7.83059 5.34225 7.94993 5.22291C8.06926 5.10357 8.13631 4.94171 8.13631 4.77294V2.22755C8.13631 1.97439 8.23687 1.7316 8.41588 1.5526C8.59489 1.37359 8.83768 1.27302 9.09083 1.27302C9.34399 1.27302 9.58677 1.37359 9.76578 1.5526C9.94479 1.7316 10.0454 1.97439 10.0454 2.22755V4.77294C10.0454 4.94171 10.1124 5.10357 10.2317 5.22291C10.3511 5.34225 10.5129 5.40929 10.6817 5.40929C10.8505 5.40929 11.0123 5.34225 11.1317 5.22291C11.251 5.10357 11.3181 4.94171 11.3181 4.77294V3.50024C11.3181 3.24709 11.4186 3.0043 11.5976 2.82529C11.7766 2.64629 12.0194 2.54572 12.2726 2.54572C12.5257 2.54572 12.7685 2.64629 12.9475 2.82529C13.1265 3.0043 13.2271 3.24709 13.2271 3.50024V7.00016Z"
                fill="#6D6E73"
              ></path>
            </svg>
            <p className="text-gray-600 font-semibold">Drag & drop builder</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-desktop"></i>
            <p className="text-gray-600 font-semibold">Windows, Mac, Linux</p>
          </div>
        </div>
        <h1 className="text-5xl font-semibold sm:text-7xl">
          Web app to desktop app in minutes
        </h1>
        <p className="text-2xl sm:text-2xl text-gray-800 my-8 sm:leading-normal">
          Take your web app codebase and transform it into a cross platform
          desktop app and native functionality.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center text-center mt-4">
          <button className="text-lg bg-primary p-3 sm:px-8 rounded-xl text-white font-semibold">
            Download now
          </button>
          <button className="text-lg border border-gray-600 sm:px-8 bg-gray-100 p-3 rounded-xl font-semibold">
            Read docs
          </button>
        </div>
      </div>
      <div className="companies-container flex flex-col gap-8">
        <div className="companies-title flex justify-center gap-4 pt-8 md:pt-10">
          <img className="translate-y-2" src="src/assets/asset 2.svg" alt="" />
          <h1 className="font-semibold">APP POWERED BY TODESKTOP</h1>
          <img
            className="translate-y-2 scale-x-[-1]"
            src="src/assets/asset 2.svg"
            alt=""
          />
        </div>
        <div className="lines-group flex flex-col gap-4 overflow-hidden">
          <div
            id="line1"
            className="-translate-x-20 line1 flex gap-4 w-screen scroll-x"
          >
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 3.png"
                alt=""
              />
              <span className="text-[12px] md:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 4.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 5.png"
                alt=""
              />

              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 6.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 7.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 8.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
          </div>
          <div className="-translate-x-5 line2 flex gap-4 w-screen">
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 3.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 4.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 5.png"
                alt=""
              />

              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 6.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 7.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 8.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
          </div>
          <div className="md:hidden -translate-x-20 line3 flex gap-4 w-screen">
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 3.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 4.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 5.png"
                alt=""
              />

              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 6.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 7.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 8.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
            <div className="flex flex-col justify-center items-center min-w-24 min-h-24 bg-white border border-gray-300 rounded-xl">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="src/assets/asset 9.png"
                alt=""
              />
              <span className="text-[12px] sm:text-[16px] font-semibold">
                Unbounce
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
