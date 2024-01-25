import React from "react";
import ExperienceEnvestnet from "./componenents/Envestnet";
import ExperiencePicit from "./componenents/Picit";
import ExperienceCoinlib from "./componenents/Coinlib";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-r from-gray-100 via-blue-500 to-blue-900 pb-12"
    >
      <div>
        <div className="md:px-30 sm:px-15 px-10 h-100 pt-12">
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold text-gray-800 md:top-12 sm:top-8 top-5 text-center font-roboto mb-8">
            Latest projects
          </p>
          <ExperienceEnvestnet />
          <hr className="border-t-2 border-blue-300 my-8 mx-auto w-3/4" />
          <ExperiencePicit />
          <hr className="border-t-2 border-blue-300 my-8 mx-auto w-3/4" />
          <ExperienceCoinlib />
        </div>
      </div>
    </div>
  );
};

export default Projects;
