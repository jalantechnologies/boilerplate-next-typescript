import { PageLayoutWithSEO } from '../components/seo-layout/page-layout-with-seo.component';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <PageLayoutWithSEO
        title={'Create Next App'}
        // TODO agentraghav: Localize
        meta={{
          description:
            'This is a page for creating next app for next js introduction',
          // TODO agentraghav: Localize
        }}
      />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>{' '}
          {/* TODO agentraghav: Localize*/}
        </h1>

        <p className={styles.description}>
          Get started by editing
          {/* TODO agentraghav: Localize*/}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h3>Documentation &rarr;</h3>
            {/* TODO agentraghav: Localize*/}
            <p>
              Find in-depth information about Next.js features and API.
            </p>{' '}
            {/* TODO agentraghav: Localize*/}
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h3>Learn &rarr;</h3>
            {/* TODO agentraghav: Localize*/}
            <p>
              Learn about Next.js in an interactive course with quizzes!
            </p>{' '}
            {/* TODO agentraghav: Localize*/}
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}>
            <h3>Examples &rarr;</h3>
            {/* TODO agentraghav: Localize*/}
            <p>
              Discover and deploy boilerplate example Next.js projects.
            </p>{' '}
            {/* TODO agentraghav: Localize*/}
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}>
            <h3>Deploy &rarr;</h3>
            {/* TODO agentraghav: Localize*/}
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.{' '}
              {/* TODO agentraghav: Localize*/}
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by
          {/* TODO agentraghav: Localize*/}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
