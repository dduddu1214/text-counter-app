import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/글자 수 세기/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders text input area', () => {
  render(<App />);
  const textarea = screen.getByLabelText(/텍스트 입력/i);
  expect(textarea).toBeInTheDocument();
});
