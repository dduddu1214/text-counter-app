import React, { useCallback } from 'react';
import { Download } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const ExportButton = () => {
  const { text, textAnalysis } = useApp();

  const exportResults = useCallback(() => {
    const stats = textAnalysis.getTextStats();
    const results = {
      text: text,
      statistics: {
        characters: textAnalysis.getCharCount(),
        words: textAnalysis.getWordCount(),
        paragraphs: textAnalysis.getParagraphCount(),
        lines: textAnalysis.getLineCount(),
        bytes: textAnalysis.getByteCount(),
        readingTimeMinutes: textAnalysis.getReadingTime(),
        averageWordLength: stats.avgLength,
        longestWord: stats.longest,
        shortestWord: stats.shortest
      },
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `text-analysis-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [text, textAnalysis]);

  return (
    <button
      onClick={exportResults}
      disabled={!text}
      className="w-full group flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-purple-500/25"
    >
      <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
      결과 내보내기
    </button>
  );
};

export default ExportButton;