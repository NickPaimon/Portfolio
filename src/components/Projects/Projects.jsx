import React from "react";
import ExperienceEnvestnet from "./componenents/Envestnet";
import ExperiencePicit from "./componenents/Picit";
import ExperienceCoinlib from "./componenents/Coinlib";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-r from-blue-100 via-blue-500 to-blue-900  py-12"
    >
      <div className="md:px-30 sm:px-15 px-10 h-100 sm:pt-24 pt-12">
        <p className="md:text-4xl sm:text-3xl text-2xl font-bold text-gray-800 md:top-12 sm:top-8 top-5 text-center font-roboto mb-8">
          Latest projects
        </p>
        <ExperienceEnvestnet />
        <hr className="border-gray-700 mb-10" />
        <ExperiencePicit />
        <hr className="border-gray-700 mb-10" />
        <ExperienceCoinlib />
      </div>
    </div>
  );
};

export default Projects;
