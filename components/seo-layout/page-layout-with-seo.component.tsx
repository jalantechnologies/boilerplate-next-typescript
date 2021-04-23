import React from 'react';
import Head from 'next/head';

/**
 * @component
 * @summary This is SEO component used for SEO, it takes two props one is title and other is meta object
 * @typedef {object} PageLayoutWithSEO
 * @param {string} title take title input of page
 * @param {object} meta take object input for page description
 * @example
 * <PageLayoutWithSEO title='Next Js Boilerplate' meta={{description:'page discription goes here'}} />
 * */

type MetaProps = {
  description: string;
};

type PageLayoutWithSEOProps = {
  title: string;
  meta: MetaProps;
};

const PageLayoutWithSEO: React.FC<PageLayoutWithSEOProps> = ({
  title,
  meta,
}: PageLayoutWithSEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={meta.description} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  );
};

export default PageLayoutWithSEO;
