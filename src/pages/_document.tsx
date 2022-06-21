import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext } from "next/document";

import config from "config";

class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="ru" dir="ltr">
        <Head>
          <base href={config.app.url.frontend} />

          <meta charSet="utf-8"/>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

          <link rel='dns-prefetch' href='https://fonts.googleapis.com'/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            rel="stylesheet"
            href={
              "https://fonts.googleapis.com/css2?" +
              "family=Roboto" +
              ":wght@400;600;700" +
              "&amp;" +
              "family=Montserrat" +
              ":ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900" +
              "&amp;" +
              "family=Open+Sans" +
              ":ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800" +
              "&amp;" +
              "display=swap"} />

          <meta name="application-name" content={config.seo.title} />

          <meta name="apple-mobile-web-app-title" content={config.seo.title} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />

          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="format-detection" content="telephone=no" />

          <meta name="author" content="@lu.perfect" />

          <title>{config.seo.title}</title>
          <meta name="description" content={config.seo.description} />
          <meta name="keywords" content={config.seo.keywords} />

          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />

          <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

          <link rel="manifest" href="/manifest.json" />

          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

          <meta name="theme-color" content="#ffffff" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={config.seo.title} />
          <meta property="og:site_name" content={config.seo.title} />
          <meta property="og:description" content={config.seo.description} />
          <meta property="og:image" content={config.company.logo} style={{ display: 'none' }} />
          <meta property="og:url" content={config.app.url.frontend} />

          <meta property="twitter:card" content="summary" />

          <div itemScope itemType="http://schema.org/Organization">
            <meta itemProp="name" content={config.company.entity_full} />
            <meta itemProp="address" content={config.company.address} />
            <meta itemProp="telephone" content={config.company.phone} />
            <meta itemProp="email" content={config.company.email} />
            <meta itemProp="founder" content={config.company.director} />
            <img itemProp="image" src={config.company.logo} alt={`Логотип ${config.company.entity}`} style={{ display: 'none' }} />
          </div>

          <meta name="yandex-verification" content={config.seo.verification.yandex} />
          <meta name="google-site-verification" content={config.seo.verification.google} />
          <meta name="facebook-domain-verification" content={config.seo.verification.facebook} />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
