import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

function Experiences() {
  const recentData = [
    {
      title: "Front-end Developer -",
      company: "Wilcode",
      text: "Specializing in creating responsive and visually appealing websites. My expertise includes HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React for custom web development, delivering unique and dynamic solutions. Additionally, I use WordPress for CMS-based web development, providing flexible and scalable websites tailored to client requirements. At Wilcode, I focus on merging modern design with functionality to deliver exceptional web solutions.",
      exp: "Jan 2024 - Present",
    },
    {
      title: "Digital Marketer -",
      company: "Wilcode",
      text: "Senior digital marketer with 1.5 years of experience specializing in social media design and ads management, with a proven track record of driving engagement and conversions. Skilled in HR management, bringing a well-rounded skill set to enhance team dynamics and ensure project success.",
      exp: "Jun 2022 - Dec 2023",
    },
  ];

  return (
    <div>
      <h1 className="font-extrabold text-7xl uppercase mt-40">
        Personal <br /> <span className="text-[#353334]">Experiences</span>
      </h1>

      {recentData.map((items, index) => (
        <div className="w-[80%] rounded-xl p-4 mt-10 relative hover:bg-[#1C1A19] transition-all duration-300 group">
          <div className="flex items-center">
            <div className="flex  flex-col items-start ml-6">
              <h2 className="font-bold text-2xl">
                {items.title}{" "}
                <span className="font-normal text-xl text-[#525252]">
                  {items.company}
                </span>
              </h2>
              <p className="font-normal text-lg text-[#998F8F] py-5">
                {items.text}
              </p>
              <p className="font-normal text-lg text-[#525252]">{items.exp}</p>
              <FaLocationArrow className="absolute text-3xl top-4 right-4 transition-all duration-300 group-hover:scale-150" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experiences;
