import React from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../logo/Logo";

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
    path: "/employees",
    active: true,
  },
  {
    label: "Contracts",
    path: "/contracts",
  },
  {
    label: "Teams",
    path: "/teams",
  },
  {
    label: "Payouts",
    path: "/payouts",
  },
  {
    label: "Report",
    path: "/reports",
  },
  {
    label: "Settings",
    path: "/settings",
  },
  {
    label: "Help",
    path: "/help",
  },
  {
    label: "Farhan",
    path: "/farhan",
  },
  {
    label: "Ahsan",
    path: "/ahsan",
  },
];

const SideNav = (): React.ReactElement => {
  const location = useLocation();

  return (
    <aside className="sidenav">
      <div className="sidenav-header">
        <Logo size="small" />
      </div>
      <div className="sidenav-menu">
        {menuItems.map((item, itemIndex) => {
          return (
            <Link
              className={`sidenav-menu--link ${
                location.pathname === item.path
                  ? "sidenav-menu--link--active"
                  : ""
              }`}
              to={item.path}
              key={itemIndex + "sideNavItem"}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="sidenav-footer">Logout</div>
    </aside>
  );
};

export default SideNav;
