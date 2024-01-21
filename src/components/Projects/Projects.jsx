import React from "react";
import ExperienceEnvestnet from "./componenents/Envestnet";
import ExperiencePicit from "./componenents/Picit";
import ExperienceCoinlib from "./componenents/Coinlib";

const Projects = () => {
  return (
    <div id="projects">
      <div className="sm:px-40 px-10 h-100 sm:pt-24 pt-12">
        <p className="sm:text-4xl md: text-2xl font-bold text-black sm:top-12 top-8 text-center">
          {console.log("dadadaddas")}
          Lastest projects
        </p>
        <ExperienceEnvestnet />
        <ExperiencePicit />
        <ExperienceCoinlib />
        <div className="h-16"></div>
      </div>
    </div>
  );
};

export default Projects;
