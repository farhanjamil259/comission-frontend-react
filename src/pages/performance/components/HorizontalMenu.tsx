import React from "react";
import { Link, useLocation } from "react-router-dom";

const HorizontalMenu = (): React.ReactElement => {
  const location = useLocation();

  return (
    <div className="horizontal-menu">
      <Link
        className={`horizontal-menu--link ${
          location.pathname === "/performance/salesoverview"
            ? "horizontal-menu--link--active"
            : ""
        }`}
        to="/performance/salesoverview"
      >
        Sales Overview
      </Link>

      <Link
        className={`horizontal-menu--link ${
          location.pathname === "/performance/generalinfo"
            ? "horizontal-menu--link--active"
            : ""
        }`}
        to="/performance/generalinfo"
      >
        General Info
      </Link>

      <Link
        className={`horizontal-menu--link ${
          location.pathname === "/performance/employeedetails"
            ? "horizontal-menu--link--active"
            : ""
        }`}
        to="/performance/employeedetails"
      >
        Contracts
      </Link>
    </div>
  );
};

export default HorizontalMenu;
