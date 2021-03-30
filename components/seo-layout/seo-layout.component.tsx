import Head from 'next/head';

function SeoLayout(props) {
  const { title, content } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={content}></meta>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  );
}

export default SeoLayout;
