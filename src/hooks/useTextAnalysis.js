import { useCallback } from 'react';

export const useTextAnalysis = (text, includeSpaces, searchTerm) => {
  const getCharCount = useCallback(() => {
    return includeSpaces ? text.length : text.replace(/\s/g, '').length;
  }, [text, includeSpaces]);

  const getWordCount = useCallback(() => {
    if (!text.trim()) return 0;
    const koreanWords = text.match(/[가-힣]+/g) || [];
    const englishWords = text.match(/[a-zA-Z]+/g) || [];
    const numbers = text.match(/\d+/g) || [];
    return koreanWords.length + englishWords.length + numbers.length;
  }, [text]);

  const getParagraphCount = useCallback(() => {
    if (!text.trim()) return 0;
    return text.split(/\n\s*\n/).filter(p => p.trim()).length;
  }, [text]);

  const getLineCount = useCallback(() => {
    if (!text) return 0;
    return text.split('\n').length;
  }, [text]);

  const getByteCount = useCallback(() => {
    return new Blob([text]).size;
  }, [text]);

  const getReadingTime = useCallback(() => {
    const wordsPerMinute = 200;
    const words = getWordCount();
    return Math.ceil(words / wordsPerMinute);
  }, [getWordCount]);

  const getSearchCount = useCallback(() => {
    if (!searchTerm.trim()) return 0;
    const regex = new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    return (text.match(regex) || []).length;
  }, [text, searchTerm]);

  const getTextStats = useCallback(() => {
    const words = text.match(/[가-힣a-zA-Z]+/g) || [];
    if (words.length === 0) return { avgLength: 0, longest: '', shortest: '' };
    
    const lengths = words.map(w => w.length);
    const avgLength = lengths.reduce((a, b) => a + b, 0) / lengths.length;
    const longest = words.reduce((a, b) => a.length > b.length ? a : b);
    const shortest = words.reduce((a, b) => a.length < b.length ? a : b);
    
    return { avgLength: avgLength.toFixed(1), longest, shortest };
  }, [text]);

  return {
    getCharCount,
    getWordCount,
    getParagraphCount,
    getLineCount,
    getByteCount,
    getReadingTime,
    getSearchCount,
    getTextStats
  };
};