import React from 'react';
import Head from 'next/head';

interface PageLayoutWithSEOProps {
  title: string;
  meta: MetaProps;
}

interface MetaProps {
  description: string;
}

export const PageLayoutWithSEO: React.FC<PageLayoutWithSEOProps> = ({
  title,
  meta,
}: PageLayoutWithSEOProps): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={meta.description} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  );
};
