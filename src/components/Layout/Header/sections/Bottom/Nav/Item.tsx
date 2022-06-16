import ListItem from "components/UI/ListItem";
import InternalLink from "components/UI/InternalLink";
import {useRouter} from "next/router";
import Typography from "../../../../../UI/Typography";

type NavItemProps = {
  href: string;
  caption: string;
}

const NavItem = ({ href, caption } : NavItemProps) => {
  const router = useRouter();

  return (
    <ListItem>
      {router.pathname === href
        ? (
          <Typography className="navbar-link active">
            {caption}
          </Typography>
        ) : (
          <InternalLink href={href} className="navbar-link">
            {caption}
          </InternalLink>
        )}
    </ListItem>
  );
}
export default NavItem;
