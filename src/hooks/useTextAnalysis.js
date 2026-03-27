import { useMemo } from 'react';
import {
  calculateCharacterCount,
  calculateWordCount,
  calculateParagraphCount,
  calculateLineCount,
  calculateByteCount,
  calculateReadingTime,
  searchInText,
  calculateTextStatistics,
} from '../utils/textAnalyzer';

export const useTextAnalysis = (text, includeSpaces, searchTerm) => {
  return useMemo(() => ({
    getCharCount: () => calculateCharacterCount(text, includeSpaces),
    getWordCount: () => calculateWordCount(text),
    getParagraphCount: () => calculateParagraphCount(text),
    getLineCount: () => calculateLineCount(text),
    getByteCount: () => calculateByteCount(text),
    getReadingTime: () => calculateReadingTime(calculateWordCount(text)),
    getSearchCount: () => searchInText(text, searchTerm),
    getTextStats: () => {
      const stats = calculateTextStatistics(text);
      return {
        avgLength: stats.averageLength,
        longest: stats.longestWord,
        shortest: stats.shortestWord,
      };
    },
  }), [text, includeSpaces, searchTerm]);
};
