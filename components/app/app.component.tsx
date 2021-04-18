import React from 'react';
import { HomeComponent, ImageLogo } from '@components';
import { useTranslation } from 'next-i18next';

const AppComponent: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <React.Fragment>
      <div>
        <ImageLogo src={require('@assets/images/logo.png')} />
        <div>
          <h3>{t('text')}</h3>
        </div>
        <HomeComponent
          email=''
          password=''
          email_error={t('email-error')}
          password_error={t('password-error')}
        />
      </div>
    </React.Fragment>
  );
};

export default AppComponent;
