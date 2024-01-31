import React, { FC } from 'react';

const ExperienceEnvestnet: FC = () => {
  return (
    <div className="bg-white text-gray-800 md:p-8 sm:p-6 p-4 md:my-24 sm:my-18 my-12 rounded-md border-2 border-blue-300 shadow-md font-roboto hover:border-blue-600 hover:shadow-xl hover:shadow-slate-950">
      <div className="flex justify-around items-center mb-6">
        <a href="https://www.envestnet.com/" target="_blank" rel="noreferrer">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/assets/envestnet.png`}
            alt="Envestnet Logo"
            className="md:w-36 sm:w-24 w-20 px-2 py-1 bg-black cursor-pointer"
          />
        </a>
        <div className="px-2">
          <h3 className="md:text-2xl sm:text-lg text-base font-semibold">
            Envestnet | React Developer
          </h3>
          <p className="md:text-lg sm:text-base text-sm text-gray-500">
            Duration: 16 months | Team Size: 18 members
          </p>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-4 md:text-lg sm:text-sm text-xs">
        <li className="text-gray-600 font-bold shadow-sm">
          Led the transition of a critical financial application's front-end
          from version 4 to 5, focusing on high scalability and robust
          performance.
        </li>
        <li className="text-gray-600 font-bold shadow-sm">
          Developed a comprehensive widget library and design system for the new
          version, significantly enhancing the UI/UX aspects.
        </li>
        <li className="text-gray-600 font-bold shadow-sm">
          Optimized application performance and played a crucial role in
          resolving critical bugs, ensuring smooth operation post-transition.
        </li>
        <li className="text-gray-600 font-bold shadow-sm">
          Utilized key technologies such as React, Redux Toolkit, Highcharts JS,
          TypeScript, and SCSS to build and maintain high-quality software
          solutions.
        </li>
      </ul>
    </div>
  );
};

export default ExperienceEnvestnet;
