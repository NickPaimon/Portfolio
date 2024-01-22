import React from "react";

const Footer = () => {
  return (
    <div
      className=" bg-gradient-to-r from-blue-100 via-blue-500 to-blue-900 text-white text-center md:px-36 sm:px-24 px-12  font-roboto"
      id="contact"
    >
      <div className="flex justify-around items-center p-12 space-y-4 md:space-y-0">
        <img
          src={`${process.env.REACT_APP_BASE_URL || "."}/assets/photo.jpg`}
          alt="Mykola Pecheniuk"
          className="rounded-full h-20 w-20 border-2 border-gray-500 object-cover mb-4 md:mb-0 md:mr-4 "
        />
        <div>
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Mykola Pecheniuk. All rights
            reserved.
          </p>
          <p className="text-xs">
            Connect with me on my
            <a
              className="text-gray-900 font-bold hover:text-blue-300 ml-1"
              href="mailto:snegovik3500@gmail.com"
            >
              Email
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
