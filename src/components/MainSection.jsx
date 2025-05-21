import React from "react";
import SectionOne from "./SectionOne";
import Cards from "./Cards";
import RecentProjects from "./RecentProjects";
import Experiences from "./Experiences.JSX";
import Languages from "./Languages";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "../components/Footer";

function MainSection() {
  return (
    <div className="w-2/3 bg-[#151312] flex flex-col justify-start pl-40 pt-20 absolute right-0">
      <SectionOne />
      <Cards />
      <RecentProjects />
      <Experiences />
      <Languages />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainSection;
