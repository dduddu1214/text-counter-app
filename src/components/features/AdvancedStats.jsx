import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const AdvancedStats = () => {
  const { isDarkMode, textAnalysis } = useApp();
  const stats = textAnalysis.getTextStats();

  return (
    <div className={`rounded-2xl p-6 transition-all duration-300 ${
      isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' : 'bg-white/70 backdrop-blur-sm border border-gray-200/50'
    }`}>
      <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        상세 분석
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
          <span className="text-sm font-medium">바이트 수</span>
          <span className="font-bold text-blue-600">{textAnalysis.getByteCount().toLocaleString()}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">읽기 시간</span>
          </div>
          <span className="font-bold text-emerald-600">{textAnalysis.getReadingTime()}분</span>
        </div>
        
        <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20">
          <span className="text-sm font-medium">평균 단어 길이</span>
          <span className="font-bold text-purple-600">{stats.avgLength}자</span>
        </div>
        
        {stats.longest && (
          <div className="space-y-2">
            <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/70'}`}>
              <div className="text-xs font-medium text-gray-500 mb-1">가장 긴 단어</div>
              <div className="font-mono text-sm break-all">{stats.longest}</div>
            </div>
            <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100/70'}`}>
              <div className="text-xs font-medium text-gray-500 mb-1">가장 짧은 단어</div>
              <div className="font-mono text-sm break-all">{stats.shortest}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedStats;