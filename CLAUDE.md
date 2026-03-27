# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Text Counter (글자 수 세기) is a Korean-language real-time text analysis PWA for content creators. Provides character/word/paragraph/line counts, byte size, reading time, and SNS platform character limit tracking. All UI text is in Korean.

Deployed at: Vercel (text-counter-app-theta.vercel.app)

## Build & Run Commands

```bash
npm install        # Install dependencies
npm start          # Dev server on localhost:3000
npm run build      # Production build to build/
npm test           # Run tests (Jest + React Testing Library)
```

## Architecture

React 19 + TailwindCSS 3 app bootstrapped with Create React App. No TypeScript.

- **State management**: React Context API (`src/context/AppContext.jsx`) provides all global state via `useApp()` hook — text, dark mode, includeSpaces, fontSize, searchTerm, history, selectedPlatform, isDragging, isAnimating, and `textAnalysis` object.
- **Text analysis**: Single source of truth in `src/utils/textAnalyzer.js`, consumed via `useTextAnalysis` hook (memoized with `useMemo`). Korean word detection uses `/[가-힣]+/g` regex. Reading time assumes 200 words/minute.
- **Persistence**: `useLocalStorage` hook persists dark mode, font size, space-inclusion, history, selected platform, and text draft (auto-saved with 500ms debounce) across sessions.
- **File handling**: `src/utils/fileHandler.js` — .txt/.md upload (5MB max), JSON/CSV export (CSV uses BOM for Excel), clipboard with fallback for older browsers.
- **Constants**: `src/utils/constants.js` — shared values (font sizes, storage keys, platform limits with character counts).
- **PWA**: Service worker (`public/service-worker.js`) with network-first strategy and CDN font caching. Registered in `public/index.html`.

### Component Layers

- `src/components/ui/` — Reusable primitives (Button, Card, StatCard, Toggle, Input)
- `src/components/layout/` — Header (includes compact preset chips with platform limit selection)
- `src/components/features/` — TextEditor (drag&drop, search highlight overlay, SNS progress bar), Statistics, AdvancedStats, SearchPanel, SettingsPanel, ExportButton (JSON + CSV), HistoryPanel

### Path Aliases (jsconfig.json)

`components/*`, `context/*`, `hooks/*`, `utils/*` all resolve to `src/` subdirectories.

## Key Patterns

- **Dark mode**: Tailwind `dark:` class strategy — `DarkModeWrapper` in App.js toggles the `dark` class on the root div.
- **Search highlighting**: Transparent textarea layered over a highlight backdrop div with `<mark>` tags. Scroll positions synced via `onScroll` handler.
- **Drag & drop**: File drop zone on the editor card with visual feedback (border color change, overlay with instructions).
- **SNS platform limits**: Presets set `selectedPlatform`, which activates a progress bar below the editor. Color changes: blue (<80%) → amber (80-100%) → red (>100%) with striped animation when near/over limit.
- **Auto-save**: Text draft saved to localStorage with 500ms debounce. Restored on page load.
- **History**: Persisted in localStorage, max 10 entries, auto-saved when clearing or loading new content.
- **Font stack**: Pretendard (CDN) > Apple SD Gothic Neo > Noto Sans KR.
- **ESLint**: Uses `react-app` and `react-app/jest` presets (configured in package.json).
