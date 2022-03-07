import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./Layout.scss";
import SideNav from "./sidenav/SideNav";

type LayoutProps = {
  children: React.ReactElement;
};

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <div className="igs-container">
      <Header />
      <SideNav />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
