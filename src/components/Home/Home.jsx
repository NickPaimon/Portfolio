import React from "react";
import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <div
      className="relative h-screen bg-no-repeat bg-cover bg-center "
      style={{
        // backgroundImage: 'url("Portfolio/assets/hero.jpg")',
        backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/assets/hero.jpg)`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="sm:text-5xl text-3xl font-bold text-white mb-4 text-center">
            I'm Mykola Pecheniuk
          </h1>
          <p className="sm:text-xl text-sm text-gray-300 mb-6">
            Javascript and React/React Native developer
          </p>
          <Link
            to="projects"
            smooth={true}
            className="sm:text-lg text-sm cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
