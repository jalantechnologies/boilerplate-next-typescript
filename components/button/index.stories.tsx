import React from 'react';
import ButtonInput from './button';
import { Story } from '@storybook/react';

type ButtonProps = {
  intext: string;
  disabled: boolean;
};

const Template: Story<ButtonProps> = (args) => <ButtonInput {...args} />;

export const LogInButton = Template.bind({});
LogInButton.args = {
  intext: 'login',
  disabled: false,
};

export const LogOutButton = Template.bind({});
LogOutButton.args = {
  intext: 'logout',
};

export default {
  title: 'Button',
  component: ButtonInput,
};
