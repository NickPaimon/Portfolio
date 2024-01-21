import React, { useEffect, useRef, useState } from "react";
import SkillBar from "./Skillbar";

const Skills = () => {
  const skillRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      setStartAnimation(entry.isIntersecting);
    });
    observer.observe(skillRef.current);
  }, []);

  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "React", level: 75 },
    { name: "Redux", level: 75 },
    { name: "Tailwind", level: 65 },
    { name: "Git", level: 70 },
    { name: "Firebase", level: 60 },
    { name: "NestJS", level: 40 },
    { name: "Typeorm", level: 55 },
    { name: "MySQL", level: 60 },
  ];

  return (
    <div
      className="bg-gray-900 text-white py-12 md:py-24 md:px-12 px-6"
      id="skills"
      ref={skillRef}
    >
      <div className=" ">
        <h2 className="sm:text-4xl text-2xl font-bold mb-12 text-center ">
          Professional Skills
        </h2>
        <div className="flex justify-around flex-row space-y-6 md:space-y-10 flex-wrap items-start">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              id={index}
              skill={skill.name}
              level={skill.level}
              startAnimation={startAnimation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
