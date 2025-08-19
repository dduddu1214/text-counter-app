import React, { useRef, useCallback } from 'react';
import { Upload, Copy, Trash2, Settings } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const TextEditor = () => {
  const { 
    text, 
    setText, 
    fontSize, 
    setFontSize
  } = useApp();
  
  const textareaRef = useRef(null);

  // 파일 업로드 처리
  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'text/plain' || file.name.endsWith('.md'))) {
      const reader = new FileReader();
      reader.onload = (e) => setText(e.target.result);
      reader.readAsText(file);
    }
  }, [setText]);

  // 복사 기능
  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      // 토스트 알림 효과
      const toast = document.createElement('div');
      toast.textContent = '복사 완료!';
      toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fadeInUp';
      document.body.appendChild(toast);
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast);
        }
      }, 2000);
    });
  }, [text]);

  return (
    <div className="group relative overflow-hidden rounded-3xl border transition-all duration-300 hover:shadow-2xl bg-white/50 dark:bg-gray-800/30 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl">
      
      {/* 컨트롤 바 */}
      <div className="p-6 border-b border-gray-200/30 dark:border-gray-700/50">
        <div className="flex flex-wrap items-center gap-4">
          <label className="group flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 bg-gray-100/70 dark:bg-gray-700/50 hover:bg-gray-200/70 dark:hover:bg-gray-600/50 text-gray-700 dark:text-gray-300 backdrop-blur-sm">
            <input
              type="file"
              accept=".txt,.md"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Upload className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">파일 업로드</span>
          </label>
          
          <button
            onClick={copyToClipboard}
            disabled={!text}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
            복사
          </button>
          
          <button
            onClick={() => setText('')}
            disabled={!text}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-red-500/25"
          >
            <Trash2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
            지우기
          </button>
          
          <div className="flex items-center gap-3">
            <Settings className="w-4 h-4 text-gray-500" />
            <select
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="px-3 py-2 rounded-xl border text-sm font-medium transition-all duration-200 focus:ring-2 focus:ring-blue-500/50 bg-white/70 dark:bg-gray-700/50 border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-200 backdrop-blur-sm"
            >
              <option value={14}>14px</option>
              <option value={16}>16px</option>
              <option value={18}>18px</option>
              <option value={20}>20px</option>
              <option value={22}>22px</option>
            </select>
          </div>
        </div>
      </div>

      {/* 텍스트 입력 */}
      <div className="p-6">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="여기에 텍스트를 입력하거나 붙여넣으세요...
          
✨ 실시간으로 글자수, 단어수, 문단수를 확인하세요
📊 상세한 텍스트 분석 결과를 제공합니다
💾 작업 내역을 자동으로 저장합니다"
          className="w-full h-96 resize-none border-none outline-none bg-transparent leading-relaxed transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
          style={{ 
            fontSize: `${fontSize}px`,
            fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif"
          }}
        />
      </div>
    </div>
  );
};

export default TextEditor;