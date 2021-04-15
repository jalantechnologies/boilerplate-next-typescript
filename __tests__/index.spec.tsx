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
