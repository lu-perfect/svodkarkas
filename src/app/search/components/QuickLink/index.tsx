import Icon from "components/UI/Icon";
import styles from './styles.module.scss';

const QuickLink = ({ caption, onClick } : { caption: string, onClick: () => void }) => (
  <li className={styles.root} tabIndex={-1} onClick={onClick}>
    <div className={styles.wrapper}>
      <Icon viewBox="0 0 40 40" width="32px" height="32px">
        <circle cx="20" cy="20" r="20" fillOpacity=".2"/>
        <path d="M27.914 18.593A1 1 0 0 0 27 18h-5.719l1.689-6.757a1 1 0 0 0-1.713-.912l-9 10A1 1 0 0 0 13 22h5.719l-1.689 6.757a1 1 0 0 0 1.713.912l9-10a1 1 0 0 0 .171-1.076z"/>
      </Icon>

      <span>{caption}</span>
    </div>

    <Icon viewBox="0 0 16 16">
      <path fill="none" stroke="#999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fillRule="evenodd" d="M6 2l6 6-6 6" />
    </Icon>
  </li>
);

export default QuickLink;
