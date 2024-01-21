import React from "react";

const Aboutme = () => {
  return (
    <div className="bg-white text-gray-800 md:p-8 sm:p-6 p-4 md:my-24 sm:my-18 my-12 shadow-md font-roboto">
      <div className="container mx-auto">
        <div className="mb-36 sm:mb-30">
          <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
            Technical Skills
          </h2>
          <p className="md:text-xl sm:text-lg text-base mb-36 sm:mb-30">
            Specializing in React, React Native, Redux, and Redux Toolkit, my
            expertise extends to HTML5, CSS3, JavaScript, TypeScript, Typeorm,
            MySQL, and Nest.js. Skilled in Git and Firebase for version control
            and CI/CD, I am efficient in environments like VS Code, Jira, Slack,
            Teams, Trello, Android Studio, and Xcode.
          </p>
        </div>
        <hr className="border-gray-700 mb-10" />
        <div className="mb-36 sm:mb-30">
          <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
            Project Highlights
          </h2>
          <p className="md:text-xl sm:text-lg text-base mb-36 sm:mb-30">
            My portfolio includes significant roles in projects like Envestnet,
            Picit, Coinlib, and Performa, showcasing my ability to lead and
            innovate in diverse development scenarios.
          </p>
        </div>
        <hr className="border-gray-700 mb-10" />
        <div className="mb-36 sm:mb-30">
          <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
            Connect with Me
          </h2>
          <p className="md:text-xl sm:text-lg text-base">
            Email: snegovik3500@gmail.com | Phone: +380 (66) 678-58-59
          </p>
          <p className="md:text-xl sm:text-lg text-base mb-36 sm:mb-30 sm:mb-24">
            Explore my work on{" "}
            <a
              href="https://github.com/NickPaimon"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.upwork.com/freelancers/~011ed05000b4d2e14c"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
              rel="noreferrer"
            >
              Upwork
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
