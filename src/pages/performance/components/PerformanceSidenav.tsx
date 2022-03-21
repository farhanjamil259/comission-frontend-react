import React from "react";
import HorizontalMenu from "./HorizontalMenu";
import NavProfile from "./NavProfile";
import NavStats from "./NavStats";

const PerformanceSidenav = (): React.ReactElement => {
  return (
    <div className="performance-sidenav">
      <NavProfile />
      <NavStats />
      <HorizontalMenu />
    </div>
  );
};

export default PerformanceSidenav;
