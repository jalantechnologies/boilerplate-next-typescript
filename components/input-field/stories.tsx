import React from 'react';
import Input from './input';
import { Story } from '@storybook/react';

type InputProps = {
  name: string;
  label: string;
};

const getCaptionForLocaleEmail = (locale) => {
  switch (locale) {
    case 'fr':
      return 'Email';
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
  <Input {...{ ...args, label: getCaptionForLocaleEmail(locale) }} />
);

const Template_Password: Story<InputProps> = (
  args,
  { globals: { locale } }
) => <Input {...{ ...args, label: getCaptionForLocalePassword(locale) }} />;

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
  component: Input,
};
