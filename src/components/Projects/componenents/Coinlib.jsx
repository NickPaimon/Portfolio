import React from "react";
import Logo from "../../../assets/coinlib.svg";

const ExperienceCoinlib = () => {
  return (
    <div className="bg-white text-gray-800 p-6 md:p-12 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <a href="https://coinlib.io/" target="_blank" rel="noreferrer">
          <img
            src={Logo}
            alt="Coinlib Logo"
            className="w-40 b rounded bg-black mr-3 border-4"
          />
        </a>
        <div>
          <h3 className="text-2xl font-semibold">
            Coinlib | React Native Developer
          </h3>
          <p className="text-md text-gray-500">
            Duration: 6 months | Team Size: 11 members
          </p>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Concentrated on front-end development with React Native, adding new
          features that enhanced the overall user experience.
        </li>
        <li>
          Directed code refactoring efforts to improve application performance
          and maintainability.
        </li>
        <li>
          Key contributor in the development process documentation, ensuring
          best practices and continuity.
        </li>
        <li>
          Instrumental in the app's successful deployment to the app markets,
          fortifying Coinlib's presence for cryptocurrency traders and
          enthusiasts.
        </li>
      </ul>
    </div>
  );
};

export default ExperienceCoinlib;
