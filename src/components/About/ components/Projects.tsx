import React from 'react';

const Projects = () => {
  const text =
    'My portfolio includes significant roles in projects like Envestnet, Picit, Coinlib, and Performa, showcasing my ability to lead and innovate in diverse development scenarios.';

  const keywords = ['Envestnet,', 'Picit,', 'Coinlib,', 'Performa,'];

  return (
    <div className="bg-white  text-gray-800 md:p-8 sm:p-6 p-4 md:my-24 sm:my-18 my-12 rounded-md border-2 border-blue-300 shadow-md font-roboto hover:border-blue-600 hover:shadow-xl hover:shadow-slate-950">
      <div className="mb-12 ">
        <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
          Project Highlights
        </h2>
        <p className="md:text-xl sm:text-lg text-base mb-12">
          {text.split(' ').map((word, index) =>
            keywords.includes(word) ? (
              <span key={index} className="font-bold text-gray-600 shadow-sm">
                {word + ' '}
              </span>
            ) : (
              word + ' '
            ),
          )}
        </p>
      </div>
    </div>
  );
};

export default Projects;
