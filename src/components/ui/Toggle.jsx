import React from 'react';
import { useApp } from '../context/AppContext';

const Toggle = ({ checked, onChange, label, className = '' }) => {
  const { isDarkMode } = useApp();

  return (
    <label className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div className={`w-12 h-6 rounded-full transition-all duration-200 ${
          checked 
            ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
            : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
        }`}>
          <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-200 ${
            checked ? 'left-6' : 'left-0.5'
          }`} />
        </div>
      </div>
      {label && <span className="font-medium">{label}</span>}
    </label>
  );
};

export default Toggle;