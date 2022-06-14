import type { PropsWithChildren } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren<{}>) => (
  <>
    <Header/>
    <main>
      {children}
    </main>
    <Footer/>
  </>
);

export default Layout;
