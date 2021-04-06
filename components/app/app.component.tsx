import * as React from 'react';
import { HomeComponent } from '@components';
import Image from 'next/image';



const AppComponent = (): JSX.Element => {
  return (
    <div>
      <Image
        src={`${process.env.baseUrl}/assets/images/logo.png`}
        alt='logo'
        width={200}
        height={200}
      />
      <HomeComponent text={'Hello World'} />
    </div>
  );
};

export default AppComponent;
