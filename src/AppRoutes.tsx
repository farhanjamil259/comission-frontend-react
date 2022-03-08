import React from "react";
import Data from "./pages/Data";
import AhsanComponents from "./pages/design/AhsanComponents";
import FarhanComponents from "./pages/design/FarhanComponents";
import Home from "./pages/Home";

export interface IRoute {
  title: string;
  path: string;
  page: React.ReactElement;
  exact?: boolean;
}

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
];
