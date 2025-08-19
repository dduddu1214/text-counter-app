import { TEXT_ANALYSIS } from './constants';

/**
 * 글자수 계산 (공백 포함/제외 옵션)
 */
export const calculateCharacterCount = (text, includeSpaces = true) => {
  return includeSpaces ? text.length : text.replace(/\s/g, '').length;
};

/**
 * 단어수 계산 (한글, 영문, 숫자 구분)
 */
export const calculateWordCount = (text) => {
  if (!text.trim()) return 0;
  
  const koreanWords = text.match(/[가-힣]+/g) || [];
  const englishWords = text.match(/[a-zA-Z]+/g) || [];
  const numbers = text.match(/\d+/g) || [];
  
  return koreanWords.length + englishWords.length + numbers.length;
};

/**
 * 문단수 계산
 */
export const calculateParagraphCount = (text) => {
  if (!text.trim()) return 0;
  return text.split(/\n\s*\n/).filter(p => p.trim()).length;
};

/**
 * 줄수 계산
 */
export const calculateLineCount = (text) => {
  if (!text) return 0;
  return text.split('\n').length;
};

/**
 * 바이트 수 계산 (UTF-8)
 */
export const calculateByteCount = (text) => {
  return new Blob([text]).size;
};

/**
 * 읽기 시간 계산 (분 단위)
 */
export const calculateReadingTime = (wordCount) => {
  return Math.ceil(wordCount / TEXT_ANALYSIS.WORDS_PER_MINUTE);
};

/**
 * 특정 단어/구문 검색
 */
export const searchInText = (text, searchTerm) => {
  if (!searchTerm.trim()) return 0;
  const regex = new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
  return (text.match(regex) || []).length;
};

/**
 * 텍스트 통계 계산 (평균 단어 길이, 최장/최단 단어)
 */
export const calculateTextStatistics = (text) => {
  const words = text.match(/[가-힣a-zA-Z]+/g) || [];
  
  if (words.length === 0) {
    return { 
      averageLength: 0, 
      longestWord: '', 
      shortestWord: '',
      totalWords: 0
    };
  }
  
  const lengths = words.map(w => w.length);
  const averageLength = lengths.reduce((a, b) => a + b, 0) / lengths.length;
  const longestWord = words.reduce((a, b) => a.length > b.length ? a : b);
  const shortestWord = words.reduce((a, b) => a.length < b.length ? a : b);
  
  return { 
    averageLength: averageLength.toFixed(1), 
    longestWord, 
    shortestWord,
    totalWords: words.length
  };
};

/**
 * 텍스트 요약 생성 (히스토리용)
 */
export const generateTextSummary = (text, maxLength = 50) => {
  const cleanText = text.trim();
  if (cleanText.length <= maxLength) return cleanText;
  return cleanText.substring(0, maxLength) + '...';
};

/**
 * 텍스트 분석 결과를 JSON으로 내보내기용 데이터 생성
 */
export const generateExportData = (text, analysisResults) => {
  return {
    text: text,
    statistics: {
      characters: analysisResults.characterCount,
      words: analysisResults.wordCount,
      paragraphs: analysisResults.paragraphCount,
      lines: analysisResults.lineCount,
      bytes: analysisResults.byteCount,
      readingTimeMinutes: analysisResults.readingTime,
      averageWordLength: analysisResults.textStats.averageLength,
      longestWord: analysisResults.textStats.longestWord,
      shortestWord: analysisResults.textStats.shortestWord,
      totalUniqueWords: analysisResults.textStats.totalWords
    },
    metadata: {
      timestamp: new Date().toISOString(),
      generatedBy: '글자 수 세기 v1.0'
    }
  };
};