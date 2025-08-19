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
    <div className="space-y-6">
      {/* 기본 통계 카드들 */}
      <div className="grid grid-cols-2 xl:grid-cols-1 gap-4">
        <StatCard
          icon={Type}
          value={textAnalysis.getCharCount()}
          label={includeSpaces ? "글자수 (공백포함)" : "글자수 (공백제외)"}
          color="from-blue-500 to-cyan-500"
          delay={0}
          isAnimating={isAnimating}
        />
        <StatCard
          icon={Hash}
          value={textAnalysis.getWordCount()}
          label="단어수"
          color="from-emerald-500 to-teal-500"
          delay={100}
          isAnimating={isAnimating}
        />
        <StatCard
          icon={AlignLeft}
          value={textAnalysis.getParagraphCount()}
          label="문단수"
          color="from-purple-500 to-violet-500"
          delay={200}
          isAnimating={isAnimating}
        />
        <StatCard
          icon={BarChart3}
          value={textAnalysis.getLineCount()}
          label="줄수"
          color="from-orange-500 to-red-500"
          delay={300}
          isAnimating={isAnimating}
        />
      </div>

      {/* 설정 패널 */}
      <SettingsPanel />

      {/* 고급 통계 */}
      <AdvancedStats />

      {/* 검색 패널 */}
      <SearchPanel />

      {/* 내보내기 버튼 */}
      <ExportButton />

      {/* 히스토리 패널 */}
      <HistoryPanel />
    </div>
  );
};

export default Statistics;