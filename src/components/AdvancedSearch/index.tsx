import {useEffect, useState} from "react";

import Typography from "components/UI/Typography";
import Button from "components/UI/Button";
import Box from "components/UI/Box";

import {
  areaFilter,
  areaKey,
  bathroomsFilter,
  bedroomsFilter,
  FilterKey,
  floorsFilter,
  priceFilter,
  priceKey,
  roofFilter,
  styleFilter
} from "data/projects/filters";
import useProjectSearch from "store/ProjectSearch/hooks";
import Icon from "components/UI/Icon";
import List from "components/UI/List";
import ListItem from "components/UI/ListItem";

const SelectFilter = ({ id, label, width = 24, options } : { id: FilterKey, label: string, width?: 12 | 24, options: Options }) => {
  const [key, setKey] = useState<string | number>('');

  const { filters, setFilterValue } = useProjectSearch();

  useEffect(() => {
    setKey(filters[id]);
  }, [filters, id]);

  return (
    <Box className={`form-field w-${width}`}>
      <label>{label}</label>
      <Box id={`${id}-select`} className="select-box">
        <fieldset className="current" tabIndex={1}>
          <Box className="value">
            <Typography tag="p">{options.find((e) => e.key === key)?.value || 'Все'}</Typography>
          </Box>

          <Icon viewBox="0 0 1000 1000">
            <path d="M500,775.4L10,287.2l64.4-62.6L500,650.2l425.6-425.6l64.4,62.6L500,775.4z"/>
          </Icon>
        </fieldset>
        <List>
          {[{ key: 'all', value: 'Все' }, ...options].map((option) => (
            <ListItem key={option.key}>
              <label
                className={`option${option.key === key ? ' active' : ''}`}
                htmlFor={option.key.toString()}
                aria-hidden
                onClick={() => setFilterValue(id, option.key)}
              >
                {option.value}
              </label>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

const AdvancedSearch = () => {
  const { search, orderByKey, orderAsc, orderBy } = useProjectSearch();
  const [open, setOpen] = useState(false);

  return (
    <Box className="advanced-search">
      <SelectFilter {...priceFilter} />
      <SelectFilter {...areaFilter} />
      <SelectFilter {...floorsFilter} />

      <Box className="button-wrapper">
        <Button onClick={search}>
          Подобрать Проект
        </Button>
      </Box>

      <Box className="bottom-filters">
        <Typography>
          Сортировать по
        </Typography>

        <Button className="sort" onClick={() => {
          orderByKey(priceKey);
          search();
        }}>
          цене
          <Icon width="24px" height="24px" viewBox="0 0 24 24" className={orderBy === priceKey ? orderAsc ? 'asc' : 'desc' : undefined}>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0809 7.28641L12.4345 6.93286L12.788 7.28641L17 11.4984L16.2929 12.2055L12.9345 8.84707V16.9999H11.9345V8.84707L8.57605 12.2055L7.86895 11.4984L12.0809 7.28641Z"/>
          </Icon>
        </Button>

        <Button className="sort" onClick={() => {
          orderByKey(areaKey);
          search();
        }}>
          площади
          <Icon width="24px" height="24px" viewBox="0 0 24 24" className={orderBy === areaKey ? orderAsc ? 'asc' : 'desc' : undefined}>
            <path fillRule="evenodd" clipRule="evenodd" d="M12.0809 7.28641L12.4345 6.93286L12.788 7.28641L17 11.4984L16.2929 12.2055L12.9345 8.84707V16.9999H11.9345V8.84707L8.57605 12.2055L7.86895 11.4984L12.0809 7.28641Z" />
          </Icon>
        </Button>

        <Button className="show-more" onClick={() => setOpen(!open)}>
          {open ? 'Скрыть' : 'Дополнительные параметры'}
        </Button>
      </Box>


      {open && (
        <>
          <SelectFilter {...bedroomsFilter} />
          <SelectFilter {...bathroomsFilter} />
          <SelectFilter {...roofFilter} />
          <SelectFilter {...styleFilter} />
        </>
      )}
    </Box>
  );
}
export default AdvancedSearch;
