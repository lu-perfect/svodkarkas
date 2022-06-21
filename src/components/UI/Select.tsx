import { useState } from "react";

import Box from "./Box";
import Icon from "./Icon";
import List from "./List";
import ListItem from "./ListItem";
import Typography from "./Typography";

export type SelectProps = {
  id: string;
  options: Options;
}

export const Select = ({ id, options } : SelectProps) => {
  const [open, setOpen] = useState(false);

  const [key, setKey] = useState(options[0].key);

  return (
    <Box id={`${id}-select`} className="select">
      <fieldset className="select__fieldset" tabIndex={1}>
        {options.map((option) => (
          <Box className="select-value" key={option.key} onClick={() => setOpen(!open)}>
            <Typography tag="p" className={`select-value__caption${option.key === key ? ' selected' : ''}`}>
              {option.value}
            </Typography>
          </Box>
        ))}

        <Icon viewBox="0 0 1000 1000" className={`select__arrow-icon${open ? ' opened' : ''}`}>
          <path d="M500,775.4L10,287.2l64.4-62.6L500,650.2l425.6-425.6l64.4,62.6L500,775.4z"/>
        </Icon>
      </fieldset>

      <List className={`select-list${open ? ' opened' : ''}`}>
        {options.map((option) => (
          <ListItem className={`select-variant${option.key === key ? ' selected' : ''}`} key={option.key} onClick={() => {
            setKey(option.key);
            setOpen(false);
          }}>
            <label htmlFor={option.key.toString()} aria-hidden>
              {option.value}
            </label>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
export default Select;
