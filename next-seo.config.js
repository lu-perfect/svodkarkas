const title = ''; // SITE_NAME
const description = ''; // SITE_DESCRIPTION

const twitterHandle = ''; // SEO_TWITTER_HANDLE

const url = ''; // DOMAIN_FRONTEND

/** @type {import('next-seo').DefaultSeoProps} */
const seoConfig = {
  title,
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,
  description,
  canonical: url,
  openGraph: {
    url,
    title,
    description,
    images: [
      {
        url,
        alt:`${url} og-image`,
      },
    ],
    site_name: title,
  },
  twitter: {
    handle: `@${twitterHandle}`,
    cardType: "summary_large_image",
  },
};

export default seoConfig;
