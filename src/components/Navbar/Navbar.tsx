import React, { FC } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar: FC = () => {
  const offset = window.innerWidth <= 640 ? -50 : -70;
  return (
    <nav className="fixed w-full bg-gradient-to-br from-gray-700 via-gray-900 to-black text-black shadow-lg backdrop-filter z-10">
      <div>
        <div className="container mx-auto sm:px-6 py-3 flex justify-around items-center px-2 sm:text-sm text-xs z-40">
          <div
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            className="flex justify-center items-center border-2 border-gray-700 rounded-full sm:h-12 sm:w-12 w-6 h-6 overflow-hidden cursor-pointer"
          >
            <motion.img
              src={`${process.env.REACT_APP_BASE_URL || '.'}/assets/logo.png`}
              alt="Logo"
              className="z-20 align-middle"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 2 }}
            />{' '}
          </div>
          <div className="flex">
            {['skills', 'projects', 'about', 'contact'].map((el) => (
              <Link
                to={el}
                key={el}
                smooth={true}
                offset={offset}
                className="px-2 text-lg sm:px-4 text-white hover:text-blue-300 cursor-pointer "
              >
                {`${el[0].toUpperCase() + el.substring(1)}`}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
