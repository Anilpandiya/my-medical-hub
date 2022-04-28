import { render, screen } from '@testing-library/react';
import App from './App';

test('should renders Dashboard component', () => {
  render(<App />);
  expect(screen.findAllByAltText('Dashboard'));
});
