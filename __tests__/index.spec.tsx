import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import HomePage from '../pages/index';
import {
  ButtonInput,
  InputField,
  ImageLogo,
  AppComponent,
  HomeComponent,
  AboutComponent,
  Header,
} from '@components';

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

describe('With Snapshot Testing', () => {
  it('App shows Hello World heading and form', () => {
    const component = renderer.create(<HomePage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('With Snapshot Testing', () => {
  it('App shows Button', () => {
    const component = renderer.create(<ButtonInput />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('With Snapshot Testing', () => {
  it('App shows Input Field', () => {
    const component = renderer.create(<InputField />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('With Snapshot Testing', () => {
  it('App shows Image', () => {
    const component = renderer.create(<ImageLogo />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('With Snapshot Testing', () => {
  it('App shows Home Component with form', () => {
    const component = renderer.create(<HomeComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('With Snapshot Testing', () => {
  it('App shows About Component with a button', () => {
    const component = renderer.create(<AboutComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('With Snapshot Testing', () => {
  it('App shows App Component', () => {
    const component = renderer.create(<AppComponent />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('With Snapshot Testing', () => {
  it('App shows header', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
