import React, { useEffect, useState } from 'react';

interface PowerWordProps {
  words: string[];
  interval?: number;
}

export const PowerWord: React.FC<PowerWordProps> = ({ words, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 200);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <span
      className={`transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 font-bold`}
    >
      {words[currentIndex]}
    </span>
  );
};