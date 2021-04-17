import React from 'react';
import Input from './input';
import { Story } from '@storybook/react';

type InputProps = {
  name: string;
  label: string;
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InputStory = Template.bind({});
InputStory.args = {
  name: 'email',
  label: 'Email',
};

export const EmptyInputStory = Template.bind({});
EmptyInputStory.args = {
  name: '',
  label: '',
};

export default {
  title: 'Input Field',
  component: Input,
};
