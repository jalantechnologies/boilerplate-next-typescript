import React from 'react';
import ButtonInput from './button';
import { Story } from '@storybook/react';

type ButtonProps = {
  text: string;
  disabled: boolean;
  onClick: () => void;
};

const Template: Story<ButtonProps> = (args) => <ButtonInput {...args} />;

export const LogInButton = Template.bind({});
LogInButton.args = {
  text: 'login',
  disabled: false,
};

export const LogOutButton = Template.bind({});
LogOutButton.args = {
  text: 'logout',
};

export default {
  title: 'Button',
  component: ButtonInput,
};
