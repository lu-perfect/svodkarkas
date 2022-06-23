/** @type {import('next-sitemap').IConfig} */
const NextSitemapConfig = {
  siteUrl: process.env.DOMAIN_FRONTEND,
  generateRobotsTxt: true,
};

module.exports = NextSitemapConfig;
