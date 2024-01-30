import React, { useEffect } from 'react';
import { useGlobalContext } from '../GlobalContext';

const TypographyLoading: React.FC = () => {
  const { loading, setLoading } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const letters = ['L', 'o', 'a', 'd', 'i', 'n', 'g', '...'];

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`inline-block animate-float-${index}`}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TypographyLoading;
