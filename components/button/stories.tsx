import React from 'react';
import ButtonInput from './button';
import { Story } from '@storybook/react';

type ButtonProps = {
  text: string;
  disabled: boolean;
  onClick: () => void;
};

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'fr':
      return 'connexion';
    default:
      return 'Log In';
  }
};

const getCaptionForLocaleLogout = (locale) => {
  switch (locale) {
    case 'fr':
      return 'Se déconnecter';
    default:
      return 'Log Out';
  }
};

const Template_login: Story<ButtonProps> = (args, { globals: { locale } }) => (
  <ButtonInput {...{ ...args, text: getCaptionForLocale(locale) }} />
);

const Template_logout: Story<ButtonProps> = (args, { globals: { locale } }) => (
  <ButtonInput {...{ ...args, text: getCaptionForLocaleLogout(locale) }} />
);

export const LogInButton = Template_login.bind({});
LogInButton.args = {
  disabled: false,
  onClick: () => {},
};

export const LogOutButton = Template_logout.bind({});
LogOutButton.args = {
  disabled: false,
  onClick: () => {},
};

export default {
  title: 'Button',
  component: ButtonInput,
};
