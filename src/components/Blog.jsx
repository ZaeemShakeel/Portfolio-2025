import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import web1 from "../assets/Recent Works/web1.jpg";

function Blog() {
  const blogData = [
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
    <div className="mt-10">
      <h1 className="font-extrabold text-7xl uppercase">
        My <br /> <span className="text-[#353334]">THOUGHTS</span>
      </h1>

      {blogData.map((items, index) => (
        <div className="w-[80%] rounded-xl p-4 mt-10 relative hover:bg-[#1C1A19] transition-all duration-300 group">
          <div className="flex items-center">
            <img
              src={items.Image}
              alt="website"
              className="w-[25%] rounded-xl"
            />
            <div className="flex  flex-col items-start ml-6">
              <h2 className="font-bold text-2xl">{items.title}</h2>
              <p className="font-normal text-xl text-[#998F8F]">{items.text}</p>
              <FaLocationArrow className="absolute text-3xl top-4 right-4 transition-all duration-300 group-hover:scale-150" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
