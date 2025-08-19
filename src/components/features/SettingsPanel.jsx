import React from 'react';
import { Settings } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const SettingsPanel = () => {
  const { isDarkMode, includeSpaces, setIncludeSpaces } = useApp();

  return (
    <div className={`rounded-2xl p-6 transition-all duration-300 ${
      isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' : 'bg-white/70 backdrop-blur-sm border border-gray-200/50'
    }`}>
      <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
        <Settings className="w-5 h-5" />
        설정
      </h3>
      
      <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            checked={includeSpaces}
            onChange={(e) => setIncludeSpaces(e.target.checked)}
            className="sr-only"
          />
          <div className={`w-12 h-6 rounded-full transition-all duration-200 ${
            includeSpaces 
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
              : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}>
            <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-200 ${
              includeSpaces ? 'left-6' : 'left-0.5'
            }`} />
          </div>
        </div>
        <span className="font-medium">공백 포함하여 계산</span>
      </label>
    </div>
  );
};

export default SettingsPanel;