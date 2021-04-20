import React from 'react';
import ImageLogo from './image';
import { Story } from '@storybook/react';

type ImageProps = {
  src: string;
};

const Template: Story<ImageProps> = (args) => <ImageLogo {...args} />;

export const ImageLogoStory = Template.bind({});
ImageLogoStory.args = {
  src: require('@assets/images/logo.png'),
};

export default {
  title: 'Image',
  component: ImageLogo,
};
