import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg ">
      <div className="container mx-auto sm:px-6 py-3 flex justify-around items-center px-2 sm:text-sm text-xs">
        <div
          onClick={() => window.location.reload()}
          className="flex items-center justify-center border border-white rounded-full sm:h-12 sm:w-12 w-6 h-6 overflow-hidden cursor-pointer"
        >
          <img
            src={`${process.env.REACT_APP_BASE_URL || "."}/assets/logo.png`}
            alt="Logo"
          />{" "}
        </div>
        <div className="flex">
          {["skills", "projects", "about", "contact"].map((el) => (
            <Link
              to={el}
              smooth={true}
              className="px-2 sm:px-4  hover:text-blue-300 cursor-pointer "
            >
              {`${el[0].toUpperCase() + el.substring(1)}`}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
