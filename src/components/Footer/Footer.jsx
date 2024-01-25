import React from "react";

const Footer = () => {
  return (
    <div
      className=" bg-gradient-to-r from-blue-100 via-blue-500 to-blue-900 text-white text-center mb:py-16 sm:py-12 py-4 md:px-36 sm:px-24 px-12 border-t border-gray-500 font-roboto"
      id="contact"
    >
      <div className="flex justify-around align-center items-center ">
        <img
          src={`${process.env.REACT_APP_BASE_URL || "."}/assets/photo.jpg`}
          alt="Mykola Pecheniuk"
          className="rounded-full h-20 w-20 border-2 border-gray-500 object-cover"
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
