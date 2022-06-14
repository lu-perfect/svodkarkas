import { getEnv } from './env.utils';

export const env = {
  isProduction: getEnv('NODE_ENV') === 'production',
};
