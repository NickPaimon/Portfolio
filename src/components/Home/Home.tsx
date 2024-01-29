import React, { FC } from 'react';
import { Link } from 'react-scroll';

const HomePage: FC = () => {
  return (
    <div className="hero-background  bg-gradient-to-br from-gray-700 via-gray-900 to-black h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center h-full space-y-6">
        <h1 className="sm:text-5xl text-3xl font-bold text-white mb-4 text-center font-roboto">
          I'm Mykola Pecheniuk
        </h1>
        <p className="sm:text-xl text-sm text-gray-300 mb-8 font-roboto">
          Javascript and React/React Native developer
        </p>
        <div className="box-border text-sm cursor-pointer backdrop-blur-lg bg-gray-800 bg-opacity-90 hover:bg-blue-400 text-white font-semibold rounded-full transition duration-300 ease-in-out h-12 w-60">
          <Link
            to="projects"
            smooth={true}
            offset={-70} // Adjust this value as needed
            className=" text-center text-lg font-roboto w-full h-full flex justify-center items-center bg-blue-600 bg-opacity-20 rounded-full transition duration-300 ease-in-out hover:bg-blue-400 hover:bg-opacity-30 "
          >
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
