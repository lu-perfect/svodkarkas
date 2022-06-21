namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    APP_KEY: string;

    NODE_ENV: 'development' | 'production';
    PORT: number;

    DATABASE_NAME: string;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_HOST: string;
    DATABASE_PORT: number;

    NEXT_PUBLIC_DEBUG: boolean;
    NEXT_PUBLIC_APP_ENV: 'local' | 'staging' | 'production';

    NEXT_PUBLIC_SITE_NAME: string;
    NEXT_PUBLIC_SITE_DESCRIPTION: string;

    NEXT_PUBLIC_SITE_KEYWORDS: string;

    NEXT_PUBLIC_VERIFICATION_YANDEX: string;
    NEXT_PUBLIC_VERIFICATION_GOOGLE: string;
    NEXT_PUBLIC_VERIFICATION_FACEBOOK: string;

    NEXT_PUBLIC_SEO_TWITTER_HANDLE: string;

    NEXT_PUBLIC_COMPANY_ENTITY: string;
    NEXT_PUBLIC_COMPANY_ENTITY_FULL: string;
    NEXT_PUBLIC_COMPANY_ADDRESS: string;
    NEXT_PUBLIC_COMPANY_ADDRESS_YANDEX_MAP: string;
    NEXT_PUBLIC_COMPANY_DIRECTOR: string;
    NEXT_PUBLIC_COMPANY_EMAIL: string;
    NEXT_PUBLIC_COMPANY_PHONE: string;
    NEXT_PUBLIC_COMPANY_CITY: string;
    NEXT_PUBLIC_COMPANY_LOGO: string;

    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_FRONTEND_URL: string;
  }
}
