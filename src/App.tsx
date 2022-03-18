import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import { dashboardRoutes } from "./AppRoutes";
import Register from "./pages/auth/Register";
import Performance from "./pages/performance/Performance";
import SalesOverview from "./pages/performance/SalesOverview";
import GeneralInfo from "./pages/performance/GeneralInfo";
import EmployeeDetails from "./pages/performance/EmployeeDetails";

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/performance" element={<Performance />}>
        <Route path="/performance/salesoverview" element={<SalesOverview />} />
        <Route path="/performance/generalinfo" element={<GeneralInfo />} />
        <Route
          path="/performance/employeedetails"
          element={<EmployeeDetails />}
        />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        {dashboardRoutes.map((route, routeIndex) => {
          return (
            <Route key={routeIndex} path={route.path} element={route.page} />
          );
        })}
      </Route>
    </Routes>
  );
};

export default App;
