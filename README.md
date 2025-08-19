# 📝 글자 수 세기 (Text Counter)

실시간 텍스트 분석 도구 - 블로그, SNS, 비즈니스 문서 작성을 위한 스마트한 글자수 카운터

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🌟 주요 기능

### ⚡ 실시간 텍스트 분석
- **글자수 계산** (공백 포함/제외 선택 가능)
- **단어수 계산** (한글/영문/숫자 구분 처리)
- **문단수 및 줄수 계산**
- **바이트 수 측정** (UTF-8 기준)
- **예상 읽기 시간** (분당 200단어 기준)

### 🎯 목적별 프리셋 제공
- **📸 인스타그램 포스트** - 일상 공유, 감성 글귀 (~2,200자)
- **🐦 트위터 포스트** - 기술 공유, 개발 일상 (280자 제한)
- **📝 블로그 포스트** - 경험 공유, 정보 전달 (1,000-3,000자)
- **📄 비즈니스 문서** - 제안서, 보고서, 소개서

### 🎨 사용자 경험
- **다크/라이트 모드** 지원
- **반응형 디자인** (모바일/태블릿/데스크톱)
- **글래스모피즘 UI** 디자인
- **실시간 애니메이션** 효과
- **직관적인 인터페이스**

## 🚀 빠른 시작

### 필수 조건
- Node.js 16.0.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/your-username/text-counter-app.git
cd text-counter-app

# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

브라우저에서 `http://localhost:3000` 접속

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npx serve -s build
```

## 📁 프로젝트 구조

```
text-counter-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/                 # 재사용 가능한 UI 컴포넌트
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── StatCard.jsx
│   │   │   └── Toggle.jsx
│   │   ├── layout/             # 레이아웃 컴포넌트
│   │   │   ├── Header.jsx
│   │   │   └── Sidebar.jsx
│   │   └── features/           # 기능별 컴포넌트
│   │       ├── TextEditor.jsx
│   │       ├── Statistics.jsx
│   │       ├── AdvancedStats.jsx
│   │       ├── SearchPanel.jsx
│   │       ├── SettingsPanel.jsx
│   │       ├── ExportButton.jsx
│   │       └── HistoryPanel.jsx
│   ├── context/
│   │   └── AppContext.jsx      # 전역 상태 관리
│   ├── hooks/
│   │   ├── useTextAnalysis.js  # 텍스트 분석 로직
│   │   └── useLocalStorage.js  # 로컬 스토리지 관리
│   ├── utils/
│   │   ├── constants.js        # 상수 정의
│   │   ├── textAnalyzer.js     # 텍스트 분석 유틸리티
│   │   └── fileHandler.js      # 파일 처리 유틸리티
│   ├── App.jsx                 # 메인 앱 컴포넌트
│   ├── index.js               # 엔트리 포인트
│   └── index.css              # 글로벌 스타일
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠️ 기술 스택

### Frontend
- **React 18** - 사용자 인터페이스 라이브러리
- **JavaScript (ES6+)** - 프로그래밍 언어
- **TailwindCSS** - 유틸리티 기반 CSS 프레임워크
- **Lucide React** - 아이콘 라이브러리

### 개발 도구
- **Create React App** - React 개발 환경
- **PostCSS** - CSS 처리 도구
- **Autoprefixer** - CSS 벤더 프리픽스 자동 추가

### 폰트
- **Pretendard** - 메인 한글 폰트
- **Apple SD Gothic Neo** - iOS/macOS 네이티브 폰트
- **Noto Sans KR** - Google 한글 폰트

## 💡 사용법

### 1. 목적별 프리셋 사용
1. 상단의 목적별 카드 중 하나를 클릭
2. 예시 텍스트가 자동으로 입력됨
3. 실시간으로 분석 결과 확인

### 2. 직접 입력
1. "처음부터 작성하기" 버튼 클릭 또는 바로 타이핑
2. 텍스트 입력과 동시에 실시간 분석
3. 우측 사이드바에서 상세 통계 확인

### 3. 파일 업로드
1. 텍스트 에디터 상단의 "파일 업로드" 버튼 클릭
2. .txt 또는 .md 파일 선택
3. 파일 내용이 자동으로 분석됨

### 4. 분석 결과 활용
- **SNS 포스팅**: 플랫폼별 글자수 제한 확인
- **블로그 작성**: 읽기 시간과 분량 조절
- **비즈니스 문서**: 전문적인 문서 분량 관리

## 🎨 UI/UX 특징

### 디자인 철학
- **미니멀리즘**: 꼭 필요한 기능만 직관적으로 배치
- **접근성**: 다크모드 지원 및 반응형 디자인
- **사용성**: 원클릭으로 바로 체험 가능한 프리셋 제공

### 시각적 요소
- **글래스모피즘**: 반투명 배경과 블러 효과
- **그라데이션**: 아름다운 색상 조합
- **애니메이션**: 부드러운 전환 효과
- **반응형**: 모든 디바이스에서 최적화된 경험

## 📊 지원하는 분석 항목

| 분석 항목 | 설명 | 활용도 |
|-----------|------|--------|
| 글자수 | 공백 포함/제외 선택 가능 | SNS 글자수 제한 확인 |
| 단어수 | 한글/영문/숫자 구분 처리 | 콘텐츠 밀도 측정 |
| 문단수 | 빈 줄 기준으로 구분 | 가독성 평가 |
| 줄수 | 개행 문자 기준 | 문서 분량 예측 |
| 바이트수 | UTF-8 인코딩 기준 | 데이터 크기 확인 |
| 읽기시간 | 분당 200단어 기준 | 콘텐츠 소비 시간 예측 |

## 🌐 브라우저 지원

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 모바일 지원

- iOS Safari 14+
- Chrome for Android 90+
- Samsung Internet 14+

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 문의

- **개발자**: dev_dduddu
- **GitHub**: [@dduddu1214](https://github.com/dduddu1214)
- **웹사이트**: [글자 수 세기 도구](https://text-counter-app-theta.vercel.app/)

## 🙏 감사의 말

- [Lucide](https://lucide.dev/) - 아름다운 아이콘 제공
- [TailwindCSS](https://tailwindcss.com/) - 훌륭한 CSS 프레임워크
- [Pretendard](https://github.com/orioncactus/pretendard) - 한글 폰트 제공

---

Made by devdduddu 💙
⭐ 이 프로젝트가 도움이 되셨다면 스타를 눌러주세요!