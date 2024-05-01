import React from "react";
import "./index.css";
function Hero() {
  return (
    <div className="md:flex md:flex-row-reverse mt-[8%] ">
      <div className=" relative md:w-1/2  mx-auto ">
        <div className="bg-hero"></div>
        <img
          src="../public/illustration-hero.svg"
          alt=""
          className=" relative mx-auto  "
        />
      </div>
      <div className="md:w-1/2 flex flex-col md:ml-[3%] ">
        <h2 className="font-bold text-3xl text-center md:text-left md:text-6xl ">
          {" "}
          A Simple Bookmark Manager
        </h2>
        <p className="mx-auto text-center max-w-md md:text-left md:mx-0 md:text-2xl text-gray-400 mt-[2%]">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-center items-center space-x-[4%] md:justify-start mt-[4%]">
          <button className="border-2 border-softBlue p-4 text-sm font-semibold rounded shadow-md text-white bg-softBlue md:text-base hover:bg-white hover:text-softBlue">
            Get It On Chrome
          </button>
          <button className="border-2 border-gray-300 p-4 text-sm font-semibold rounded shadow-md text-black bg-gray-300 md:text-base hover:bg-white hover:text-gray-600">
            Get It On Firefox
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
