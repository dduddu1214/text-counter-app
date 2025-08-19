import React from 'react';
import { useApp } from '../../context/AppContext';

const StatCard = ({ icon: Icon, value, label, color, delay = 0, isAnimating = false }) => {
  const { isDarkMode } = useApp();

  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' : 'bg-white/70 backdrop-blur-sm border border-gray-200/50'
      } ${isAnimating ? 'animate-pulse' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className={`text-3xl font-bold mb-1 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {value.toLocaleString()}
          </div>
          <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {label}
          </div>
        </div>
        <div className={`p-3 rounded-xl bg-gradient-to-br ${color.replace('text-', 'from-').replace(' to-', ' to-')} text-white opacity-80 group-hover:opacity-100 transition-opacity`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${color.replace('text-', 'from-').replace(' to-', ' to-')} opacity-60`} />
    </div>
  );
};

export default StatCard;