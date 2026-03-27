import React, { useRef, useCallback, useState, useEffect, useMemo } from 'react';
import { Upload, Copy, Trash2, Type, FileText } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { handleFileUpload as uploadFile, copyToClipboard as copyText } from '../../utils/fileHandler';
import { FONT_SIZES, PLATFORM_LIMITS } from '../../utils/constants';

const TextEditor = () => {
  const {
    text, setText, fontSize, setFontSize,
    saveToHistory, searchTerm, isDragging, setIsDragging,
    selectedPlatform,
  } = useApp();

  const textareaRef = useRef(null);
  const highlightRef = useRef(null);
  const [toast, setToast] = useState(null);

  // 토스트 타이머
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(timer);
  }, [toast]);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
  }, []);

  // 파일 처리
  const processFile = useCallback((file) => {
    try {
      uploadFile(file, (content) => {
        if (text.trim()) saveToHistory();
        setText(content);
        showToast('파일을 불러왔습니다!');
      });
    } catch (error) {
      showToast(error.message, 'error');
    }
  }, [setText, text, saveToHistory, showToast]);

  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file) processFile(file);
    event.target.value = '';
  }, [processFile]);

  // 드래그 앤 드롭
  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, [setIsDragging]);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setIsDragging(false);
  }, [setIsDragging]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  }, [processFile, setIsDragging]);

  // 복사
  const handleCopy = useCallback(async () => {
    try {
      await copyText(text);
      showToast('클립보드에 복사했습니다!');
    } catch {
      showToast('복사에 실패했습니다.', 'error');
    }
  }, [text, showToast]);

  // 지우기
  const handleClear = useCallback(() => {
    if (text.trim()) saveToHistory();
    setText('');
  }, [text, setText, saveToHistory]);

  // 검색 하이라이트 텍스트 생성
  const highlightedContent = useMemo(() => {
    if (!searchTerm || !searchTerm.trim()) return null;
    const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
  }, [text, searchTerm]);

  // 스크롤 동기화
  const handleScroll = useCallback(() => {
    if (highlightRef.current && textareaRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop;
      highlightRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  }, []);

  // SNS 플랫폼 글자수 제한
  const platformLimit = selectedPlatform ? PLATFORM_LIMITS[selectedPlatform] : null;
  const charCount = text.length;
  const limitPercent = platformLimit?.limit ? Math.min((charCount / platformLimit.limit) * 100, 100) : 0;
  const isOverLimit = platformLimit?.limit ? charCount > platformLimit.limit : false;
  const isNearLimit = platformLimit?.limit ? limitPercent >= 80 && !isOverLimit : false;

  const progressColor = isOverLimit
    ? 'bg-red-500'
    : isNearLimit
      ? 'bg-amber-500'
      : 'bg-blue-500';

  const sharedTextStyle = {
    fontSize: `${fontSize}px`,
    fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
    lineHeight: '1.75',
    padding: '24px',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
  };

  return (
    <div className="space-y-3 animate-fadeInUp">
      {/* 토스트 */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-2.5 rounded-xl shadow-lg text-sm font-medium text-white toast-enter ${
          toast.type === 'error' ? 'bg-red-500' : 'bg-emerald-500'
        }`}>
          {toast.message}
        </div>
      )}

      {/* 툴바 */}
      <div className="flex flex-wrap items-center gap-2">
        <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="file"
            accept=".txt,.md"
            onChange={handleFileUpload}
            className="hidden"
            aria-label="텍스트 파일 업로드"
          />
          <Upload className="w-4 h-4" />
          <span className="hidden sm:inline">업로드</span>
        </label>

        <button
          onClick={handleCopy}
          disabled={!text}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 disabled:opacity-40 disabled:pointer-events-none shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <Copy className="w-4 h-4" />
          <span className="hidden sm:inline">복사</span>
        </button>

        <button
          onClick={handleClear}
          disabled={!text}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-red-300 dark:hover:border-red-800 hover:text-red-500 disabled:opacity-40 disabled:pointer-events-none shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <Trash2 className="w-4 h-4" />
          <span className="hidden sm:inline">지우기</span>
        </button>

        <div className="flex items-center gap-1.5 ml-auto">
          <Type className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
          <select
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            aria-label="글꼴 크기"
            className="px-2 py-2 rounded-lg border text-sm transition-all duration-200 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-blue-500/50 shadow-sm"
          >
            {FONT_SIZES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 에디터 카드 */}
      <div
        className={`relative rounded-2xl border transition-all duration-200 shadow-sm overflow-hidden ${
          isDragging
            ? 'border-blue-400 dark:border-blue-500 ring-2 ring-blue-400/30 bg-blue-50/50 dark:bg-blue-900/20'
            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* 드래그 오버레이 */}
        {isDragging && (
          <div className="drag-overlay absolute inset-0 z-20 flex items-center justify-center bg-blue-50/80 dark:bg-blue-900/40 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3 text-blue-500 dark:text-blue-400">
              <FileText className="w-12 h-12" />
              <p className="text-sm font-medium">파일을 여기에 놓으세요</p>
              <p className="text-xs text-blue-400 dark:text-blue-500">.txt, .md 파일 지원</p>
            </div>
          </div>
        )}

        {/* 검색 하이라이트 오버레이 */}
        {highlightedContent && (
          <div
            ref={highlightRef}
            className="highlight-backdrop absolute inset-0 z-0 overflow-hidden"
            style={sharedTextStyle}
            aria-hidden="true"
          >
            {highlightedContent}
          </div>
        )}

        {/* 텍스트 입력 */}
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onScroll={handleScroll}
          placeholder="텍스트를 입력하거나 파일을 드래그하세요..."
          aria-label="텍스트 입력"
          className={`relative z-10 w-full h-80 sm:h-96 resize-none border-none outline-none leading-relaxed transition-colors duration-200 text-slate-800 dark:text-slate-200 placeholder-slate-300 dark:placeholder-slate-600 ${
            highlightedContent ? 'bg-transparent caret-slate-800 dark:caret-white' : 'bg-transparent'
          }`}
          style={sharedTextStyle}
        />
      </div>

      {/* SNS 글자수 진행률 바 */}
      {platformLimit?.limit && (
        <div className="animate-fadeIn">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {platformLimit.emoji} {platformLimit.name} 글자수 제한
            </span>
            <span className={`text-xs font-bold ${
              isOverLimit ? 'text-red-500' : isNearLimit ? 'text-amber-500' : 'text-slate-500 dark:text-slate-400'
            }`}>
              {charCount.toLocaleString()} / {platformLimit.limit.toLocaleString()}자
              {isOverLimit && ` (+${(charCount - platformLimit.limit).toLocaleString()})`}
            </span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${progressColor} ${
                isNearLimit || isOverLimit ? 'progress-bar-striped' : ''
              }`}
              style={{ width: `${Math.min(limitPercent, 100)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TextEditor;
