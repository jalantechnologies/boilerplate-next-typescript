import React from 'react';
import styles from '../styles/Home.module.css';
import { AppComponent } from '@components';
import { PageLayoutWithSEO } from '@components';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>

      <PageLayoutWithSEO
      title={'Create Next App'} // TODO agentraghav: Localize
      meta={{
        description:
          'This is a page for creating next app for next js introduction',
        // TODO agentraghav: Localize
      }}
    />
      <AppComponent />
    </div>
  );
};

export default HomePage;
