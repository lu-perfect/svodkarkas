const withPWA = require("next-pwa");

const isProduction = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  poweredByHeader: false,
  pwa: {
    disable: !isProduction,
    dest: "public",
    register: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
});
