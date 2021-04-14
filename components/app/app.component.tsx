import React from 'react';
import { HomeComponent } from '@components';
import Image from 'next/image';
import IMG_CONFIG from './image-config';
const AppComponent: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <Image
          src={require('@assets/images/logo.png')}
          alt='logo'
          width={IMG_CONFIG.width}
          height={IMG_CONFIG.height}
        />
        <HomeComponent text={'Hello World'} />{' '}
        {/*TODO : agentraghav = localize*/}
      </div>
    </React.Fragment>
  );
};

export default AppComponent;
