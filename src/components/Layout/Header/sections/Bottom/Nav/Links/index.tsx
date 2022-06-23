import NavItem from "./Item";

import styles from './styles.module.scss';

const NavLinks = () => (
  <ul className={styles.root}>
    <NavItem href="/projects" caption="Проекты"/>
    <NavItem href="/gallery" caption="Галерея"/>

    <NavItem
      href="/services"
      caption="Услуги"
      sublinks={[
        { href: '/services#design-services', caption: 'Проектирование' },
        { href: '/services#visit-object', caption: 'Посещение объекта' },
        { href: '/services#departure-specialist', caption: 'Выезд специалиста' },
        { href: '/services#turnkey-building', caption: 'Строительство под ключ' },
        { href: '/services#object-observation', caption: 'Отслеживание строительства' },
        { href: '/services#credit', caption: 'Дом в кредит' },
      ]}
    />

    <NavItem href="/contacts" caption="Контакты"/>
  </ul>
);
export default NavLinks;
