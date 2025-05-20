import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import web1 from "../assets/Recent Works/web1.jpg";
import HTML from "../assets/languages/html.png";
import CSS from "../assets/languages/css.png";
import JS from "../assets/languages/js.png";
import REACT from "../assets/languages/reactjs.png";
import tailwindcss from "../assets/languages/tailwindcss.png";
import nodejs from "../assets/languages/nodejs.png";

function Languages() {
  const lanData = [
    {
      Image: HTML,
      title: "HTML",
      text: "To Create the structure of Website",
    },
    {
      Image: CSS,
      title: "CSS",
      text: "To Design the structure of Website",
    },
    {
      Image: tailwindcss,
      title: "Tailwind CSS",
      text: "To Design the structure of Website",
    },
    {
      Image: JS,
      title: "JavaScript",
      text: "To Design the structure of Website",
    },
    {
      Image: REACT,
      title: "React Js",
      text: "To Design the structure of Website",
    },
    {
      Image: nodejs,
      title: "Node Js",
      text: "To Design the structure of Website",
    },
  ];

  return (
    <div className="my-20">
      <h1 className="font-extrabold text-7xl uppercase">
        Technologies <br /> <span className="text-[#353334]">/Languages</span>
      </h1>
      <div className="flex justify-between gap-3 mt-20 items-center w-[80%] flex-wrap">
        {lanData.map((item, index) => (
          <div className="flex items-center w-[45%] hover:bg-[#1C1A19] transition-all duration-300 rounded-lg p-2 mt-4 cursor-pointer  ">
            <div className="w-[80px] h-[80px] flex justify-center items-center bg-white rounded-xl p-2">
              <img src={item.Image} alt="languages" className="w-full" />
            </div>
            <div className="flex  flex-col items-start ml-6">
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p className="font-normal text-lg text-[#998F8F]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
