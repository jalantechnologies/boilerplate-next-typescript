import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

jest.mock('next-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

jest.mock('next-i18next');
describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      render(<HomePage />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });
  });
});
