import React from "react";

function Box() {
  const dataBox = [
    {
      svg: "../public/logo-chrome.svg",
      title: "Add to Chrome",
      subTitle: "Minimum Version 62",
      textButton: "Add & Install Extension",
    },
    {
      svg: "../public/logo-firefox.svg",
      title: "Add to Firefox",
      subTitle: "Minimum Version 55",
      textButton: "Add & Install Extension",
    },
    {
      svg: "../public/logo-opera.svg",
      title: "Add to Opera",
      subTitle: "Minimum Version 46",
      textButton: "Add & Install Extension",
    },
  ];
  return (
    <section>
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
          Download the extension
        </h2>
        <p className="max-w-lg mx-auto text-center text-grayishBlue">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-5 items-center mt-[10%] mx-[10%]">
        {dataBox.map((item) => {
          return (
            <div
              key={item.svg}
              className="flex flex-col items-center  w-full md:w-1/3 rounded-lg space-y-4 text-center py-6 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] "
            >
              <img src={item.svg} alt="" className="" />
              <h6 className=" text-xl font-bold">{item.title}</h6>
              <p className=" text-gray-400">{item.subTitle}</p>
              <button className="w-[80%]   py-3 text-white duration-500 ease-in-out transition-all border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue">
                {item.textButton}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Box;
