import React from 'react';
import App from 'next/app';
import '../styles/globals.css';
import { appWithTranslation } from '../i18n';

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

async function getProps(appContext) {
  return await App.getInitialProps(appContext);
}

MyApp.getInitialProps = getProps;

export default appWithTranslation(MyApp);
