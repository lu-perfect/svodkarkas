import Box from "components/UI/Box";

import TopSection from "./sections/Top";
import BottomSection from "./sections/Bottom";

export type HeaderProps = {
  isFixed: boolean;
}

const Header = ({ isFixed } : HeaderProps) => (
  <header className={`header${isFixed ? ' active' : ''}`}>
    <Box className="overlay"/>

    <TopSection/>

    <BottomSection/>
  </header>
);

export default Header;
