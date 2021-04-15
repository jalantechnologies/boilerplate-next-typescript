import React from 'react';
import { HomeComponent } from '@components';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import IMG_CONFIG from './image-config';
const AppComponent: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <React.Fragment>
      <div>
        <Image
          src={require('@assets/images/logo.png')}
          alt='logo'
          width={IMG_CONFIG.width}
          height={IMG_CONFIG.height}
        />
        <div>
          <h3>{t('text')}</h3>
        </div>
        <HomeComponent />
      </div>
    </React.Fragment>
  );
};

export default AppComponent;
