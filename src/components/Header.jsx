import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { GoFileDirectory } from "react-icons/go";
import { PiHandbagSimple } from "react-icons/pi";
import { FiTool } from "react-icons/fi";
import { PiNotePencilDuotone } from "react-icons/pi";

function Header() {
  return (
    <div className="bg-[#151312] h-40 flex justify-center items-center">
      <div className="w-1/5 bg-[#1C1A19] p-5 rounded-2xl flex justify-evenly items-center">
        <BiHomeAlt className="text-3xl hover:text-orange-500 transition-all duration-200 hover:scale-150" />
        <GoFileDirectory className="text-3xl hover:text-orange-500 transition-all duration-200 hover:scale-150" />
        <PiHandbagSimple className="text-3xl hover:text-orange-500 transition-all duration-200 hover:scale-150" />
        <FiTool className="text-3xl hover:text-orange-500 transition-all duration-200 hover:scale-150" />
        <PiNotePencilDuotone className="text-3xl hover:text-orange-500 transition-all duration-200 hover:scale-150" />
      </div>
    </div>
  );
}

export default Header;
