import React, { useEffect, useRef, useState } from 'react';
import SkillBar from './Skillbar';

type Skill = {
  name: string;
  level: number;
};

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 70 },
    { name: 'React', level: 75 },
    { name: 'Redux', level: 75 },
    { name: 'Tailwind', level: 65 },
    { name: 'Git', level: 70 },
    { name: 'Firebase', level: 60 },
    { name: 'NestJS', level: 40 },
    { name: 'Typeorm', level: 55 },
    { name: 'MySQL', level: 60 },
  ];

  const skillRef = useRef<HTMLDivElement | null>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    );

    if (skillRef.current) {
      const currentRef = skillRef.current;
      observer.observe(currentRef);
    }

    return () => {
      if (skillRef.current) {
        const currentRef = skillRef.current;
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-gray-900  to-black  text-white py-12 md:py-24 md:px-12 px-6 border-t-b border-[#0f0e19] mb-[1px] "
      id="skills"
      ref={skillRef}
      style={{
        backdropFilter: 'blur(1px)',
      }}
    >
      <h2 className="sm:text-4xl text-2xl font-bold mb-12 text-center select-none ">
        Professional Skills
      </h2>
      <div className="flex justify-around flex-row space-y-6 md:space-y-10 flex-wrap items-baseline">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} startAnimation={startAnimation} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
