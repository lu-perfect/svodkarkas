import { useState } from "react";
import { useRouter } from "next/router";

import Button from "components/UI/Button";
import Icon from "components/UI/Icon";

import {
  areaFilter,
  areaKey,
  bathroomsFilter,
  bedroomsFilter,
  floorsFilter,
  priceFilter,
  priceKey,
  roofFilter,
  styleFilter
} from "data/projects/filters";

import { useAppDispatch, useAppSelector } from "hooks/redux";

import { orderByKey, intermediateSearch, search } from "../../store/slice";
import { selectOrderBy, selectOrderAsc } from "../../store/selectors";

import SelectFilter from "./SelectFilter";

import styles from './styles.module.scss';

const AdvancedSearch = () => {
  const dispatch = useAppDispatch();

  const orderBy = useAppSelector(selectOrderBy);
  const orderAsc = useAppSelector(selectOrderAsc);

  const [open, setOpen] = useState(false);
  const router = useRouter();

  function onOrderBy(key: typeof priceKey | typeof areaKey) {
    dispatch(orderByKey(key));
    dispatch(intermediateSearch());
  }

  return (
    <div className={styles.root}>
      <SelectFilter {...priceFilter} />
      <SelectFilter {...areaFilter} />
      <SelectFilter {...floorsFilter} />

      <div className={styles.buttonWrapper}>
        <Button onClick={() => {
          router.push('/projects');
          dispatch(search());
        }}>
          Подобрать Проект
        </Button>
      </div>

      <div className={styles.bottomFilters}>
        <span>
          Сортировать по
        </span>

        <Button className={styles.sortButton} onClick={() => onOrderBy(priceKey)}>
          цене
          <Icon width="24px" height="24px" viewBox="0 0 24 24" className={orderBy === priceKey ? orderAsc ? styles.asc : styles.desc : undefined}>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0809 7.28641L12.4345 6.93286L12.788 7.28641L17 11.4984L16.2929 12.2055L12.9345 8.84707V16.9999H11.9345V8.84707L8.57605 12.2055L7.86895 11.4984L12.0809 7.28641Z"/>
          </Icon>
        </Button>

        <Button className={styles.sortButton} onClick={() => onOrderBy(areaKey)}>
          площади
          <Icon width="24px" height="24px" viewBox="0 0 24 24" className={orderBy === areaKey ? orderAsc ? styles.asc : styles.desc : undefined}>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0809 7.28641L12.4345 6.93286L12.788 7.28641L17 11.4984L16.2929 12.2055L12.9345 8.84707V16.9999H11.9345V8.84707L8.57605 12.2055L7.86895 11.4984L12.0809 7.28641Z" />
          </Icon>
        </Button>

        <Button className={styles.showMoreButton} onClick={() => setOpen(!open)}>
          {open ? 'Скрыть' : 'Дополнительные параметры'}
        </Button>
      </div>

      {open && (
        <>
          <SelectFilter {...bedroomsFilter} />
          <SelectFilter {...bathroomsFilter} />
          <SelectFilter {...roofFilter} />
          <SelectFilter {...styleFilter} />
        </>
      )}
    </div>
  );
}
export default AdvancedSearch;
