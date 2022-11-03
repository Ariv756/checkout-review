import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const feedbackElement = screen.getByText(/Customer Feedback Page/i);
  expect(feedbackElement).toBeInTheDocument();
});
