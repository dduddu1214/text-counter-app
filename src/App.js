import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Header from './components/layout/Header';
import TextEditor from './components/features/TextEditor';
import Statistics from './components/features/Statistics';
import './index.css';

const DarkModeWrapper = ({ children }) => {
  const { isDarkMode } = useApp();
  return <div className={isDarkMode ? 'dark' : ''}>{children}</div>;
};

const MainContent = () => {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Header />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* 에디터 영역 */}
          <div className="xl:col-span-8">
            <TextEditor />
          </div>

          {/* 사이드바 */}
          <div className="xl:col-span-4">
            <div className="xl:sticky xl:top-6">
              <Statistics />
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <footer className="mt-12 pb-6 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500">
            <span>Made by</span>
            <a
              href="https://github.com/devdduddu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              devdduddu
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

const App = () => (
  <AppProvider>
    <DarkModeWrapper>
      <MainContent />
    </DarkModeWrapper>
  </AppProvider>
);

export default App;
