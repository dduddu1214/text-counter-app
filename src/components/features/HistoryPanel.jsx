import React from 'react';
import { useApp } from '../../context/AppContext';

const HistoryPanel = () => {
  const { isDarkMode, history } = useApp();

  if (history.length === 0) return null;

  return (
    <div className={`rounded-2xl p-6 transition-all duration-300 ${
      isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' : 'bg-white/70 backdrop-blur-sm border border-gray-200/50'
    }`}>
      <h3 className="font-bold mb-4 text-lg">최근 기록</h3>
      
      <div className="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
        {history.map((entry, index) => (
          <div 
            key={entry.id} 
            className={`p-3 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
              isDarkMode ? 'bg-gray-700/50 hover:bg-gray-700/70' : 'bg-gray-100/70 hover:bg-gray-200/70'
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="font-mono text-sm truncate mb-2">{entry.text}</div>
            <div className={`flex justify-between text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>{entry.charCount}자 · {entry.wordCount}단어</span>
              <span>{entry.timestamp.split(' ')[1]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;