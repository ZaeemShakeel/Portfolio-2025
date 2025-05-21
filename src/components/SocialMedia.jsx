import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { GoFileDirectory } from "react-icons/go";
import { PiHandbagSimple } from "react-icons/pi";
import { FiTool } from "react-icons/fi";
import { PiNotePencilDuotone } from "react-icons/pi";

function SocialMedia() {
  return (
    <div className="w-[60%] flex justify-evenly items-center hover:text-orange-500">
      <BiHomeAlt className="text-3xl text-black  hover:text-orange-500 transition-all duration-200 hover:scale-150" />
      <GoFileDirectory className="text-3xl text-black hover:text-orange-500 transition-all duration-200 hover:scale-150" />
      <PiHandbagSimple className="text-3xl text-black hover:text-orange-500 transition-all duration-200 hover:scale-150" />
      <FiTool className="text-3xl text-black hover:text-orange-500 transition-all duration-200 hover:scale-150" />
      <PiNotePencilDuotone className="text-3xl text-black hover:text-orange-500 transition-all duration-200 hover:scale-150" />
    </div>
  );
}

export default SocialMedia;
