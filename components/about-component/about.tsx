import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { ImageLogo, ButtonInput } from '@components';

type AboutProps = {
  heading: string;
  about_para: string;
};

const AboutComponent: React.FC<AboutProps> = ({ heading, about_para }) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const logout = (): void => {
    router.push('/');
  };
  return (
    <React.Fragment>
      <div className='container-box'>
        <ImageLogo src={require('@assets/images/logo.png')} />
        <div>
          <h3>{heading}</h3>
        </div>
        <br />
        <div>
          <ButtonInput onClick={logout} disabled text={t('logout')} />
        </div>
        <br />
        <div>
          <p>{about_para}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutComponent;
