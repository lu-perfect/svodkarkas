import SocialLink from './Link';

import links from "./links.data";

import styles from './styles.module.scss';

const SocialLinks = () => (
  <ul className={styles.root}>
    {links.map((social) => (
      <SocialLink id={social.id} key={social.id} href={social.href}/>
    ))}
  </ul>
);
export default SocialLinks;
