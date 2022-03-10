import React from "react";
import Contracts from "./pages/Contracts/Contracts";
import Data from "./pages/Data";
import AhsanComponents from "./pages/design/AhsanComponents";
import FarhanComponents from "./pages/design/FarhanComponents";
import Employees from "./pages/EmployeeDashboard/Employees";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Payouts from "./pages/Payouts";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Teams from "./pages/Teams";

export interface IRoute {
  title: string;
  path: string;
  page: React.ReactElement;
  exact?: boolean;
}

export const routes: IRoute[] = [
  {
    title: "home",
    path: "/",
    page: <Home />,
    exact: true,
  },
  {
    title: "data",
    path: "/data",
    page: <Data />,
    exact: true,
  },
  {
    title: "Farhan Components",
    path: "/farhan",
    page: <FarhanComponents />,
    exact: true,
  },
  {
    title: "Ahsan Components",
    path: "/ahsan",
    page: <AhsanComponents />,
    exact: true,
  },
];

export const dashboardRoutes: IRoute[] = [
  {
    title: "home",
    path: "/",
    page: <Home />,
    exact: true,
  },
  {
    title: "data",
    path: "/data",
    page: <Data />,
    exact: true,
  },
  {
    title: "Farhan Components",
    path: "/farhan",
    page: <FarhanComponents />,
    exact: true,
  },
  {
    title: "Ahsan Components",
    path: "/ahsan",
    page: <AhsanComponents />,
    exact: true,
  },
  {
    title: "Employees",
    path: "/employees",
    page: <Employees />,
  },
  {
    title: "Contracts",
    path: "/contracts",
    page: <Contracts />,
  },
  {
    title: "Teams",
    path: "/teams",
    page: <Teams />,
  },
  {
    title: "Payouts",
    path: "/payouts",
    page: <Payouts />,
  },
  {
    title: "Report",
    path: "/reports",
    page: <Reports />,
  },
  {
    title: "Settings",
    path: "/settings",
    page: <Settings />,
  },
  {
    title: "Help",
    path: "/help",
    page: <Help />,
  },
];
