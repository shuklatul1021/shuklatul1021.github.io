import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg
        width="40"
        height="24"
        viewBox="0 0 40 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-pulse-subtle"
      >
        <path
          d="M14 2C14 2 18 2 22 6C26 10 26 14 26 14C26 14 26 18 22 22M14 22C14 22 18 22 22 18C26 14 26 10 26 10C26 10 26 6 22 2"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          className="path-animation"
        />
        <circle cx="14" cy="2" r="2" fill="#4F46E5" className="node-animation" />
        <circle cx="26" cy="2" r="2" fill="#4F46E5" className="node-animation" />
        <circle cx="14" cy="22" r="2" fill="#7C3AED" className="node-animation" />
        <circle cx="26" cy="22" r="2" fill="#7C3AED" className="node-animation" />
        <defs>
          <linearGradient id="gradient" x1="14" y1="2" x2="26" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        AlgoSolve
      </span>
    </div>
  );
};