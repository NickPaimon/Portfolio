import React from "react";

const AboutMe = () => {
  return (
    <div
      id="about"
      className=" bg-gray-800 text-white lg:px-40 smd:px-30 sm:px-25 px:20 h-100 pt-20"
    >
      <div className="md:p-16 sm:p-12 p-8">
        <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
          About Mykola Pecheniuk
        </h2>
        <p className="md:text-xl sm:text-lg text-base mb-36">
          Mykola Pecheniuk, a React/React Native Developer from Ukraine with
          over three years of experience, brings a unique blend of military
          precision and tech innovation to the field of front-end development.
        </p>
        <div className=" mb-36">
          <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
            Professional Journey
          </h2>
          <p className="md:text-xl sm:text-lg text-base mb-36">
            Transitioning from a decade-long career as a Military Helicopter
            Pilot and an onboard interpreter in the DR Congo, I have developed
            strong leadership, communication, and problem-solving skills. My
            educational background from Kharkiv Air Force University laid the
            foundation for my tech journey.
          </p>
        </div>
        <div className="mb-36">
          <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
            Technical Skills
          </h2>
          <p className="md:text-xl sm:text-lg text-base mb-36">
            Specializing in React, React Native, Redux, and Redux Toolkit, my
            expertise extends to HTML5, CSS3, JavaScript, TypeScript, Typeorm,
            MySQL, and Nest.js. Skilled in Git and Firebase for version control
            and CI/CD, I am efficient in environments like VS Code, Jira, Slack,
            Teams, Trello, Android Studio, and Xcode.
          </p>
        </div>
        <div className="mb-36">
          <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
            Project Highlights
          </h2>
          <p className="md:text-xl sm:text-lg text-base mb-36">
            My portfolio includes significant roles in projects like Envestnet,
            Picit, Coinlib, and Performa, showcasing my ability to lead and
            innovate in diverse development scenarios.
          </p>
        </div>
        <div className="mb-36">
          <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
            Connect with Me
          </h2>
          {/* <div className="flex flex-col items-center"> */}
          <p className="md:text-xl sm:text-lg text-base">
            Email: snegovik3500@gmail.com | Phone: +380 (66) 678-58-59
          </p>
          <p className="md:text-xl sm:text-lg text-base md:mb-36 sm:mb-24 mb-12">
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
