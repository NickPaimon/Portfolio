import React, { useEffect, useState } from 'react';
import logo1 from '../../assets/logos/JavaScript-logo.png';
import logo2 from '../../assets/logos/Typescript_logo.png';
import logo3 from '../../assets/logos/react-logo.png';
import logo4 from '../../assets/logos/redux-logo.png';
import logo5 from '../../assets/logos/tailwind-logo.png';
import logo6 from '../../assets/logos/git-logo.png';
import logo7 from '../../assets/logos/firebase-logo.png';
import logo8 from '../../assets/logos/nest-logo.png';
import logo9 from '../../assets/logos/typeorm-logo.png';
import logo10 from '../../assets/logos/mysql-logo.png';

type SkillBarProps = {
  skill: {
    name: string;
    level: number;
  };
  startAnimation: boolean;
};

const SkillBar: React.FC<SkillBarProps> = ({ skill, startAnimation }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    startAnimation && setWidth(skill.level);
  }, [skill.level, startAnimation]);

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
      className=" hover:border-black border-gray-600 w-[260px] h-[200px] border-2 bg-gradient-to-br from-gray-800 via-gray-900 to-black  shadow-2xl flex flex-col justify-center items-center space-y-4 rounded-lg transition-all duration-200 ease-in-out transform m-4 text-gray-300 hover:text-gray-50 "
      style={{
        backdropFilter: 'sepia(1%)',
      }}
    >
      <div className=" text-center">{skill.name}</div>
      <img
        src={logos[skill.name]}
        alt={`${skill.name} logo`}
        className="h-12 w-12 object-contain"
      />
      <div className="w-3/4 bg-gray-700 rounded-full h-4 dark:bg-gray-700 mt-[10px]">
        <div
          className="rounded-full pb-1 px-1 h-4 font-normal align-middle bg-blue-400 text-right text-gray-100 text-xs"
          style={{
            width: `${width}%`,
            transition: `width 1.5s ${skill.level * 0.01}s`,
          }}
        >
          {skill.level}%
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
