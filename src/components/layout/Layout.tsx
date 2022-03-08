import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SideNav from "./sidenav/SideNav";
import { Outlet } from "react-router-dom";

const Layout = (): React.ReactElement => {
  return (
    <div className="igs-container">
      <Header />
      <SideNav />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
