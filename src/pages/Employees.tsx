import React from "react";
import Button from "../components/button/Button";
import InputField from "../components/inputs/InputField";
import EmployeeCard from "../partials/employeeCard/EmployeeCard";
import EmployeeIdCard from "../partials/employeeIdCard/EmployeeIdCard";

const Employees = (): React.ReactElement => {
  return (
    <div className="employees-page">
      <section className="employees-page-section-id">
        <EmployeeIdCard />
      </section>

      <section className="employees-page-section-tools">
        <div className="employees-page-section-tools-left">
          <InputField placeholder="Search" />
        </div>

        <Button text="New Employee" variant="success" />
      </section>

      <section className="employees-page-section-employees">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </section>
    </div>
  );
};

export default Employees;
