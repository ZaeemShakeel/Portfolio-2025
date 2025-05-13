import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { GoFileDirectory } from "react-icons/go";
import { PiHandbagSimple } from "react-icons/pi";
import { FiTool } from "react-icons/fi";
import { PiNotePencilDuotone } from "react-icons/pi";

function SocialMedia() {
  return (
    <div className="w-[60%] flex justify-evenly items-center">
      <BiHomeAlt className="text-3xl text-black" />
      <GoFileDirectory className="text-3xl text-black" />
      <PiHandbagSimple className="text-3xl text-black" />
      <FiTool className="text-3xl text-black" />
      <PiNotePencilDuotone className="text-3xl text-black" />
    </div>
  );
}

export default SocialMedia;
