import React from "react";
import ExperienceEnvestnet from "./componenents/Envestnet";
import ExperiencePicit from "./componenents/Picit";
import ExperienceCoinlib from "./componenents/Coinlib";

const Projects = () => {
  return (
    <div id="projects">
      <p className="text-3xl font-bold text-black mt-8 text-center">
        Lastest projects
      </p>
      <ExperienceEnvestnet />
      <ExperiencePicit />
      <ExperienceCoinlib />
    </div>
  );
};

export default Projects;
