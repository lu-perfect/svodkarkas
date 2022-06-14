type NameToType = {
  readonly NODE_ENV?: 'production' | 'staging' | 'development' | 'test';
};

export function getEnv<Env extends keyof NameToType>(name: Env, throwError?: boolean): NameToType[Env] | undefined;
export function getEnv(name: keyof NameToType, throwError?: boolean): NameToType[keyof NameToType] | undefined {
  const val = process.env[name];

  if (throwError && !val) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }

  return val;
}
