import { useState } from "react";

import Typography from "./Typography";
import Box from "./Box";
import Icon from "./Icon";
import List from "./List";
import ListItem from "./ListItem";

const Select = ({ id, options } : { id: string, options: Options }) => {
  const [key, setKey] = useState(options[0].key);

  return (
    <Box id={`${id}-select`} className="select-box">
      <fieldset className="current" tabIndex={1}>
        {options.map((option, i) => (
          <Box className="value" key={option.key}>
            <input
              type="radio"
              id={`${id}-${option.key}`}
              value={option.key}
              checked={option.key === key}
            />
            <Typography tag="p">{option.value}</Typography>
          </Box>
        ))}

        <Icon viewBox="0 0 1000 1000">
          <path d="M500,775.4L10,287.2l64.4-62.6L500,650.2l425.6-425.6l64.4,62.6L500,775.4z"/>
        </Icon>
      </fieldset>
      <List>
        {options.map((option) => (
          <ListItem key={option.key}>
            <label
              className={`option${option.key === key ? ' active' : ''}`}
              htmlFor={option.key.toString()}
              aria-hidden
              onClick={() => {
                setKey(option.key);
              }}
            >
              {option.value}
            </label>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
export default Select;
