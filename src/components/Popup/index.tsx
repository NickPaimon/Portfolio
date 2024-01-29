import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../index.css';

interface PopupProps {
  onClose: () => void;
  isPopupVisible: boolean;
}

const Popup: React.FC<PopupProps> = ({ onClose, isPopupVisible }) => {
  const form = useRef();
  const [input1, setInput1] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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

  return (
    <>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black opacity-50"></div>
      )}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border-2 border-black bg-gradient-to-br from-gray-700 via-gray-900 to-black p-5 rounded shadow-lg flex flex-col items-center justify-center space-y-16 animate-fadeIn">
        <h1 className="text-white text-2xl ">Contact me</h1>
        <form className="w-full" onSubmit={handleSubmit} ref={form}>
          <input
            type="text"
            value={input1}
            name="message"
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Please leave your contact details here, and I will write to you."
            className="w-full px-3 py-2 mb-3 text-gray-700 border rounded-lg focus:outline-none"
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
              type="submit"
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
