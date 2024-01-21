import React from "react";

const ExperienceEnvestnet = () => {
  return (
    <div className="bg-white text-gray-800 p-8 my-24 shadow-md">
      <div className="flex items-center mb-6">
        <a href="https://www.envestnet.com/" target="_blank" rel="noreferrer">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/assets/envestnet.png`}
            alt="Envestnet Logo"
            className="mr-4 w-36 px-2 py-1 bg-black  cursor-pointer"
          />
        </a>
        <div>
          <h3 className="text-2xl font-semibold">
            Envestnet | React Developer
          </h3>
          <p className="text-md text-gray-500">
            Duration: 16 months | Team Size: 18 members
          </p>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Led the transition of a critical financial application's front-end
          from version 4 to 5, focusing on high scalability and robust
          performance.
        </li>
        <li>
          Developed a comprehensive widget library and design system for the new
          version, significantly enhancing the UI/UX aspects.
        </li>
        <li>
          Optimized application performance and played a crucial role in
          resolving critical bugs, ensuring smooth operation post-transition.
        </li>
        <li>
          Utilized key technologies such as React, Redux Toolkit, Highcharts JS,
          TypeScript, and SCSS to build and maintain high-quality software
          solutions.
        </li>
      </ul>
    </div>
  );
};

export default ExperienceEnvestnet;
