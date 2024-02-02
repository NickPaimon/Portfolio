import React, { FC } from 'react';
import { scrollToSection } from '../../utils/scroll';
import { useGlobalContext } from '../../GlobalContext';

const Navbar: FC = () => {
  const { loading } = useGlobalContext();
  return !loading ? (
    <nav className="fixed w-full bg-gradient-to-br from-gray-700 via-gray-900 to-black text-black shadow-lg backdrop-filter z-10">
      <div>
        <div className="container mx-auto sm:px-6 py-3 flex justify-around items-center px-2 sm:text-sm text-xs z-40">
          <div
            onClick={() => scrollToSection(event, `home`)}
            className="flex justify-center items-center border-2 border-gray-700 rounded-full sm:h-16 sm:w-16 w-12 h-12 overflow-hidden cursor-pointer"
          >
            <img
              src={`${process.env.REACT_APP_BASE_URL}assets/logo.png`}
              alt="Logo"
              className="z-20 align-middle w-full transition duration-300 ease-in-out hover:shadow-lg"
            />{' '}
          </div>
          <div className="flex">
            {['skills', 'projects', 'about', 'contact'].map((el) => (
              <a
                href={`${el}`}
                key={el}
                onClick={() => scrollToSection(event, `${el}`)}
                className="px-2 text-lg sm:px-4 text-gray-400 cursor-pointer shadow-md hover:shadow-xs hover:shadow-gray-400 rounded-lg hover:bg-gray-500 hover:text-white transition-colors duration-200"
              >
                {`${el[0].toUpperCase() + el.substring(1)}`}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <></>
  );
};

export default Navbar;
