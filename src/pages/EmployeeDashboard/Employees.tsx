import React, { useState } from "react";
import Button from "../../components/button/Button";
import InputField from "../../components/inputs/IGSInput";
import Wizard from "../../components/wizards/Wizard";
import EmployeeAddStepOne from "./components/employeeAdd/EmployeeAddStepOne";
import EmployeeAddStepThree from "./components/employeeAdd/EmployeeAddStepThree";
import EmployeeAddStepTwo from "./components/employeeAdd/EmployeeAddStepTwo";

import EmployeeCard from "./components/employeeCard/EmployeeCard";
import EmployeeIdCard from "./components/employeeIdCard/EmployeeIdCard";

const Employees = (): React.ReactElement => {
  const [showWiz, setShowWiz] = useState(false);
  return (
    <div className="employees-page">
      <section className="employees-page-section-id">
        <EmployeeIdCard />
      </section>

      <section className="employees-page-section-tools">
        <div className="employees-page-section-tools-left">
          <InputField placeholder="Search" />
        </div>

        <Button
          text="New Employee"
          variant="primary"
          onClick={(): void => setShowWiz(true)}
        />
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

      <Wizard
        title="New Employee"
        onCancel={(): void => setShowWiz(false)}
        show={showWiz}
        onSubmit={(): void => setShowWiz(false)}
      >
        <EmployeeAddStepOne id="employee-add-step-1" />
        <EmployeeAddStepTwo id="employee-add-step-2" />
        <EmployeeAddStepThree id="employee-add-step-" />
      </Wizard>
    </div>
  );
};

export default Employees;
