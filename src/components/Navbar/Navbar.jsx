import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div
          onClick={() => window.location.reload()}
          className="flex items-center justify-center border border-white rounded-full h-12 w-12 overflow-hidden cursor-pointer"
        >
          <img
            src={`${process.env.REACT_APP_BASE_URL}/assets/logo.png`}
            alt="Logo"
            className="h-12"
          />{" "}
        </div>
        <div className="flex">
          <Link
            to="skills"
            smooth={true}
            className="px-4 hover:text-blue-300 cursor-pointer"
          >
            Skills
          </Link>

          <Link
            to="projects"
            smooth={true}
            className="px-4 hover:text-blue-300 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="about"
            smooth={true}
            className="px-4 hover:text-blue-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            className="px-4 hover:text-blue-300 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
