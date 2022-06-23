import type { ChangeEvent } from "react";
import {useEffect, useRef, useState} from "react";

import useDebounce from "hooks/useDebounce";

import Icon from "components/UI/Icon";
import ActionButton from "../Button";

import styles from './styles.module.scss';
import {useAppDispatch} from "../../../../../../../hooks/redux";
import {setTerm} from "../../../../../../../app/search/store/slice";
import {useRouter} from "next/router";

const SearchBox = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const ref = useRef<HTMLInputElement>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  useEffect(() => {
    dispatch(setTerm(debouncedValue));
  }, [debouncedValue])

  return (
    <div className={styles.root}>
      <input
        placeholder="Поиск..."
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            router.push(`/search?q=${value}`);
          }
        }}
        ref={ref}
      />

      <ActionButton
        label="Найти"
        caption="Поиск"
        onClick={() => ref.current?.focus()}
        icon={(
          <Icon viewBox="64 64 896 896">
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
          </Icon>
        )}
      />
    </div>
  );
}

export default SearchBox;
