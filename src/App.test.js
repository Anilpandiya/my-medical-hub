import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Medical HUB text', () => {
  render(<App />);
  expect(screen.getByText(/My Medical HUB/i));
});

test('renders buttons for Doctor & Patient', () => {
  render(<App />);
  expect(screen.getAllByRole('button'));
});
