const { company } = require("./src/config");

/** @type {import('next-sitemap').IConfig} */
const NextSitemapConfig = {
  siteUrl: company.url,
  generateRobotsTxt: true,
};

module.exports = NextSitemapConfig;
