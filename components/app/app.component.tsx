import React from 'react';

type AppProps = {
  about_para: string;
  readme: string;
  title: string;
};

const AppComponent: React.FC<AppProps> = ({ about_para, readme, title }) => {
  return (
    <React.Fragment>
      <div className='bg-class'>
        <div className='head'>
          <p className='heading'>{title}</p>
          <p className='sub-head'>
            {about_para}{' '}
            <span>
              <a
                style={{ color: '#7D7D7D' }}
                href='https://github.com/jalantechnologies/boilerplate-next-typescript#readme'>
                {readme}
              </a>
            </span>{' '}
          </p>
        </div>
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
