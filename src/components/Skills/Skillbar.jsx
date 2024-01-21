import React, { useState, useEffect } from "react";

const SkillBar = ({ skill, level, startAnimation }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    startAnimation && setWidth(level);
  }, [level, startAnimation]);

  return (
    <div className="ms:my-2 my-1.5">
      <div className="ms:text-xl text-mb font-medium ms:h-8 h-5 text-gray-200">
        {skill}
      </div>
      <div className="w-full bg-gray-700 rounded-full ms:h-6 h-4 dark:bg-gray-700 mt-2">
        <div
          className="rounded-full pb-1 px-1 ms:h-6 h-4 font-normal align-middle bg-gray-200 text-right text-gray-900 ms:text-lg text-xs"
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
