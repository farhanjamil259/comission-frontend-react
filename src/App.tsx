import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import { dashboardRoutes } from "./AppRoutes";
import Register from "./pages/auth/Register";
import Performance from "./pages/performance/Performance";
import SalesOverview from "./pages/performance/pages/SalesOverview";
import GeneralInfo from "./pages/performance/pages/GeneralInfo";
import EmployeeDetails from "./pages/performance/pages/EmployeeDetails";
import Notification from "./pages/AccountApproved";

const App = (): React.ReactElement => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Misc Routes */}
      <Route path="/notification" element={<Notification />} />

      {/* Performance Page Routes */}
      <Route path="/performance" element={<Performance />}>
        <Route path="/performance/salesoverview" element={<SalesOverview />} />
        <Route path="/performance/generalinfo" element={<GeneralInfo />} />
        <Route
          path="/performance/employeedetails"
          element={<EmployeeDetails />}
        />
      </Route>

      {/* Dashboard Routes */}
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
