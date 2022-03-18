import React from "react";
import { Link } from "react-router-dom";

const HorizontalMenu = (): React.ReactElement => {
  return (
    <div className="horizontal-menu">
      <Link className="horizontal-menu--link" to="/performance/salesoverview">
        Sales Overview
      </Link>

      <Link className="horizontal-menu--link" to="/performance/generalinfo">
        General Info
      </Link>

      <Link className="horizontal-menu--link" to="/performance/employeedetails">
        Contracts
      </Link>
    </div>
  );
};

export default HorizontalMenu;
