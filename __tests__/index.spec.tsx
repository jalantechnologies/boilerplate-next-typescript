import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';

jest.mock('next/image', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      render(<HomePage />);
      expect(
        screen.getByRole('heading', { name: 'Hello World' })
      ).toBeInTheDocument();
    });
  });
});
