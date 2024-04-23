import React from "react";
import { FaChevronDown } from "react-icons/fa";

function Accordin({ question, answer, onClick, open }) {
  return (
    <div className="[&>*]:mx-auto" onClick={onClick}>
      <div className=" flex justify-between w-[70%] my-5 ">
        <p>{question}</p>
        <FaChevronDown className={`${open?"rotate-180 transition-all ease-in-out duration-500":"transition-all ease-in-out duration-500"}`} />
      </div>
      <p className={`${open ? "flex w-[70%] transition-all ease-in-out duration-500 mb-5" : "hidden transition-all ease-in-out duration-500"}`}>{answer}</p>
      <div className="w-[70%] h-[0.5px] bg-black"/>
    </div>
  );
}

export default Accordin;
 