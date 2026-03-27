import React from 'react';
import { Sparkles, Sun, Moon, RotateCcw } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PLATFORM_LIMITS } from '../../utils/constants';

const PRESETS = [
  {
    key: 'instagram',
    text: `오늘 새로운 카페에서 맛있는 라떼를 마셨어요! ☕️

날씨가 정말 좋아서 창가 자리에 앉아 여유롭게 시간을 보냈답니다. 이런 소소한 일상의 행복이 정말 소중하게 느껴져요.

여러분도 오늘 하루 어떻게 보내셨나요? 댓글로 일상 이야기 들려주세요! 💕

#일상 #카페 #라떼 #여유 #소확행 #데일리 #감사한하루`,
  },
  {
    key: 'twitter',
    text: `React와 TailwindCSS로 텍스트 카운터를 만들어봤습니다!

실시간으로 글자수, 단어수, 문단수를 체크할 수 있어서 블로그 포스팅이나 SNS 업로드할 때 정말 유용해요. 특히 플랫폼별 글자수 제한을 확인하기 좋습니다 💻✨

#React #개발 #코딩 #프론트엔드 #TailwindCSS #웹개발`,
  },
  {
    key: 'blog',
    text: `프로젝트 관리에서 배운 5가지 핵심 원칙

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

이번 경험을 통해 더 나은 프로젝트 매니저로 성장할 수 있었습니다. 여러분의 프로젝트 관리 노하우도 공유해주세요!`,
  },
  {
    key: 'business',
    text: `[주식회사 테크이노베이션] 회사 소개서

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
주소: 서울시 강남구 테헤란로 123, 10층`,
  },
];

const Header = () => {
  const { isDarkMode, setIsDarkMode, text, setText, saveToHistory, selectedPlatform, setSelectedPlatform } = useApp();

  const handlePresetClick = (preset) => {
    if (text.trim()) saveToHistory();
    setText(preset.text);
    setSelectedPlatform(preset.key);
  };

  const handleClear = () => {
    if (text.trim()) saveToHistory();
    setText('');
    setSelectedPlatform(null);
  };

  return (
    <header className="mb-6">
      {/* 상단 바 */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              글자 수 세기
            </h1>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">실시간 텍스트 분석 도구</p>
          </div>
        </div>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label={isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
          className="p-2.5 rounded-xl border transition-all duration-200 hover:scale-105 active:scale-95 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm"
        >
          {isDarkMode
            ? <Sun className="w-5 h-5 text-amber-500" />
            : <Moon className="w-5 h-5 text-slate-500" />
          }
        </button>
      </div>

      {/* 프리셋 칩 */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mr-1">빠른 시작</span>
        {PRESETS.map((preset) => {
          const platform = PLATFORM_LIMITS[preset.key];
          const isActive = selectedPlatform === preset.key;
          return (
            <button
              key={preset.key}
              onClick={() => handlePresetClick(preset)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 border focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 shadow-sm'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <span>{platform.emoji}</span>
              <span className="hidden sm:inline">{platform.name}</span>
              {platform.limit && (
                <span className={`text-xs ${isActive ? 'text-blue-400 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`}>
                  {platform.limit.toLocaleString()}자
                </span>
              )}
            </button>
          );
        })}

        <button
          onClick={handleClear}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">새로 작성</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
