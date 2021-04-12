import * as React from 'react';
import { HomeComponent } from '@components';
import Image from 'next/image';
import { withTranslation } from '../../i18n';
const AppComponent = (): JSX.Element => {
  return (
    <div>
      <Image
        src={require('@assets/images/logo.png')}
        alt='logo'
        width={200}
        height={200}
      />
      <HomeComponent />
    </div>
  );
};

export default withTranslation('common')(AppComponent);
