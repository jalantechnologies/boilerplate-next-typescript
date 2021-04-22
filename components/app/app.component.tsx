import React from 'react';
import { useTranslation } from 'next-i18next';

const AppComponent: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <React.Fragment>
      <div className='bg-class'>
        <p className='heading'> Next JS Boilerplate</p>
        <div className='next-logo'></div>
        <div className='base-logo'></div>
        <div className='eslint-logo'></div>
        <div className='storybook-logo'></div>
        <div className='seo-logo'></div>
        <div className='ts-logo'></div>
        <div className='sentry-logo'></div>
        <div className='i18n-logo'></div>
        <div className='jest-logo'></div>
        <div className='formik-logo'></div>
      </div>
    </React.Fragment>
  );
};

export default AppComponent;
