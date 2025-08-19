import React from 'react';
import { useApp } from '../context/AppContext';

const Input = ({ 
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  icon: Icon,
  ...props 
}) => {
  const { isDarkMode } = useApp();

  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full rounded-xl border text-sm transition-all duration-200 
          focus:ring-2 focus:ring-blue-500/50 focus:outline-none
          ${Icon ? 'pl-10 pr-4' : 'px-4'} py-3
          ${isDarkMode 
            ? 'bg-gray-700/50 border-gray-600/50 text-gray-200 placeholder-gray-400' 
            : 'bg-white/70 border-gray-300/50 text-gray-700 placeholder-gray-500'
          } 
          backdrop-blur-sm
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default Input;