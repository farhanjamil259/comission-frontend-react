import React from "react";
import { Link } from "react-router-dom";
import { dashboardRoutes } from "../../../AppRoutes";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      {dashboardRoutes.map((route, routeIndex) => {
        return (
          <Link
            className="header--link"
            key={routeIndex + "headerRoutes"}
            to={route.path}
          >
            {route.title}
          </Link>
        );
      })}
    </header>
  );
};

export default Header;
