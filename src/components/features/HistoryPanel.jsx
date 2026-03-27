import React from 'react';
import { Clock } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const HistoryPanel = () => {
  const { history } = useApp();

  if (history.length === 0) return null;

  return (
    <div className="rounded-xl border p-4 bg-white dark:bg-slate-800/80 border-slate-100 dark:border-slate-700/80">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
        <Clock className="w-3.5 h-3.5" />
        최근 기록
        <span className="text-xs font-normal text-slate-400">({history.length})</span>
      </h3>

      <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
        {history.map((entry) => (
          <div
            key={entry.id}
            className="p-2.5 rounded-lg transition-colors duration-150 bg-slate-50 dark:bg-slate-700/40 hover:bg-slate-100 dark:hover:bg-slate-700/60"
          >
            <div className="text-xs font-mono text-slate-600 dark:text-slate-400 truncate mb-1">
              {entry.text}
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
              <span>{entry.charCount.toLocaleString()}자 · {entry.wordCount.toLocaleString()}단어</span>
              <span>{entry.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPanel;
