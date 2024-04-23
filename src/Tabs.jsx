import React, { useState } from "react";

function Tabs() {
  const [tabNum, setTabNum] = useState(1);
  return (
    <div>
      <div className="flex flex-col justify-between items-center mt-[15%] md:mt-[3%] px-[4%] ">
        <h4 className="font-bold  text-4xl ">Features</h4>
        <p className="text-grayishBlue max-w-lg text-center mt-[8%] md:mt-[3%]">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <section className="mt-[8%] md:mt-[4%] h-full px-[5%]">
        <div className="flex list-none justify-between flex-col md:flex-row mx-auto  md:border-b  max-w-[500px]  items-center md:space-y-0 space-y-5 ">
          <div className="border-b sm:border-0 w-full text-center">
            <li
              className={`cursor-pointer text-gray-600 hover:text-softRed ${
                tabNum == 1 ? "border-red-600 border-b" : ""
              }`}
              onClick={() => setTabNum(1)}
            >
              Simple Bookmarking
            </li>
          </div>
          <div className="border-b sm:border-0 w-full text-center ">
            <li
              className={`cursor-pointer text-gray-600  hover:text-softRed ${
                tabNum == 2 ? "border-red-600 border-b" : ""
              }`}
              onClick={() => setTabNum(2)}
            >
              Speedy Searching
            </li>
          </div>
          <div className="border-b sm:border-0 w-full text-center">
            <li
              className={`cursor-pointer text-gray-600 hover:text-softRed ${
                tabNum == 3 ? "border-red-600 border-b" : ""
              }`}
              onClick={() => setTabNum(3)}
            >
              Easy Sharing
            </li>
          </div>
        </div>

        <div
          className={` ${
            tabNum == 1 ? "flex" : "hidden"
          }  mx-auto flex-col md:flex-row mt-[4%] md:space-x-5  `}
        >
          <div className="md:w-1/2 flex justify-center relative ">
            <div
              className="bg-softBlue absolute w-[75%] h-full  left-0
              rounded-r-full top-[24%] [@media(max-width:767px)]:hidden"
            ></div>
            <img
              className="z-10"
              src="../public/illustration-features-tab-1.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col  md:w-1/2 space-y-8 ">
            <h4 className="font-bold text-3xl text-center mt-[5%] md:mt-0 md:text-left">
              Bookmark in one click
            </h4>
            <p className="text-grayishBlue text-center md:text-left">
              {" "}
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button className="md:w-[130px] md:h-[60px] w-[90px] h-[40px] text-white rounded-lg border-white bg-softBlue font-semibold hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2 mx-auto md:mx-0  ">
              More Info
            </button>
          </div>
        </div>
        <div
          className={` ${
            tabNum == 2
              ? "flex mx-auto flex-col md:flex-row mt-[4%] md:space-x-5"
              : "hidden"
          }`}
        >
          {" "}
          <div className="md:w-1/2 flex justify-center relative ">
            <div
              className="bg-softBlue absolute w-[75%] h-full  left-0
              rounded-r-full top-[24%] [@media(max-width:767px)]:hidden"
            ></div>
            <img
              className="z-10"
              src="../public/illustration-features-tab-2.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col  md:w-1/2 space-y-8 ">
            <h4 className="font-bold text-3xl text-center mt-[5%] md:mt-0 md:text-left">
              Intelligent search
            </h4>
            <p className="text-grayishBlue text-center md:text-left">
              {" "}
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button className="md:w-[130px] md:h-[60px] w-[90px] h-[40px] text-white rounded-lg border-white bg-softBlue font-semibold hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2 mx-auto md:mx-0  ">
              More Info
            </button>
          </div>
        </div>
        <div
          className={` ${
            tabNum == 3
              ? "flex mx-auto flex-col md:flex-row mt-[4%] md:space-x-5"
              : "hidden"
          }`}
        >
          {" "}
          <div className="md:w-1/2 flex justify-center relative ">
            <div
              className="bg-softBlue absolute w-[75%] h-full  left-0
              rounded-r-full top-[24%] [@media(max-width:767px)]:hidden"
            ></div>
            <img
              className="z-10"
              src="../public/illustration-features-tab-3.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col  md:w-1/2 space-y-8 ">
            <h4 className="font-bold text-3xl text-center mt-[5%] md:mt-0 md:text-left">
              Share your bookmarks
            </h4>
            <p className="text-grayishBlue text-center md:text-left">
              {" "}
              Easily share your bookmarks and collections with others. Create a
              shareable a link that you can send at the click of a button.
            </p>
            <button className="md:w-[130px] md:h-[60px] w-[90px] h-[40px] text-white rounded-lg border-white bg-softBlue font-semibold hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2 mx-auto md:mx-0  ">
              More Info
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tabs;
