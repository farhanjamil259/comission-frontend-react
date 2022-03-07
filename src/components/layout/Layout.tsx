import React from "react";
import Header from "../header/Header";
import "./Layout.scss";

type LayoutProps = {
  children: React.ReactElement;
};

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <div className="igs-container">
      <header className="header"></header>
      <aside className="sidenav"></aside>
      <main className="main">{children}</main>
      <footer className="footer"></footer>
    </div>
  );
};

export default Layout;
