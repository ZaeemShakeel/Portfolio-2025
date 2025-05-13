import React from "react";

function SectionOne() {
  const expData = [
    {
      title: "+12",
      text: "YEARS OF EXPERIENCE",
    },
    {
      title: "+46",
      text: "PROJECTS COMPLETED",
    },
    {
      title: "+20",
      text: "WORLDWIDE CLIENTS",
    },
  ];

  return (
    <>
      <h1 className="font-extrabold text-9xl">
        SOFTWARE <br /> <span className="text-[#353334]">ENGINEER</span>
      </h1>

      <p className="font-semibold text-2xl text-[#998F8F] w-[50%] py-10">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>

      <div className="flex justify-between items-center w-[60%]">
        {expData.map((item, index) => (
          <div>
            <h1 className="font-bold text-7xl">{item.title}</h1>
            <p className="text-xl font-semibold text-[#998F8F]">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionOne;
