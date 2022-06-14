import ListItem from "components/UI/ListItem";
import InternalLink from "components/UI/InternalLink";

type NavItemProps = {
  href: string;
  caption: string;
}

const NavItem = ({ href, caption } : NavItemProps) => (
  <ListItem>
    <InternalLink href={href} className="navbar-link">
      {caption}
    </InternalLink>
  </ListItem>
);
export default NavItem;
