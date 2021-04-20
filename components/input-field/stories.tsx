import React from 'react';
import Input from './input';
import { Story } from '@storybook/react';

type InputProps = {
  name: string;
  label: string;
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InputStoryEmail = Template.bind({});
InputStoryEmail.args = {
  name: 'email',
  label: 'Email',
};

export const InputStoryPassword = Template.bind({});
InputStoryPassword.args = {
  name: 'password',
  label: 'Password',
};

export default {
  title: 'Input Field',
  component: Input,
};
