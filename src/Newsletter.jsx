import React from "react";

function Newsletter() {
  return (
    <div className="bg-softBlue flex flex-col items-center text-white py-[6.5%] justify-between space-y-6">
      <p className="text-lg tracking-widest uppercase text-center">
        35,000+ Already Joined
      </p>
      <p className="font-bold text-3xl md:text-4xl text-center max-w-[440px] ">
        Stay up-to-date with what we're doing
      </p>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 w-full  items-center justify-center ">
        <input
          className="rounded-lg  text-black  w-[80%] md:w-[15%] py-[10px] px-3"
          type="text"
          placeholder="Enter your email address"
        />

        <button className=" font-semibold px-6 py-3  duration-200 transform rounded-lg  before:ease relative  overflow-hidden   bg-softRed  shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:shadow-blue-500 hover:before:-translate-x-40">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
