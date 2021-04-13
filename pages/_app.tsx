import '../styles/globals.css';
import React from 'react';
import * as Sentry from '@sentry/react';
import CONFIG from '@config';
import { AppProps } from 'next/app';

if (CONFIG.sentryDSN) {
  Sentry.init({ dsn: CONFIG.sentryDSN });
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Sentry.ErrorBoundary>
      <Component {...pageProps} />
    </Sentry.ErrorBoundary>
  );
}

export default App;
