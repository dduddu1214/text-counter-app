import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Sparkles, Sun, Moon, Type, Hash, AlignLeft, BarChart3 } from 'lucide-react';
import './index.css';

const MainContent = () => {
  const { text, setText, isDarkMode, setIsDarkMode } = useApp();

  const getCharCount = () => text.length;
  const getWordCount = () => {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  };
  const getParagraphCount = () => {
    if (!text.trim()) return 0;
    return text.split(/\n\s*\n/).filter(p => p.trim()).length;
  };
  const getLineCount = () => {
    if (!text) return 0;
    return text.split('\n').length;
  };

  return (
    <div className={`min-h-screen p-8 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                글자 수 세기
              </h1>
              <p className="text-sm text-gray-500">실시간 텍스트 분석 도구</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all hover:scale-105 ${
              isDarkMode 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            {isDarkMode ? '라이트 모드' : '다크 모드'}
          </button>
        </div>
        
        {/* 빠른 시작 프리셋 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              🎯 빠른 시작 - 어떤 글을 작성하시나요?
            </h3>
            <button
              onClick={() => setText('')}
              className={`px-4 py-2 rounded-xl transition-all hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              ✨ 처음부터 작성하기
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => setText(`오늘 새로운 카페에서 맛있는 라떼를 마셨어요! ☕️ 

날씨가 정말 좋아서 창가 자리에 앉아 여유롭게 시간을 보냈답니다. 이런 소소한 일상의 행복이 정말 소중하게 느껴져요.

여러분도 오늘 하루 어떻게 보내셨나요? 댓글로 일상 이야기 들려주세요! 💕

#일상 #카페 #라떼 #여유 #소확행 #데일리 #감사한하루`)}
              className={`group p-5 rounded-2xl text-left transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                isDarkMode ? 'bg-pink-900/30 hover:bg-pink-900/50 border border-pink-800/30' : 'bg-pink-50 hover:bg-pink-100 border border-pink-200'
              }`}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📸</div>
              <div className="font-semibold text-base mb-1">인스타그램 포스트</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>일상 공유, 감성 글귀</div>
              <div className={`text-xs mt-2 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>~2,200자 권장</div>
            </button>

            <button
              onClick={() => setText(`React와 TailwindCSS로 텍스트 카운터를 만들어봤습니다! 

실시간으로 글자수, 단어수, 문단수를 체크할 수 있어서 블로그 포스팅이나 SNS 업로드할 때 정말 유용해요. 특히 플랫폼별 글자수 제한을 확인하기 좋습니다 💻✨

개발하면서 useState와 useEffect 훅을 활용했고, 반응형 디자인도 적용했어요. 

#React #개발 #코딩 #프론트엔드 #TailwindCSS #웹개발`)}
              className={`group p-5 rounded-2xl text-left transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                isDarkMode ? 'bg-blue-900/30 hover:bg-blue-900/50 border border-blue-800/30' : 'bg-blue-50 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🐦</div>
              <div className="font-semibold text-base mb-1">트위터 포스트</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>개발 일상, 기술 공유</div>
              <div className={`text-xs mt-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>280자 제한</div>
            </button>

            <button
              onClick={() => setText(`프로젝트 관리에서 배운 5가지 핵심 원칙

새로운 프로젝트를 성공적으로 마무리하면서 느낀 점들을 정리해보려고 합니다.

## 1. 명확한 목표 설정의 중요성
프로젝트 시작 전 구체적이고 측정 가능한 목표를 설정하는 것이 가장 중요합니다. 모호한 목표는 팀의 방향성을 흐리게 만듭니다.

## 2. 효과적인 커뮤니케이션
정기적인 회의와 진행상황 공유가 프로젝트 성공의 열쇠입니다. 특히 원격 근무 환경에서는 더욱 중요해졌습니다.

## 3. 리스크 관리와 대응책
예상치 못한 변수들에 대비해 미리 대응책을 마련해두는 것이 좋습니다. 버퍼 시간을 두고 계획을 세우는 것을 권장합니다.

## 4. 팀원 간의 역할 분담
각자의 강점을 파악하고 적절히 역할을 분담하면 효율성이 크게 향상됩니다.

## 5. 지속적인 피드백과 개선
프로젝트 진행 중간중간 회고를 통해 개선점을 찾고 적용하는 것이 중요합니다.

이번 경험을 통해 더 나은 프로젝트 매니저로 성장할 수 있었습니다. 여러분의 프로젝트 관리 노하우도 공유해주세요!`)}
              className={`group p-5 rounded-2xl text-left transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                isDarkMode ? 'bg-green-900/30 hover:bg-green-900/50 border border-green-800/30' : 'bg-green-50 hover:bg-green-100 border border-green-200'
              }`}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📝</div>
              <div className="font-semibold text-base mb-1">블로그 포스트</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>경험 공유, 정보 전달</div>
              <div className={`text-xs mt-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>1,000-3,000자 권장</div>
            </button>

            <button
              onClick={() => setText(`[주식회사 테크이노베이션] 회사 소개서

## 회사 개요
저희 테크이노베이션은 2020년 설립된 IT 솔루션 전문 기업으로, 혁신적인 기술을 통해 고객의 비즈니스 문제를 해결하는 것을 목표로 합니다.

## 주요 사업 분야
• 웹 애플리케이션 개발 및 유지보수
• 모바일 앱 개발 (iOS/Android)
• 데이터 분석 및 시각화 서비스
• IT 컨설팅 및 디지털 전환 지원

## 회사 현황
- 직원 수: 52명 (개발자 40명, 기획자 8명, 디자이너 4명)
- 누적 프로젝트: 150건 이상
- 주요 고객: 중소기업 및 스타트업 80여 곳

## 경쟁 우위
1. 빠른 개발 속도와 높은 품질의 코드
2. 고객 맞춤형 솔루션 제공
3. 합리적인 가격 정책
4. 사후 지원 서비스 우수

## 연락처
이메일: contact@techinnovation.com
전화: 02-1234-5678
주소: 서울시 강남구 테헤란로 123, 10층`)}
              className={`group p-5 rounded-2xl text-left transition-all duration-200 hover:scale-105 hover:shadow-lg ${
                isDarkMode ? 'bg-purple-900/30 hover:bg-purple-900/50 border border-purple-800/30' : 'bg-purple-50 hover:bg-purple-100 border border-purple-200'
              }`}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📄</div>
              <div className="font-semibold text-base mb-1">비즈니스 문서</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>제안서, 보고서, 소개서</div>
              <div className={`text-xs mt-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>용도에 따라 다양</div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* 텍스트 입력 영역 */}
          <div className="xl:col-span-3">
            <div className={`rounded-2xl p-6 shadow-xl border ${
              isDarkMode 
                ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700/50' 
                : 'bg-white/70 backdrop-blur-sm border-gray-200/50'
            }`}>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="여기에 텍스트를 입력하거나 붙여넣으세요...

✨ 실시간으로 글자수, 단어수, 문단수를 확인하세요
📊 상세한 텍스트 분석 결과를 제공합니다"
                className={`w-full h-96 resize-none border-none outline-none bg-transparent leading-relaxed text-lg ${
                  isDarkMode ? 'placeholder-gray-400' : 'placeholder-gray-500'
                }`}
                style={{ fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif" }}
              />
            </div>
          </div>

          {/* 통계 사이드바 */}
          <div className="xl:col-span-1 space-y-6">
            {/* 기본 통계 카드들 */}
            <div className="grid grid-cols-2 xl:grid-cols-1 gap-4">
              {/* 글자수 */}
              <div className={`p-6 rounded-2xl transition-all hover:scale-105 ${
                isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' : 'bg-white/70 backdrop-blur-sm border border-gray-200/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                      {getCharCount().toLocaleString()}
                    </div>
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      글자수
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                    <Type className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* 단어수 */}
              <div className={`p-6 rounded-2xl transition-all hover:scale-105 ${
                isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' : 'bg-white/70 backdrop-blur-sm border border-gray-200/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                      {getWordCount().toLocaleString()}
                    </div>
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      단어수
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                    <Hash className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* 문단수 */}
              <div className={`p-6 rounded-2xl transition-all hover:scale-105 ${
                isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' : 'bg-white/70 backdrop-blur-sm border border-gray-200/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                      {getParagraphCount().toLocaleString()}
                    </div>
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      문단수
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 text-white">
                    <AlignLeft className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* 줄수 */}
              <div className={`p-6 rounded-2xl transition-all hover:scale-105 ${
                isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' : 'bg-white/70 backdrop-blur-sm border border-gray-200/50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      {getLineCount().toLocaleString()}
                    </div>
                    <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      줄수
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* 상세 정보 */}
            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' : 'bg-white/70 backdrop-blur-sm border border-gray-200/50'
            }`}>
              <h3 className="font-bold mb-4 text-lg">상세 분석</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">공백 제외 글자수:</span>
                  <span className="font-bold">{text.replace(/\s/g, '').length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">바이트 수:</span>
                  <span className="font-bold">{new Blob([text]).size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">읽기 시간:</span>
                  <span className="font-bold">{Math.ceil(getWordCount() / 200)}분</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 크레딧 */}
        <div className="mt-12 text-center">
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
            isDarkMode 
              ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50' 
              : 'bg-white/70 backdrop-blur-sm border border-gray-200/50'
          }`}>
            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Made by
            </span>
            <a
              href="https://github.com/devdduddu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              devdduddu
            </a>
            <span className="text-blue-500">💙</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
};

export default App;