import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      render(<HomePage />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });
});
