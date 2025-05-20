import React from "react";

function Contact() {
  return (
    <div className="my-20">
      <h1 className="font-extrabold text-7xl uppercase">
        LET'S WORK <br /> <span className="text-[#353334]">TOGETHER</span>
      </h1>

      <div className="w-[80%] flex justify-between items-center mt-10">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="" className="text-[#adadad] pb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-md p-2 bg-[#353334] hover:text-orange-500"
          />
        </div>

        <div className="flex flex-col w-[48%]">
          <label htmlFor="" className="text-[#adadad] pb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="You@email.com"
            className="rounded-md p-2 bg-[#353334] hover:text-orange-500"
          />
        </div>
      </div>

      <div className="flex flex-col w-[80%]">
        <label htmlFor="" className="text-[#adadad] py-3">
          Budget
        </label>
        <input
          type="email"
          placeholder="ex $100/-"
          className="rounded-md p-2 bg-[#353334] hover:text-orange-500"
        />
      </div>

      <div className="flex flex-col w-[80%]">
        <label htmlFor="" className="text-[#adadad] py-3">
          Message
        </label>
        <input
          type="text"
          placeholder="Your Message Here...."
          className="rounded-md p-2 bg-[#353334] hover:text-orange-500 h-[150px] text-center"
        />
      </div>

      <button className="bg-orange-500 w-[80%] p-2 font-bold rounded-md mt-6 hover:bg-white hover:text-orange-500 transition-all duration-3 00">
        Submit
      </button>
    </div>
  );
}

export default Contact;
