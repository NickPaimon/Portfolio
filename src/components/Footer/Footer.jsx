import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white text-center px-44" id="contact">
      <hr className="border-gray-700" />
      <div className="flex justify-around items-center p-12">
        <img
          src={`${process.env.REACT_APP_BASE_URL || "."}/assets/photo.jpg`}
          alt="Mykola Pecheniuk"
          className="rounded-full h-20 w-20 border-2 border-gray-400 object-cover mb-4 md:mb-0 md:mr-4"
        />
        <div>
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Mykola Pecheniuk. All rights
            reserved.
          </p>
          <p className="text-xs">
            Connect with me on my
            <a
              className="text-blue-500 hover:text-blue-300 ml-1"
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
