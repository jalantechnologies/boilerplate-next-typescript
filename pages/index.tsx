import Head from 'next/head';
import { AppComponent } from '../components';
import styles from '../styles/Home.module.css';
import React from 'react'

const HomePage:React.FC=() => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AppComponent />
    </div>
  );
}

export default HomePage;
