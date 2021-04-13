import '../styles/globals.css';
import * as Sentry from '@sentry/react';
import CONFIG from '@config';

if (CONFIG.sentryDSN) {
  Sentry.init({ dsn: CONFIG.sentryDSN });
}

function MyApp({ Component, pageProps }) {
  return (
    <Sentry.ErrorBoundary>
      <Component {...pageProps} />
    </Sentry.ErrorBoundary>
  );
}

export default MyApp;
