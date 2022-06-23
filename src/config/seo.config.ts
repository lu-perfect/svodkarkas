export const seoConfig: SEOConfig = {
  title: process.env.NEXT_PUBLIC_SITE_NAME,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,

  keywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS,

  verification: {
    yandex: process.env.NEXT_PUBLIC_VERIFICATION_YANDEX,
    google: process.env.NEXT_PUBLIC_VERIFICATION_GOOGLE,
    facebook: process.env.NEXT_PUBLIC_VERIFICATION_FACEBOOK,
  },

  twitter: {
    handle: process.env.NEXT_PUBLIC_SEO_TWITTER_HANDLE,
  },
};
