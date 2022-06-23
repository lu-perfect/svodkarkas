export const appConfig: AppConfig = {
  key: process.env.APP_KEY,

  port: process.env.PORT,

  env: {
    node: process.env.NODE_ENV,
    app: process.env.NEXT_PUBLIC_APP_ENV,
    debug: process.env.NEXT_PUBLIC_DEBUG,
  },

  url: {
    api: process.env.NEXT_PUBLIC_API_URL,
    frontend: process.env.NEXT_PUBLIC_FRONTEND_URL,
  },
};
