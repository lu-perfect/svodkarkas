import ActionButton from "./Button";

import Icon from "components/UI/Icon";
import Box from "components/UI/Box";
import SearchBox from "./SearchBox";

export type ActionsProps = {
  menu: boolean;
  toggleMenu: () => void;
}

const Actions = ({ menu, toggleMenu } : ActionsProps) => (
  <Box className="bottom-header__actions">
    <SearchBox />

    <ActionButton
      label="Личный кабинет"
      caption="Личный кабинет"
      icon={(
        <Icon viewBox="0 0 512 512" fill="none" stroke="currentcolor" className="action-button__icon">
          <path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" strokeMiterlimit="10" strokeWidth="32px" />
        </Icon>
      )}
    />

    <ActionButton
      label="Открыть меню"
      caption="Меню"
      isMenu
      onClick={toggleMenu}
      icon={(
        <Icon viewBox="0 0 100 100" width="28px" height="28px" className={`action-button__icon${menu ? ' is-open' : ''}`}>
          <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className="line line2" d="M 20,50 H 80" />
          <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </Icon>
      )}
    />
  </Box>
);
export default Actions;
