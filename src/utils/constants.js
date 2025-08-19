// 텍스트 분석 관련 상수
export const TEXT_ANALYSIS = {
    WORDS_PER_MINUTE: 200, // 평균 읽기 속도
    MAX_HISTORY_ITEMS: 10, // 최대 히스토리 개수
  };
  
  // 폰트 크기 옵션
  export const FONT_SIZES = [
    { value: 14, label: '14px' },
    { value: 16, label: '16px' },
    { value: 18, label: '18px' },
    { value: 20, label: '20px' },
    { value: 22, label: '22px' },
  ];
  
  // 통계 카드 색상 테마
  export const STAT_COLORS = {
    CHARACTERS: 'from-blue-500 to-cyan-500',
    WORDS: 'from-emerald-500 to-teal-500',
    PARAGRAPHS: 'from-purple-500 to-violet-500',
    LINES: 'from-orange-500 to-red-500',
  };
  
  // 로컬스토리지 키
  export const STORAGE_KEYS = {
    DARK_MODE: 'textCounter_darkMode',
    INCLUDE_SPACES: 'textCounter_includeSpaces',
    FONT_SIZE: 'textCounter_fontSize',
    TEXT_HISTORY: 'textCounter_textHistory',
  };
  
  // 애니메이션 지연 시간
  export const ANIMATION_DELAYS = {
    CARD_1: 0,
    CARD_2: 100,
    CARD_3: 200,
    CARD_4: 300,
  };