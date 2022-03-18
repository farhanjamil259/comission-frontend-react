import React from "react";
import { Outlet } from "react-router-dom";
import PerformanceSidenav from "./components/PerformanceSidenav";

const Performance = (): React.ReactElement => {
  return (
    <div className="performance">
      <div className="performance__sidenav">
        <PerformanceSidenav />
      </div>
      <div className="performance__content">
        <Outlet />
      </div>
    </div>
  );
};

export default Performance;
