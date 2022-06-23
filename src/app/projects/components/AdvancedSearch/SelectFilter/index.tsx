import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "hooks/redux";

import { selectProjectsFilters } from "../../../store/selectors";
import { intermediateSearch, setFilterValue } from "../../../store/slice";

import { FilterKey } from "data/projects/filters";

import Icon from "components/UI/Icon";

import styles from './styles.module.scss';

function SelectFilter({ id, label, width = 24, options } : { id: FilterKey, label: string, width?: 12 | 24, options: Options }) {
  const [key, setKey] = useState<string | number>('');

  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectProjectsFilters);

  useEffect(() => {
    setKey(filters[id]);
  }, [filters, id]);

  return (
    <div className={`${styles.root} ${styles[`w-${width}`]}`}>
      <label>{label}</label>

      <div className={styles.select}>
        <fieldset tabIndex={1}>
          <span>
            {options.find((e) => e.key === key)?.value || 'Все'}
          </span>

          <Icon viewBox="0 0 1000 1000">
            <path d="M500,775.4L10,287.2l64.4-62.6L500,650.2l425.6-425.6l64.4,62.6L500,775.4z"/>
          </Icon>
        </fieldset>
        <ul className={styles.options}>
          {[{ key: 'all', value: 'Все' }, ...options].map((option) => (
            <li key={option.key}>
              <label
                className={`${styles.option}${option.key === key ? ` ${styles.active}` : ''}`}
                htmlFor={option.key.toString()}
                aria-hidden
                onClick={() => {
                  dispatch(setFilterValue({ key: id, value: option.key }));
                  dispatch(intermediateSearch());
                }}
              >
                {option.value}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SelectFilter;
