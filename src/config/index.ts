export * from './company';
export * from './env';
import { appConfig } from './app.config';
import { companyConfig } from "./company.config";
import { seoConfig } from "./seo.config";
import { databaseConfig } from "./database.config";

const config: Config = {
  isProduction: process.env.NODE_ENV === 'production',

  app: appConfig,
  database: databaseConfig,
  company: companyConfig,
  seo: seoConfig,
};

export default config;
