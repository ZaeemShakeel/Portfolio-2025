import React from "react";
import { RiStackLine } from "react-icons/ri";
import { GoArrowRight } from "react-icons/go";
import { FiLayout } from "react-icons/fi";

function Cards() {
  return (
    <>
      <div className="flex justify-between items-center w-[80%] py-20 ">
        <div className="w-[42%] bg-[#F46C38] p-10 rounded-2xl flex flex-col justify-between relative">
          <RiStackLine className="text-5xl" />
          <h1 className="font-bold text-2xl py-7">
            DYNAMIC ANIMATION, MOTION DESIGN
          </h1>
          <button className="border-white w-[12%] flex justify-center items-center border-2 rounded absolute right-8 bottom-6 hover:bg-white group transition-all duration-300">
            <GoArrowRight className="text-3xl text-center group-hover:text-[#F46C38]" />
          </button>
        </div>

        <div className="w-[50%] bg-[#C5FF41] p-10 rounded-2xl flex flex-col justify-between relative">
          <FiLayout className="text-5xl text-black" />
          <h1 className="font-bold text-2xl py-7 text-black">
            FRAMER, FIGMA, WORDPRESS, REACTJS
          </h1>
          <button className="w-[10%] flex justify-center items-center border-2 border-black rounded absolute right-8 bottom-6 hover:bg-black group transition-all duration-300">
            <GoArrowRight className="text-3xl text-center text-black group-hover:text-white" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
