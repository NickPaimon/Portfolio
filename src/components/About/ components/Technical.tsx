import React from 'react';

const Technical = () => {
  const text =
    'Specializing in React, React Native, Redux, and Redux Toolkit, my expertise extends to HTML5, CSS3, JavaScript, TypeScript, Typeorm, MySQL, and Nest.js. Skilled in Git and Firebase for version control and CI/CD, I am efficient in environments like VS Code, Jira, Slack, Teams, Trello, Android Studio, and Xcode.';

  const keywords = [
    'React',
    'React',
    'Native,',
    'Redux,',
    'Redux',
    'Toolkit,',
    'HTML5,',
    'CSS3,',
    'JavaScript,',
    'TypeScript,',
    'Typeorm,',
    'MySQL,',
    'Nest.js.',
    'Git',
    'Firebase',
    'CI/CD,',
    'VS',
    'Code,',
    'Jira,',
    'Slack,',
    'Trello,',
    'Teams,',
    'Android',
    'Studio,',
    'Xcode.',
  ];

  return (
    <div className="bg-[#0f0e19] text-gray-300 md:p-8 sm:p-6 p-4 md:my-24 sm:my-18 my-12 rounded-md font-roboto ">
      <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
        Technical Skills
      </h2>
      <p className="md:text-xl sm:text-lg text-base mb-12">
        {text.split(' ').map((word, index) =>
          keywords.includes(word) ? (
            <span key={index} className="font-bold text-gray-300 shadow-sm">
              {word + ' '}
            </span>
          ) : (
            word + ' '
          ),
        )}
      </p>
    </div>
  );
};

export default Technical;
