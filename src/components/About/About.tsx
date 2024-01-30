import React, { FC, useState } from 'react';
import Popup from '../../Popup';
export enum Contact {
  Email = 'email',
  Phone = 'phone',
  Off = 'off',
}

const Aboutme: FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(Contact.Off);

  const handleEmailClick = () => {
    setIsPopupVisible(Contact.Email);
  };

  const handlePhoneClick = () => {
    setIsPopupVisible(Contact.Phone);
  };

  return (
    <div
      id="about"
      className="bg-white text-gray-800 px-4 p-12  shadow-md font-roboto border-t border-gray-500"
    >
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
            Technical Skills
          </h2>
          <p className="md:text-xl sm:text-lg text-base mb-12">
            Specializing in React, React Native, Redux, and Redux Toolkit, my
            expertise extends to HTML5, CSS3, JavaScript, TypeScript, Typeorm,
            MySQL, and Nest.js. Skilled in Git and Firebase for version control
            and CI/CD, I am efficient in environments like VS Code, Jira, Slack,
            Teams, Trello, Android Studio, and Xcode.
          </p>
        </div>
        <hr className="border-gray-700 mb-10" />
        <div className="mb-12 ">
          <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
            Project Highlights
          </h2>
          <p className="md:text-xl sm:text-lg text-base mb-12">
            My portfolio includes significant roles in projects like Envestnet,
            Picit, Coinlib, and Performa, showcasing my ability to lead and
            innovate in diverse development scenarios.
          </p>
        </div>
        <hr className="border-gray-700 mb-10" />
        <div className="mb-12">
          <h2 className="md:text-3xl sm:text-2xl text-xl text-center font-semibold mb-12">
            Connect with Me
          </h2>
          <div className="md:text-xl sm:text-lg text-base flex flex-col">
            <span
              className="text-blue-400 cursor-pointer p-2"
              onClick={handleEmailClick}
            >
              <span className="text-black">Email:</span> snegovik3500@gmail.com
            </span>

            <span
              className="text-blue-400 cursor-pointer p-2 "
              onClick={handlePhoneClick}
            >
              <span className="text-black">Telegram:</span>
              +380 (66) 678-58-59
            </span>
          </div>
          <p className="md:text-xl sm:text-lg text-base p-2 ">
            Explore my work on{' '}
            <a
              href="https://github.com/NickPaimon"
              target="_blank"
              className="text-blue-400 hover:text-blue-300"
              rel="noreferrer"
            >
              GitHub
            </a>{' '}
            and{' '}
            <a
              href="https://www.upwork.com/freelancers/~011ed05000b4d2e14c"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 pb-16"
              rel="noreferrer"
            >
              Upwork
            </a>
          </p>
        </div>
      </div>
      {(isPopupVisible === Contact.Email ||
        isPopupVisible === Contact.Phone) && (
        <Popup
          isPopupVisible={isPopupVisible}
          onClose={() => setIsPopupVisible(Contact.Off)}
        />
      )}
    </div>
  );
};

export default Aboutme;
