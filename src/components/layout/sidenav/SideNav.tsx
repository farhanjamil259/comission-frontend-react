import React from "react";

import LOGO from "../../../assets/images/Logo.png";

interface MenuItem {
  label: string;
  path: string;
  active?: boolean;
}

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Employees",
    path: "/",
    active: true,
  },
  {
    label: "Contracts",
    path: "/",
  },
  {
    label: "Teams",
    path: "/",
  },
  {
    label: "Payouts",
    path: "/",
  },
  {
    label: "Report",
    path: "/",
  },
  {
    label: "Settings",
    path: "/",
  },
  {
    label: "Help",
    path: "/",
  },
];

const SideNav = (): React.ReactElement => {
  return (
    <aside className="sidenav">
      <div className="sidenav-header">
        <img src={LOGO} alt="" />
      </div>
      <div className="sidenav-menu">
        {menuItems.map((item, itemIndex) => {
          return (
            <div
              className={`sidenav-menu--link ${
                item.active ? "sidenav-menu--link--active" : ""
              }`}
              key={itemIndex + "sideNavItem"}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div className="sidenav-footer">Logout</div>
    </aside>
  );
};

export default SideNav;
