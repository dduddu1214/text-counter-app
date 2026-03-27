# 글자 수 세기 (Text Counter)

실시간 텍스트 분석 도구 — 블로그, SNS, 비즈니스 문서 작성을 위한 스마트한 글자수 카운터

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

> **[text-counter-app-theta.vercel.app](https://text-counter-app-theta.vercel.app/)**

## 주요 기능

### 실시간 텍스트 분석
- **글자수** (공백 포함/제외 선택)
- **단어수** (한글/영문/숫자 구분 처리)
- **문단수 및 줄수**
- **바이트 수** (UTF-8 기준)
- **예상 읽기 시간** (분당 200단어 기준)
- **단어 통계** (평균 길이, 최장/최단 단어)

### SNS 플랫폼 글자수 제한
프리셋 버튼 클릭 시 해당 플랫폼의 글자수 제한을 실시간 진행률 바로 표시합니다.

| 플랫폼 | 글자수 제한 | 시각적 피드백 |
|--------|-----------|-------------|
| 인스타그램 | ~2,200자 | 80% 이상 노란색, 초과 시 빨간색 |
| 트위터 | 280자 | 줄무늬 애니메이션으로 초과 경고 |
| 블로그 | ~3,000자 | 진행률 바 색상 변화 |
| 비즈니스 | 제한 없음 | — |

### 검색 및 하이라이트
에디터에서 검색어를 입력하면 **텍스트 내 일치하는 부분이 노란색으로 하이라이트**되며, 발견된 개수를 표시합니다.

### 파일 처리
- **파일 업로드**: `.txt`, `.md` 파일 지원 (최대 5MB)
- **드래그 앤 드롭**: 에디터에 파일을 끌어다 놓기
- **내보내기**: JSON / CSV 형식 (Excel 호환 BOM 인코딩)
- **클립보드 복사**: 구형 브라우저 fallback 포함

### 자동 저장 및 히스토리
- 작성 중인 텍스트가 **자동으로 저장**되어 탭을 닫아도 복원됩니다
- 최근 분석 기록 **최대 10건**이 localStorage에 영속 저장됩니다
- 다크 모드, 글꼴 크기, 공백 포함 설정도 저장됩니다

### PWA 지원
서비스 워커를 통한 오프라인 캐싱으로 설치 가능한 웹 앱으로 동작합니다.

## 빠른 시작

### 필수 조건
- Node.js 16.0.0 이상

### 설치 및 실행

```bash
git clone https://github.com/dduddu1214/text-counter-app.git
cd text-counter-app

npm install
npm start
```

브라우저에서 `http://localhost:3000` 접속

### 빌드

```bash
npm run build
npx serve -s build   # 프로덕션 빌드 미리보기
```

### 테스트

```bash
npm test
```

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | React 19 |
| 스타일링 | TailwindCSS 3 |
| 아이콘 | Lucide React |
| 상태 관리 | React Context API |
| 영속성 | localStorage (커스텀 `useLocalStorage` 훅) |
| 폰트 | Pretendard (CDN) |
| 빌드 | Create React App |
| 배포 | Vercel |

## 프로젝트 구조

```
src/
├── context/AppContext.jsx         # 전역 상태 관리 (text, 설정, 히스토리 등)
├── hooks/
│   ├── useTextAnalysis.js         # 텍스트 분석 로직 (memoized)
│   └── useLocalStorage.js         # localStorage 영속화 훅
├── utils/
│   ├── textAnalyzer.js            # 텍스트 분석 유틸리티 (단일 소스)
│   ├── fileHandler.js             # 파일 업로드/내보내기/클립보드
│   └── constants.js               # 상수 (플랫폼 제한, 폰트 크기 등)
├── components/
│   ├── ui/                        # 재사용 UI (StatCard, Button, Card 등)
│   ├── layout/Header.jsx          # 헤더 + 프리셋 칩
│   └── features/                  # 기능 컴포넌트
│       ├── TextEditor.jsx         # 에디터 (드래그앤드롭, 하이라이트, 진행률 바)
│       ├── Statistics.jsx         # 통계 카드 모음
│       ├── AdvancedStats.jsx      # 상세 분석 (바이트, 읽기 시간, 단어 통계)
│       ├── SearchPanel.jsx        # 단어 검색
│       ├── SettingsPanel.jsx      # 공백 포함 토글
│       ├── ExportButton.jsx       # JSON/CSV 내보내기
│       └── HistoryPanel.jsx       # 최근 기록
└── App.js                         # 루트 레이아웃
```

## 브라우저 지원

| 브라우저 | 최소 버전 |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| iOS Safari | 14+ |
| Chrome Android | 90+ |

## 라이선스

MIT License — 자세한 내용은 [LICENSE](LICENSE) 파일 참조

## 개발자

- **devdduddu** — [@dduddu1214](https://github.com/dduddu1214)
