import React, { FC, useState } from 'react';
import Popup from '../../Popup';
import Technical from './ components/Technical';
import Projects from './ components/Projects';
import Connect from './ components/Connect';
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
      className="bg-gradient-to-br from-gray-700 via-gray-900 to-black pb-12"
    >
      <div className="md:px-30 sm:px-15 px-10 h-100 pt-12">
        <p className="md:text-4xl sm:text-3xl text-2xl select-none font-bold text-gray-200 md:top-12 sm:top-8 top-5 text-center font-roboto mb-8">
          Technical Expertise & Tool Proficiency
        </p>
        <Technical />
        <Projects />
        <Connect
          handleEmailClick={handleEmailClick}
          handlePhoneClick={handlePhoneClick}
        />
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
