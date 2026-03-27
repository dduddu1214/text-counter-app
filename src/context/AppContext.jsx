import React, { createContext, useContext, useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { useTextAnalysis } from '../hooks/useTextAnalysis';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { generateTextSummary } from '../utils/textAnalyzer';
import { TEXT_ANALYSIS, STORAGE_KEYS } from '../utils/constants';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // localStorage 영속 상태
  const [isDarkMode, setIsDarkMode] = useLocalStorage(STORAGE_KEYS.DARK_MODE, false);
  const [includeSpaces, setIncludeSpaces] = useLocalStorage(STORAGE_KEYS.INCLUDE_SPACES, true);
  const [fontSize, setFontSize] = useLocalStorage(STORAGE_KEYS.FONT_SIZE, 16);
  const [history, setHistory] = useLocalStorage(STORAGE_KEYS.TEXT_HISTORY, []);
  const [savedDraft] = useLocalStorage(STORAGE_KEYS.TEXT_DRAFT, '');
  const [selectedPlatform, setSelectedPlatform] = useLocalStorage(STORAGE_KEYS.PLATFORM, null);

  // 메모리 상태
  const [text, setText] = useState(savedDraft || '');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // 텍스트 자동 저장 (디바운스 500ms)
  const autoSaveTimer = useRef(null);
  useEffect(() => {
    if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    autoSaveTimer.current = setTimeout(() => {
      try {
        window.localStorage.setItem(
          STORAGE_KEYS.TEXT_DRAFT,
          JSON.stringify(text)
        );
      } catch (e) {
        // localStorage 용량 초과 등 무시
      }
    }, 500);
    return () => clearTimeout(autoSaveTimer.current);
  }, [text]);

  // 텍스트 분석 훅
  const textAnalysis = useTextAnalysis(text, includeSpaces, searchTerm);

  // 텍스트 변경 시 애니메이션
  const prevTextRef = useRef(text);
  useEffect(() => {
    if (text !== prevTextRef.current) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      prevTextRef.current = text;
      return () => clearTimeout(timer);
    }
  }, [text]);

  // 히스토리 저장
  const saveToHistory = useCallback(() => {
    if (!text.trim()) return;
    setHistory(prev => {
      const entry = {
        id: Date.now(),
        text: generateTextSummary(text, 60),
        charCount: text.length,
        wordCount: textAnalysis.getWordCount(),
        timestamp: new Date().toLocaleString('ko-KR'),
      };
      return [entry, ...prev].slice(0, TEXT_ANALYSIS.MAX_HISTORY_ITEMS);
    });
  }, [text, textAnalysis, setHistory]);

  const value = useMemo(() => ({
    text, setText,
    isDarkMode, setIsDarkMode,
    includeSpaces, setIncludeSpaces,
    fontSize, setFontSize,
    searchTerm, setSearchTerm,
    history, saveToHistory,
    isAnimating,
    isDragging, setIsDragging,
    selectedPlatform, setSelectedPlatform,
    textAnalysis,
  }), [
    text, isDarkMode, includeSpaces, fontSize, searchTerm,
    history, saveToHistory, isAnimating, isDragging,
    selectedPlatform, textAnalysis,
    setText, setIsDarkMode, setIncludeSpaces, setFontSize,
    setSelectedPlatform,
  ]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
