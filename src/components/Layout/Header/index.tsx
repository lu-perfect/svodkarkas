import { useEffect, useRef } from "react";

import Box from "components/UI/Box";

import TopSection from "./sections/Top";
import BottomSection from "./sections/Bottom";

const Header = () => {
  const ref = useRef<HTMLElement>(null);

  function handleScroll() {
    if (window.scrollY >= 400) {
      ref.current?.classList.add("active");
    } else {
      ref.current?.classList.remove("active");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <header className="header" ref={ref}>
      <Box className="overlay" />

      <TopSection />

      <BottomSection />
    </header>
  );
};

export default Header;
