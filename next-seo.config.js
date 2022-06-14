import { company } from "./src/config";

/** @type {import('next-seo').DefaultSeoProps} */
const seoConfig = {
  title: company.title,
  titleTemplate: `%s | ${company.title}`,
  defaultTitle: company.title,
  description: company.description,
  canonical: company.url,
  openGraph: {
    url: company.url,
    title: company.title,
    description: company.description,
    images: [
      {
        url: company.url,
        alt:`${company.url} og-image`,
      },
    ],
    site_name: company.title,
  },
  twitter: {
    handle: "@svod",
    cardType: "summary_large_image",
  },
};

export default seoConfig;
