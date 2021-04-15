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
        <div>
          <h3>Hello World</h3> {/*TODO : agentraghav = localize*/}
        </div>
        <HomeComponent /> {/*TODO : agentraghav = localize*/}
      </div>
    </React.Fragment>
  );
};

export default AppComponent;
