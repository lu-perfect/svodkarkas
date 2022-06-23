import ActionButton from "./Button";

import Icon from "components/UI/Icon";
import SearchBox from "./SearchBox";

import styles from './styles.module.scss';
import MenuIcon from "./MenuIcon";

export type ActionsProps = {
  menu: boolean;
  toggleMenu: () => void;
}

const Actions = ({ menu, toggleMenu } : ActionsProps) => (
  <div className={styles.root}>
    <SearchBox />

    <ActionButton
      label="Личный кабинет"
      caption="Личный кабинет"
      icon={(
        <Icon viewBox="0 0 512 512" fill="none" stroke="currentcolor">
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
        <MenuIcon isOpen={menu} />
      )}
    />
  </div>
);
export default Actions;
