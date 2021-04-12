import React from 'react';
import Head from 'next/head';
import { AppComponent } from '../components';
import { withTranslation } from '../i18n';
import styles from '../styles/Home.module.css';

const Home = ({ t }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {t('common:FORM_TITLE')}
      <AppComponent />
    </div>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: 'common',
});

export default withTranslation('common')(Home);
