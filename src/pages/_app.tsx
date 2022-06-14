import Head from "next/head";
import { DefaultSeo } from "next-seo";
import type { AppProps } from 'next/app'

import '../styles/main.scss';

import seoConfig from "../../next-seo.config";
import {company} from "../config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
        <meta name="description" content={company.seo.home.description} />
        <title>{company.seo.home.title}</title>
      </Head>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
