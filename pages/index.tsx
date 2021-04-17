import React from 'react';
import styles from '../styles/Home.module.css';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageLayoutWithSEO, AppComponent } from '@components';

const HomePage: React.FunctionComponent<any> = () => {
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <PageLayoutWithSEO
        title={t('title')}
        meta={{
          description: t('description'),
        }}
      />
      <main className={styles.main}>
        <AppComponent />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default HomePage;
