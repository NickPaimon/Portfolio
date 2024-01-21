import React from "react";
import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <div
      className="relative h-screen bg-no-repeat bg-cover bg-center "
      style={{ backgroundImage: `url('assets/hero.png')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-bold text-white mb-4">
            I'm Mykola Pecheniuk
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Javascript and React/React Native developer
          </p>
          <Link
            to="projects"
            smooth={true}
            className="text-lg cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
