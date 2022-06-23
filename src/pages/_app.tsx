import type { AppProps } from 'next/app'
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { Provider } from "react-redux";

import { useEffect, useState } from "react";

import { DefaultSeo } from "next-seo";
import seoConfig from "../../next-seo.config";

const FeedbackFormModal = dynamic(() => import('app/modals/FeedbackForm'))

import 'styles/style.scss';

import store from "store";

import { company } from "config";

function WrappedApp({ Component, pageProps }: AppProps) {
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
    <Provider store={store}>
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

      <FeedbackFormModal />
    </Provider>
  )
}

export default WrappedApp;
