import React from "react";
import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <div
      className="hero-background h-screen flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(to right, #e0e0e0, #808080, #404040)`,
      }}
    >
      <div className="flex flex-col justify-center items-center h-full space-y-6">
        <h1 className="sm:text-5xl text-3xl font-bold text-white mb-4 text-center font-roboto">
          I'm Mykola Pecheniuk
        </h1>
        <p className="sm:text-xl text-sm text-gray-300 mb-6 font-roboto">
          Javascript and React/React Native developer
        </p>
        <Link
          to="projects"
          smooth={true}
          offset={-70} // Adjust this value as needed
          className="sm:text-lg text-sm cursor-pointer bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out font-roboto"
        >
          View My Projects
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
