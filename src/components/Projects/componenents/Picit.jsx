import React from "react";

const ExperiencePicit = () => {
  return (
    <div className="bg-white text-gray-800 p-8 my-24 shadow-md">
      <div className="flex items-center mb-6">
        <a
          href="https://appstor.io/go/appstore/649082204"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${process.env.REACT_APP_BASE_URL}/assets/picit.png`}
            alt="Picit Logo"
            className="mr-4 p-1 w-16 r cursor-pointer"
          />
        </a>

        <div>
          <h3 className="text-2xl font-semibold">
            Picit | React Native Developer
          </h3>
          <p className="text-md text-gray-500">
            Duration: 7 months | Team Size: 5 members
          </p>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-2">
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
