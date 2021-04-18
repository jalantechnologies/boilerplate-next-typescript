import React from 'react';
import AboutComponent from './about';
import { Story } from '@storybook/react';

type AboutProps = {
  heading: string;
  about_para: string;
};

const Template: Story<AboutProps> = (args) => <AboutComponent {...args} />;

export const AboutComponentPage = Template.bind({});
AboutComponentPage.args = {
  heading: 'About',
  about_para: 'This is an About us Page',
};

export default {
  title: 'About Page',
  component: AboutComponent,
};
