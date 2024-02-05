import React, { FC, useEffect } from 'react';
import ExperienceEnvestnet from './componenents/Envestnet';
import ExperiencePicit from './componenents/Picit';
import ExperienceCoinlib from './componenents/Coinlib';

const Projects: FC = () => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-br from-gray-700 via-gray-900 to-black pb-12"
    >
      <div className="md:px-30 sm:px-15 px-10 h-100 pt-12">
        <p className="md:text-4xl sm:text-3xl text-2xl select-none font-bold text-gray-200 md:top-12 sm:top-8 top-5 text-center font-roboto mb-8">
          Latest projects
        </p>
        <ExperienceEnvestnet />
        <hr className="border-t-2 border-[#0f0e19] my-8 mx-auto w-3/4" />
        <ExperiencePicit />
        <hr className="border-t-2 border-[#0f0e19] my-8 mx-auto w-3/4" />
        <ExperienceCoinlib />
      </div>
    </div>
  );
};

export default Projects;
