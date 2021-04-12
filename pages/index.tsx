import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('title')}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{t('title')}</h1>
        <div>
          <Link href='/' locale={router.locale === 'en' ? 'fr' : 'en'}>
            <button>{t('change-locale')}</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
