import { getEnv } from './env.utils';

export const env = {
  publicUrl: 'http://localhost:3000',

  isProduction: getEnv('NODE_ENV') === 'production',
};
