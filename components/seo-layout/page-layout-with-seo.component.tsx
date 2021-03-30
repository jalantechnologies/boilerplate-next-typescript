import React from 'react';
import Head from 'next/head';

type PageLayoutWithSEOProps = {
  title: string;
  description: string;
};

export const PageLayoutWithSEO: React.FC<PageLayoutWithSEOProps> = ({
  title,
  description,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  );
};
