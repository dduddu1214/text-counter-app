import React from 'react';
import { Sparkles, Sun, Moon } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Header = () => {
  const { isDarkMode, setIsDarkMode } = useApp();

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-30" />
          <div className="relative p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            글자 수 세기
          </h1>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
            실시간 텍스트 분석 도구
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="group relative p-3 rounded-xl transition-all duration-300 hover:scale-110 bg-white/70 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700/50 backdrop-blur-sm"
        >
          <div className="relative">
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-12 transition-transform" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600 group-hover:-rotate-12 transition-transform" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;