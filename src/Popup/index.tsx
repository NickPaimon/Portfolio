import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { Contact } from '../components/About/About';
import '../index.css';

interface PopupProps {
  isPopupVisible: Contact;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isPopupVisible, onClose }) => {
  const [input1, setInput1] = useState('');
  const form = useRef(null);

  const handleSubmit = () => {
    if (input1 === '') return;
    emailjs
      .sendForm(
        'service_v16z5xn',
        'template_b8stfet',
        form.current,
        'Iv69px-Mfrvf5iJ9M',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    onClose();
  };

  const handlePhoneClick = () => {
    if (input1 === '') return;

    const CHAT_ID = process.env.REACT_APP_CHAT_ID;
    const HTTP_API_TOKEN = process.env.REACT_APP_HTTP_API_TOKEN;

    const url = `https://api.telegram.org/bot${HTTP_API_TOKEN}/sendMessage`;
    console.log(CHAT_ID);
    const options = {
      chat_id: CHAT_ID,
      text: input1,
    };
    axios
      .post(url, options)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    onClose();
  };

  return (
    <>
      {(isPopupVisible === Contact.Email ||
        isPopupVisible === Contact.Phone) && (
        <div className="fixed inset-0 bg-black opacity-50"></div>
      )}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-1/2 sm:w-3/4 w-11/12 md:h-1/2 sm:h-3/4 h-[60vh] border-2 border-black bg-gradient-to-br from-gray-700 via-gray-900 to-black p-5 rounded shadow-lg flex flex-col items-center justify-center space-y-4 animate-fadeIn">
        <p className="text-white md:text-2xl sm:text-xl text-lg ">
          Contact me{' '}
          {isPopupVisible === Contact.Email
            ? 'on email'
            : isPopupVisible === Contact.Phone
              ? 'on telegram'
              : ''}
        </p>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full md:px-10 sm:px-6 px-4"
        >
          <input
            type="text"
            value={input1}
            name="message"
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Please leave your contact details here, and I will write to you."
            className="w-full md:px-3 sm:px-2 px-1 py-2 mb-3 text-gray-700 border rounded-lg focus:outline-none"
          />
          <div className="flex justify-between mt-4">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={
                isPopupVisible === Contact.Phone
                  ? handlePhoneClick
                  : isPopupVisible === Contact.Email
                    ? handleSubmit
                    : undefined
              }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Popup;
