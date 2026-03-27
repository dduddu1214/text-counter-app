// 텍스트 분석 관련 상수
export const TEXT_ANALYSIS = {
  WORDS_PER_MINUTE: 200,
  MAX_HISTORY_ITEMS: 10,
};

// 폰트 크기 옵션
export const FONT_SIZES = [
  { value: 14, label: '14px' },
  { value: 16, label: '16px' },
  { value: 18, label: '18px' },
  { value: 20, label: '20px' },
  { value: 22, label: '22px' },
];

// SNS 플랫폼 글자수 제한
export const PLATFORM_LIMITS = {
  instagram: { name: '인스타그램', emoji: '📸', limit: 2200, color: 'pink' },
  twitter: { name: '트위터', emoji: '🐦', limit: 280, color: 'blue' },
  blog: { name: '블로그', emoji: '📝', limit: 3000, color: 'green' },
  business: { name: '비즈니스', emoji: '📄', limit: null, color: 'purple' },
};

// 로컬스토리지 키
export const STORAGE_KEYS = {
  DARK_MODE: 'textCounter_darkMode',
  INCLUDE_SPACES: 'textCounter_includeSpaces',
  FONT_SIZE: 'textCounter_fontSize',
  TEXT_HISTORY: 'textCounter_textHistory',
  TEXT_DRAFT: 'textCounter_textDraft',
  PLATFORM: 'textCounter_platform',
};
