import Head from "next/head";
import React from "react";

export interface MetaDataProps {
  title: string;
  keywords: string;
  description: string;
  canonical: string;
}

const Meta: React.FC<any> = ({ metaData}) => {
  return (
    <Head>
      <title>{metaData.title}</title>
      <meta property="og:site_name" content="Twitter Clone" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="keywords" content={metaData.keywords}></meta>
      <meta name="description" content={metaData.description}></meta>
      <link rel="canonical" href={metaData.canonical} key="canonical" />
    </Head>
  );
};

export default Meta;
