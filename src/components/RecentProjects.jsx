import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import web1 from "../assets/Recent Works/web1.jpg";

function RecentProjects() {
  const recentData = [
    {
      Image: web1,
      title: "Revo",
      text: "Free Framer Template",
    },
    {
      Image: web1,
      title: "NajmAI",
      text: "SaaS Framer Templte",
    },
    {
      Image: web1,
      title: "Nashra",
      text: "Free Framer Template",
    },
  ];

  return (
    <div>
      <h1 className="font-extrabold text-9xl uppercase">
        Recent <br /> <span className="text-[#353334]">Projects</span>
      </h1>

      {recentData.map((items, index) => (
        <div className="w-[80%] rounded-xl p-4 mt-10 relative hover:bg-[#1C1A19] transition-all duration-300 group">
          <div className="flex items-center">
            <img
              src={items.Image}
              alt="website"
              className="w-[25%] rounded-xl"
            />
            <div className="flex  flex-col items-start ml-6">
              <h2 className="font-bold text-4xl">{items.title}</h2>
              <p className="font-normal text-2xl text-[#998F8F]">
                {items.text}
              </p>
              <FaLocationArrow className="absolute text-3xl top-4 right-4 transition-all duration-300 group-hover:scale-150" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentProjects;
