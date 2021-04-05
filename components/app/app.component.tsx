import * as React from 'react';

import HomeComponent from '../home/home.component';

const AppComponent = (): JSX.Element => {
  return (
    <div>
      <img className='logo' src='../../assets/logo.png' alt='' />
      <HomeComponent text='Hello World' />
    </div>
  );
};

export default AppComponent;
