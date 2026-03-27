import React from 'react';
import { Search } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const SearchPanel = () => {
  const { searchTerm, setSearchTerm, textAnalysis, text } = useApp();
  const count = searchTerm ? textAnalysis.getSearchCount() : 0;

  return (
    <div className="rounded-xl border p-4 bg-white dark:bg-slate-800/80 border-slate-100 dark:border-slate-700/80">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
        <Search className="w-3.5 h-3.5" />
        단어 검색
      </h3>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="검색어 입력..."
          aria-label="텍스트 내 단어 검색"
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border text-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500"
        />
        {searchTerm && text && (
          <div className={`absolute right-3 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-md text-xs font-bold ${
            count > 0
              ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400'
              : 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500'
          }`}>
            {count}건
          </div>
        )}
      </div>

      {searchTerm && text && count > 0 && (
        <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
          에디터에서 노란색으로 하이라이트 됩니다
        </p>
      )}
    </div>
  );
};

export default SearchPanel;
