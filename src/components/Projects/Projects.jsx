import React from "react";
import ExperienceEnvestnet from "./componenents/Envestnet";
import ExperiencePicit from "./componenents/Picit";
import ExperienceCoinlib from "./componenents/Coinlib";

const Projects = () => {
  return (
    <div id="projects">
      <div className="px-40 h-100 pt-24">
        <p className="text-4xl font-bold text-black top-12 text-center">
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
