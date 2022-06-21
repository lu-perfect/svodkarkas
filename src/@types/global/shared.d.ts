declare global {
  type Nil<T> = T | null | undefined;

  type Nullable<T> = T | null;

  type Merge<P, T> = Omit<P, keyof T> & T;

  type Option<Key = number | string, Value = number | string> = {
    key: Key;
    value: Value;
  }

  type Options<Key = number | string, Value = number | string> = Array<Option<Key, Value>>;
}
export {}
