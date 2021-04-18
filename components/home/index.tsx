import React from 'react';
import { HomeComponent } from '@components';
import { Input } from '@components';
import { storiesOf } from '@storybook/react';

export default {
  component: HomeComponent,
  title: 'Form',
};

export const Default = () => (
  <HomeComponent email='Email' password='Password' />
);
