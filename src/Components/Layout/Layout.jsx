import React from "react";
import Header from "../Header/Header";
import MenuHeader from "../MenuHeader/MenuHeader";

function Layout({ children }) {
  return (
    <div>
      <Header />
          <MenuHeader />
          {children}
    </div>
  );
}

export default Layout;
