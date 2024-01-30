import React, { useEffect } from 'react';
import '../index.css'; // Custom CSS for complex animations
import { useGlobalContext } from '../GlobalContext';

const CustomLoader = () => {
  const { loading, setLoading } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <div className="bg-gradient-to-br from-gray-700 to-gray-800  h-screen overflow-hidden flex justify-center items-center z-40">
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="text-black font-semibold text-md font-bold uppercase absolute right-6 ">
        Redirecting
      </h1>
    </div>
  ) : (
    ''
  );
};

export default CustomLoader;
