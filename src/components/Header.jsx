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
        <BiHomeAlt className="text-3xl" />
        <GoFileDirectory className="text-3xl" />
        <PiHandbagSimple className="text-3xl" />
        <FiTool className="text-3xl" />
        <PiNotePencilDuotone className="text-3xl" />
      </div>
    </div>
  );
}

export default Header;
