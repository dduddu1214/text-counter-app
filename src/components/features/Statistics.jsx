import React from 'react';
import { Type, Hash, AlignLeft, BarChart3 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import StatCard from '../ui/StatCard';
import SettingsPanel from './SettingsPanel';
import SearchPanel from './SearchPanel';
import AdvancedStats from './AdvancedStats';
import ExportButton from './ExportButton';
import HistoryPanel from './HistoryPanel';

const Statistics = () => {
  const { textAnalysis, isAnimating, includeSpaces } = useApp();

  return (
    <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
      {/* 기본 통계 */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          icon={Type}
          value={textAnalysis.getCharCount()}
          label={includeSpaces ? '글자 (공백포함)' : '글자 (공백제외)'}
          color="from-blue-500 to-blue-600"
          isAnimating={isAnimating}
        />
        <StatCard
          icon={Hash}
          value={textAnalysis.getWordCount()}
          label="단어"
          color="from-emerald-500 to-emerald-600"
          isAnimating={isAnimating}
        />
        <StatCard
          icon={AlignLeft}
          value={textAnalysis.getParagraphCount()}
          label="문단"
          color="from-violet-500 to-violet-600"
          isAnimating={isAnimating}
        />
        <StatCard
          icon={BarChart3}
          value={textAnalysis.getLineCount()}
          label="줄"
          color="from-orange-500 to-orange-600"
          isAnimating={isAnimating}
        />
      </div>

      <SettingsPanel />
      <AdvancedStats />
      <SearchPanel />
      <ExportButton />
      <HistoryPanel />
    </div>
  );
};

export default Statistics;
