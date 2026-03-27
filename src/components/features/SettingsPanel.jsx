import React from 'react';
import { useApp } from '../../context/AppContext';

const SettingsPanel = () => {
  const { includeSpaces, setIncludeSpaces } = useApp();

  return (
    <div className="rounded-xl border p-4 bg-white dark:bg-slate-800/80 border-slate-100 dark:border-slate-700/80">
      <label className="flex items-center justify-between cursor-pointer group">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">공백 포함하여 계산</span>
        <div className="relative">
          <input
            type="checkbox"
            checked={includeSpaces}
            onChange={(e) => setIncludeSpaces(e.target.checked)}
            className="sr-only"
            aria-label="공백 포함하여 계산"
          />
          <div className={`w-10 h-6 rounded-full transition-colors duration-200 ${
            includeSpaces ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-600'
          }`}>
            <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
              includeSpaces ? 'translate-x-[18px]' : 'translate-x-0.5'
            }`} />
          </div>
        </div>
      </label>
    </div>
  );
};

export default SettingsPanel;
