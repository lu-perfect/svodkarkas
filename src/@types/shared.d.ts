declare global {
  type Nil<T> = T | null | undefined;

  type Nullable<T> = T | null;

  type Merge<P, T> = Omit<P, keyof T> & T;
}
export {}
