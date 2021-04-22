import React from 'react';
import InputField from './input';
import { Story } from '@storybook/react';

type InputProps = {
  name: string;
  label: string;
  onChange: () => void;
  onBlur: () => void;
  value: string;
};

const getCaptionForLocaleEmail = (locale) => {
  switch (locale) {
    case 'fr':
      return 'E-mail';
    default:
      return 'Email';
  }
};

const getCaptionForLocalePassword = (locale) => {
  switch (locale) {
    case 'fr':
      return 'le mot de passe';
    default:
      return 'Password';
  }
};

const Template_Email: Story<InputProps> = (args, { globals: { locale } }) => (
  <InputField {...{ ...args, label: getCaptionForLocaleEmail(locale) }} />
);

const Template_Password: Story<InputProps> = (
  args,
  { globals: { locale } }
) => (
  <InputField {...{ ...args, label: getCaptionForLocalePassword(locale) }} />
);

export const InputStoryEmail = Template_Email.bind({});
InputStoryEmail.args = {
  name: 'email',
};

export const InputStoryPassword = Template_Password.bind({});
InputStoryPassword.args = {
  name: 'password',
};

export default {
  title: 'Input Field',
  component: InputField,
};
