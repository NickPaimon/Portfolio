import React, { useState, useEffect } from "react";

const SkillBar = ({ skill, level, startAnimation }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    startAnimation && setWidth(level);
  }, [level, startAnimation]);

  return (
    <div className="my-2">
      <div className="text-xl font-medium h-8 text-gray-200">{skill}</div>
      <div className="w-full bg-gray-700 rounded-full h-6 dark:bg-gray-700 mt-2">
        <div
          className="rounded-full pb-1 px-1 h-6 font-normal align-middle bg-gray-200 text-right text-gray-900"
          style={{
            width: `${width}%`,
            transition: `width 1.5s ${level * 0.02}s`,
          }}
        >
          {level}%
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
