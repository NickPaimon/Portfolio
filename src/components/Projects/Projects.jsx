import React from "react";
import ExperienceEnvestnet from "./componenents/Envestnet";
import ExperiencePicit from "./componenents/Picit";
import ExperienceCoinlib from "./componenents/Coinlib";

const Projects = () => {
  return (
    <div id="projects">
      <div className="md:px-30 sm:px-15 px-10 h-100 sm:pt-24 pt-12">
        <p className="md:text-4xl sm:text-3xl text-2xl font-bold text-black md:top-12 sm:top-8 top-5 text-center">
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
