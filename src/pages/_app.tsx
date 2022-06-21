import Head from "next/head";
import { DefaultSeo } from "next-seo";
import type { AppProps } from 'next/app'

import 'styles/style.scss';

import seoConfig from "../../next-seo.config";
import { company } from "config";
import ProjectSearchProvider from "../store/ProjectSearch/provider";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import FeedbackFormProvider from "../store/FeedbackForm/provider";

function MyApp({ Component, pageProps }: AppProps) {
  const { events: routerEvents } = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.add('js');
  }, []);


  useEffect(() => {
    function startLoader() {
      setPageLoading(true);
    }

    function stopLoader() {
      setPageLoading(false);
    }

    routerEvents.on('routeChangeStart', startLoader);
    routerEvents.on('routeChangeComplete', stopLoader);
    routerEvents.on('routeChangeError', stopLoader);
  }, [routerEvents]);

  return (
    <FeedbackFormProvider>
      <ProjectSearchProvider>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
          <meta name="description" content={company.seo.home.description} />
          <title>{company.seo.home.title}</title>
        </Head>
        <DefaultSeo
          {...seoConfig}
          additionalMetaTags={[
            {
              httpEquiv: 'content-type',
              content: 'text/html; charset=utf-8',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
            },
            {
              httpEquiv: 'x-ua-compatible',
              content: 'IE=edge; chrome=1',
            },
          ]}
        />
        {pageLoading && <div className="loader" />}
        <Component {...pageProps} />
      </ProjectSearchProvider>
    </FeedbackFormProvider>
  )
}

// @ts-ignore
export default MyApp;
