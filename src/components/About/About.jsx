import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className=" bg-gray-800 text-white px-40 h-100 pt-20">
      <div className="p-6">
        <h2 className="text-3xl text-center font-semibold mb-12">
          About Mykola Pecheniuk
        </h2>
        <p className="text-xl mb-36">
          Mykola Pecheniuk, a React/React Native Developer from Ukraine with
          over three years of experience, brings a unique blend of military
          precision and tech innovation to the field of front-end development.
        </p>
        <div className=" mb-36">
          <h3 className="text-3xl text-center font-semibold mb-12">
            Professional Journey
          </h3>
          <p className="text-xl">
            Transitioning from a decade-long career as a Military Helicopter
            Pilot and an onboard interpreter in the DR Congo, I have developed
            strong leadership, communication, and problem-solving skills. My
            educational background from Kharkiv Air Force University laid the
            foundation for my tech journey.
          </p>
        </div>
        <div className="mb-36">
          <h3 className="text-3xl text-center font-semibold mb-12">
            Technical Skills
          </h3>
          <p className="text-xl">
            Specializing in React, React Native, Redux, and Redux Toolkit, my
            expertise extends to HTML5, CSS3, JavaScript, TypeScript, Typeorm,
            MySQL, and Nest.js. Skilled in Git and Firebase for version control
            and CI/CD, I am efficient in environments like VS Code, Jira, Slack,
            Teams, Trello, Android Studio, and Xcode.
          </p>
        </div>
        <div className="mb-36">
          <h3 className="text-3xl text-center font-semibold mb-12">
            Project Highlights
          </h3>
          <p className="text-xl">
            My portfolio includes significant roles in projects like Envestnet,
            Picit, Coinlib, and Performa, showcasing my ability to lead and
            innovate in diverse development scenarios.
          </p>
        </div>
        <div className="mb-36">
          <h3 className="text-3xl text-center font-semibold mb-12">
            Connect with Me
          </h3>
          <p className="text-xl">
            Email: snegovik3500@gmail.com | Phone: +380 (66) 678-58-59
          </p>
          <p className="text-xl">
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

export default AboutMe;
