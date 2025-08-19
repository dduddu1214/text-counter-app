import React from 'react';
import { Search } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const SearchPanel = () => {
  const { isDarkMode, searchTerm, setSearchTerm, textAnalysis } = useApp();

  return (
    <div className={`rounded-2xl p-6 transition-all duration-300 ${
      isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' : 'bg-white/70 backdrop-blur-sm border border-gray-200/50'
    }`}>
      <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
        <Search className="w-5 h-5" />
        단어 검색
      </h3>
      
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="검색할 단어를 입력하세요..."
            className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500/50 ${
              isDarkMode 
                ? 'bg-gray-700/50 border-gray-600/50 text-gray-200 placeholder-gray-400' 
                : 'bg-white/70 border-gray-300/50 text-gray-700 placeholder-gray-500'
            } backdrop-blur-sm`}
          />
        </div>
        
        {searchTerm && (
          <div className="text-center p-4 rounded-xl bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 border border-yellow-200/50 dark:border-yellow-800/50">
            <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 mb-1">
              {textAnalysis.getSearchCount()}
            </div>
            <div className="text-sm text-yellow-600 dark:text-yellow-500">개 발견됨</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPanel;