import React from "react";
import Profile from "../components/Profile";
import MainSection from "../components/MainSection";

function Home() {
  return (
    <div className="flex justify-between">
      <Profile />
      <MainSection />
    </div>
  );
}

export default Home;
