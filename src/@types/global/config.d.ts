declare global {
  interface Config {
    isProduction: boolean;

    app: AppConfig;
    database: DatabaseConfig;
    company: CompanyConfig;
    seo: SEOConfig;
  }

  interface AppConfig {
    key: string;

    port: number;

    env: {
      node: 'development' | 'test' | 'production',
      app:  'local' | 'staging' | 'production',
      debug: boolean,
    },

    url: {
      api: string;
      frontend: string;
    }
  }

  interface CompanyConfig {
    entity: string;
    entity_full: string;
    address: string;
    address_yandex_map: string;
    director: string;
    email: string;
    phone: string;
    city: string;
    logo: string;
  }

  interface DatabaseConfig {
    name: string;
    username: string;
    password: string;
    host: string;
    port: number;
  }

  interface SEOConfig {
    title: string;
    description: string;

    keywords: string;

    verification: {
      yandex: string;
      google: string;
      facebook: string;
    }

    twitter: {
      handle: string;
    }
  }
}
export {}
