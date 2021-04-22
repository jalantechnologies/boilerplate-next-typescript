import '../styles/globals.css';
import * as nextImage from 'next/image';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'fr', title: 'Français' },
      ],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'padded',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
