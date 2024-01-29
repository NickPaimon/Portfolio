import React, { FC } from 'react';
import logo from '../../../assets/coinlib.svg';

const ExperienceCoinlib: FC = () => {
  return (
    <div className="bg-white text-gray-800 md:p-8 sm:p-6 p-4 md:my-24 sm:my-18 my-12 rounded-md border-2 border-blue-300 shadow-md font-roboto">
      <div className="flex justify-around items-center mb-6">
        <a href="https://coinlib.io/" target="_blank" rel="noreferrer">
          <img
            src={logo}
            alt="Coinlib Logo"
            className="md:w-36 sm:w-24 w-20 px-2 py-1 bg-black cursor-pointer"
          />
        </a>
        <div className="px-2">
          <h3 className="md:text-2xl sm:text-lg text-base font-semibold">
            Coinlib | React Native Developer
          </h3>
          <p className="md:text-lg sm:text-base text-sm text-gray-500">
            Duration: 6 months | Team Size: 11 members
          </p>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-4 md:text-lg sm:text-sm text-xs">
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
