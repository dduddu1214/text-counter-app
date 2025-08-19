import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  className = '', 
  onClick,
  ...props 
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/25';
      case 'secondary':
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700 shadow-lg hover:shadow-gray-500/25';
      case 'danger':
        return 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-red-500/25';
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-green-500/25';
      default:
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/25';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-4 py-2';
      case 'lg':
        return 'px-6 py-4 text-lg';
      default:
        return 'px-4 py-2';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group flex items-center justify-center gap-2 rounded-xl font-medium 
        transition-all duration-200 hover:scale-105 
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${getVariantClasses()} 
        ${getSizeClasses()} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;