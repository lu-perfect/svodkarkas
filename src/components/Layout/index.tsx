import type { PropsWithChildren } from "react";
import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const [fixedHeader, setFixedHeader] = useState<boolean>(false);

  function handleScroll() {
    if (typeof window !== 'undefined') {
      setFixedHeader(window.scrollY >= 400);
    }
  }

  return (
    <div onWheel={handleScroll} onScroll={handleScroll}>
      <Header isFixed={fixedHeader} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
