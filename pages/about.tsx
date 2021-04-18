import React from 'react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageLayoutWithSEO, AboutComponent } from '@components';

const AboutPage: React.FunctionComponent<any> = () => {
  const { t } = useTranslation('common');
  return (
    <div className='container-box'>
      <PageLayoutWithSEO
        title={t('title')}
        meta={{
          description: t('description'),
        }}
      />
      <main>
        <AboutComponent heading={t('heading')} about_para={t('about_para')} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default AboutPage;
