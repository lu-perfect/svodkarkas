declare global {
  type Option<Key = number | string, Value = number | string> = {
    key: Key;
    value: Value;
  }

  type Options<Key = number | string, Value = number | string> = Array<Option<Key, Value>>;
}

export {}
