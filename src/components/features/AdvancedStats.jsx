import React, { useMemo } from 'react';
import { Clock, HardDrive, Ruler, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const AdvancedStats = () => {
  const { textAnalysis, text } = useApp();
  const stats = useMemo(() => textAnalysis.getTextStats(), [textAnalysis]);

  if (!text.trim()) return null;

  const items = [
    { icon: HardDrive, label: '바이트', value: textAnalysis.getByteCount().toLocaleString(), unit: 'B' },
    { icon: Clock, label: '읽기 시간', value: textAnalysis.getReadingTime(), unit: '분' },
    { icon: Ruler, label: '평균 단어 길이', value: stats.avgLength, unit: '자' },
  ];

  return (
    <div className="rounded-xl border p-4 bg-white dark:bg-slate-800/80 border-slate-100 dark:border-slate-700/80">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">상세 분석</h3>

      <div className="space-y-2.5">
        {items.map(({ icon: Icon, label, value, unit }) => (
          <div key={label} className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Icon className="w-3.5 h-3.5" />
              <span className="text-xs">{label}</span>
            </div>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {value}<span className="text-xs font-normal text-slate-400 ml-0.5">{unit}</span>
            </span>
          </div>
        ))}

        {stats.longest && (
          <div className="pt-2.5 mt-2.5 border-t border-slate-100 dark:border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-xs">가장 긴 단어</span>
              </div>
              <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 max-w-[120px] truncate" title={stats.longest}>
                {stats.longest}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                <ArrowDownRight className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-xs">가장 짧은 단어</span>
              </div>
              <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 max-w-[120px] truncate" title={stats.shortest}>
                {stats.shortest}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedStats;
