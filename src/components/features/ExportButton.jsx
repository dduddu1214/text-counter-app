import React, { useCallback } from 'react';
import { Download } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { exportToJson, exportToCsv } from '../../utils/fileHandler';
import { generateExportData } from '../../utils/textAnalyzer';

const ExportButton = () => {
  const { text, textAnalysis } = useApp();

  const getExportData = useCallback(() => {
    const stats = textAnalysis.getTextStats();
    const analysisResults = {
      characterCount: textAnalysis.getCharCount(),
      wordCount: textAnalysis.getWordCount(),
      paragraphCount: textAnalysis.getParagraphCount(),
      lineCount: textAnalysis.getLineCount(),
      byteCount: textAnalysis.getByteCount(),
      readingTime: textAnalysis.getReadingTime(),
      textStats: {
        averageLength: stats.avgLength,
        longestWord: stats.longest,
        shortestWord: stats.shortest,
        totalWords: textAnalysis.getWordCount(),
      },
    };
    return generateExportData(text, analysisResults);
  }, [text, textAnalysis]);

  const handleJsonExport = useCallback(() => {
    try {
      exportToJson(getExportData());
    } catch (error) {
      console.error('JSON 내보내기 실패:', error);
    }
  }, [getExportData]);

  const handleCsvExport = useCallback(() => {
    try {
      exportToCsv(getExportData());
    } catch (error) {
      console.error('CSV 내보내기 실패:', error);
    }
  }, [getExportData]);

  return (
    <div className="flex gap-2">
      <button
        onClick={handleJsonExport}
        disabled={!text}
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 hover:bg-slate-700 dark:hover:bg-white disabled:opacity-40 disabled:pointer-events-none shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <Download className="w-4 h-4" />
        JSON
      </button>
      <button
        onClick={handleCsvExport}
        disabled={!text}
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 disabled:opacity-40 disabled:pointer-events-none shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <Download className="w-4 h-4" />
        CSV
      </button>
    </div>
  );
};

export default ExportButton;
