import React from "react";
import SocialMedia from "./SocialMedia";
import ProfilePic from "../assets/profile.png";

function Profile() {
  return (
    <div className="bg-[#151312] w-1/3 h-screen flex flex-col justify-evenly items-center fixed top-0">
      <div className="bg-white w-[70%] h-[90%] rounded-2xl flex flex-col justify-evenly ml-20 items-center">
        <div
          className="w-[200px] h-[250px] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${ProfilePic})` }}
        ></div>
        <h1 className="font-extrabold text-4xl text-black">Zaeem Shakeel</h1>
        <p className="font-semibold text-[#6A6B6E] text-xl text-center">
          A Software Engineer who has developed countless innovative solutions.
        </p>
        <SocialMedia />
      </div>
    </div>
  );
}

export default Profile;
