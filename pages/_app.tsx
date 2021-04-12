import '../styles/globals.css';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import CONFIG from '@config';

if (CONFIG.sentryDSN) {
  Sentry.init({
    dsn: CONFIG.sentryDSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
