import React from 'react';

const StatCard = ({ icon: Icon, value, label, color, isAnimating = false }) => {
  return (
    <div
      className={`relative rounded-xl p-4 transition-all duration-200 border bg-white dark:bg-slate-800/80 border-slate-100 dark:border-slate-700/80 hover:shadow-md group ${
        isAnimating ? 'animate-pulse-soft' : ''
      }`}
      role="status"
      aria-label={`${label}: ${value.toLocaleString()}`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${color} text-white shadow-sm`}>
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className={`text-2xl font-bold tracking-tight text-slate-800 dark:text-white`}>
            {value.toLocaleString()}
          </div>
          <div className="text-xs font-medium text-slate-400 dark:text-slate-500 truncate">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
