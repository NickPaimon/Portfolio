import React, { FC } from 'react';
import { scrollToSection } from '../../utils/scroll';
import { useGlobalContext } from '../../GlobalContext';

const HomePage: FC = () => {
  const { loading } = useGlobalContext();
  return (
    <>
      <div
        id="home"
        className="hero-background bg-gradient-to-br from-gray-700 via-gray-900 to-black h-screen flex justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center h-full space-y-6">
          <p
            className={` ${loading ? 'hidden' : 'visible'} ?sm:text-5xl text-3xl font-bold text-white mb-4 text-center font-roboto select-none z-10`}
          >
            I'm Mykola Pecheniuk
          </p>
          <p className="sm:text-xl text-sm text-gray-300 mb-8 font-roboto select-none z-10">
            Javascript and React/React Native developer
          </p>
          <div className="box-border text-sm cursor-pointer backdrop-blur-lg bg-gray-800 bg-opacity-90 hover:bg-blue-400 text-white font-semibold rounded-full transition duration-300 ease-in-out h-12 w-60">
            <a
              href="#projects"
              onClick={() => scrollToSection(event, `projects`)}
              className=" text-center select-none text-lg font-roboto w-full h-full flex justify-center items-center bg-blue-600 bg-opacity-20 rounded-full transition duration-300 ease-in-out hover:bg-blue-400 hover:bg-opacity-30 "
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
