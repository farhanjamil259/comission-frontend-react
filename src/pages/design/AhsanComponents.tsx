import React from "react";
import XFlex from "../../components/form/FormFlex";
import IGSInput from "../../components/inputs/IGSInput";
import RangeInput from "../../components/inputs/RangeInput";
import SelectInput, {
  SelectOptions,
} from "../../components/inputs/SelectInput";
import Wizard from "../../components/wizards/Wizard";
import EmployeeAddStepOne from "../EmployeeDashboard/components/employeeAdd/EmployeeAddStepTwo";

const options: SelectOptions[] = [
  {
    label: "asd",
    value: "asd",
  },
  {
    label: "asd2",
    value: "asd2",
  },
  {
    label: "asd3",
    value: "asd3",
  },
];

const AhsanComponents = (): React.ReactElement => {
  return (
    <form style={{ padding: "50px" }}>
      <XFlex column>
        <IGSInput type="email" label="Email Address" underline showIcon />
      </XFlex>
    </form>
    // <Wizard title="asdasd">
    //   <EmployeeAddStepOne />
    //   <form id="create-employee-2">
    //     <div></div>
    //   </form>
    // </Wizard>
  );
};

export default AhsanComponents;
