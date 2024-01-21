import React from "react";

const ExperiencePicit = () => {
  return (
    <div className="bg-white text-gray-800 md:p-8  sm:p-6 p-4 md:my-24 sm:my-18 my-12 shadow-md">
      <div className="flex justify-betweem items-center mb-6">
        <a
          href="https://appstor.io/go/appstore/649082204"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${process.env.REACT_APP_BASE_URL}/assets/picit.png`}
            alt="Picit Logo"
            className="md:w-16 sm:w-12 w-8 cursor-pointer"
          />
        </a>

        <div className="px-2">
          <h3 className="md:text-2xl sm:text-lg text-base font-semibold">
            Picit | React Native Developer
          </h3>
          <p className="md:text-lg ms:text-base text-sm text-gray-500">
            Duration: 7 months | Team Size: 5 members
          </p>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-2 md:text-lg sm:text-sm text-xs">
        <li>
          Tasked with leading the development of Picit from its conceptual
          architecture all the way to deployment.
        </li>
        <li>
          Successfully managed and oversaw the app's launch on both Google Play
          Market and the Apple App Store.
        </li>
        <li>
          Played an integral role in establishing the app’s foundational
          structure, ensuring scalability and efficient performance.
        </li>
        <li>
          Developed and implemented features that enhanced user engagement,
          leveraging React Native, Redux Toolkit, and TypeScript.
        </li>
      </ul>
    </div>
  );
};

export default ExperiencePicit;
