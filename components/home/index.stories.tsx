import React from 'react';
import HomeComponent from './home.component';
import { Story } from '@storybook/react';

type Values = {
  email: string;
  password: string;
  email_error: string;
  password_error: string;
};

const Template: Story<Values> = (args) => <HomeComponent {...args} />;

export const HomeComponentPage = Template.bind({});
HomeComponentPage.args = {
  email: '',
  password: '',
  password_error: 'Enter valid password',
  email_error: 'Invalid email',
};

export default {
  title: 'Home Page',
  component: HomeComponent,
};
