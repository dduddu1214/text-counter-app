import React from 'react';
import { useApp } from '../../context/Appcontext';

const Card = ({ children, className = '', ...props }) => {
  const { isDarkMode } = useApp();

  return (
    <div 
      className={`rounded-2xl p-6 transition-all duration-300 ${
        isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' : 'bg-white/70 backdrop-blur-sm border border-gray-200/50'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;