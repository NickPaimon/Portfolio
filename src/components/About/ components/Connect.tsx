/* eslint-disable react/prop-types */
import React from 'react';

const Connect = ({ handleEmailClick, handlePhoneClick }) => {
  return (
    <div className="bg-[#0f0e19] text-gray-300 md:p-8 sm:p-6 p-4 md:my-24 sm:my-18 my-12 rounded-md opacity-100 font-roboto ">
      <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
        Connect with Me
      </h2>
      <div className="md:text-xl sm:text-lg text-base flex flex-col">
        <div className="p-2">
          <span onClick={handleEmailClick} className="text-gray-300">
            Email:
            <span className="font-semibold hover:font-bold  ml-1 cursor-pointer ">
              snegovik3500@gmail.com
            </span>
          </span>
        </div>
        <div className="p-2">
          <span onClick={handlePhoneClick} className="text-gray-300">
            Telegram:
            <span className="a ml-1 cursor-pointer font-semibold hover:font-bold">
              +380 (66) 678-58-59
            </span>
          </span>
        </div>
      </div>
      <div>
        <p className="md:text-xl sm:text-lg text-base p-2 ">
          Explore my work on{' '}
          <a
            href="https://github.com/NickPaimon"
            target="_blank"
            className="font-semibold hover:font-bold ml-1 cursor-pointer"
            rel="noreferrer"
          >
            GitHub
          </a>{' '}
          and{' '}
          <a
            href="https://www.upwork.com/freelancers/~011ed05000b4d2e14c"
            target="_blank"
            className="font-semibold hover:font-bold ml-1 cursor-pointer"
            rel="noreferrer"
          >
            Upwork
          </a>
        </p>
      </div>
    </div>
  );
};

export default Connect;
