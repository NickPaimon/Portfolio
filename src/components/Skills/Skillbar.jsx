import React, { useState, useEffect } from "react";
import logo1 from "../../assets/logos/JavaScript-logo.png";
import logo2 from "../../assets/logos/Typescript_logo.png";
import logo3 from "../../assets/logos/react-logo.png";
import logo4 from "../../assets/logos/redux-logo.png";
import logo5 from "../../assets/logos/tailwind-logo.png";
import logo6 from "../../assets/logos/git-logo.png";
import logo7 from "../../assets/logos/firebase-logo.png";
import logo8 from "../../assets/logos/nest-logo.png";
import logo9 from "../../assets/logos/typeorm-logo.png";
import logo10 from "../../assets/logos/mysql-logo.png";

const SkillBar = ({ skill, level, startAnimation, id }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    startAnimation && setWidth(level);
  }, [level, startAnimation]);

  const logos = {
    JavaScript: logo1,
    TypeScript: logo2,
    React: logo3,
    Redux: logo4,
    Tailwind: logo5,
    Git: logo6,
    Firebase: logo7,
    NestJS: logo8,
    Typeorm: logo9,
    MySQL: logo10,
  };
  return (
    <div
      className={` bg-blend-multiply border-2 border-gray-500 hover:border-gray-400 w-[260px]  h-[200px]   bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl flex flex-col justify-center items-center space-y-4 rounded-lg transition-all duration-200 ease-in-out transform m-4 ${
        id === 0 ? "md:ml-4 md:mt-10 sm:pb-0 sm:mt-6" : ""
      }`}
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="text-gray-300 text-center hover:text-gray-100">
        {skill}
      </div>
      <img
        src={logos[skill]}
        alt={`${skill} logo`}
        className="h-12 w-12 object-contain"
      />
      <div className="w-3/4 bg-gray-700 rounded-full h-4 dark:bg-gray-700 mt-[10px]">
        <div
          className={`rounded-full pb-1 px-1 h-4 font-normal align-middle bg-blue-400 text-right text-gray-100 text-xs`}
          style={{
            width: `${width}%`,
            transition: `width 1.5s ${level * 0.01}s`,
          }}
        >
          {level}%
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
