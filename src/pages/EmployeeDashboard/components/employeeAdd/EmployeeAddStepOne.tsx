import React from "react";
import CustomForm from "../../../../components/form/CustomForm";
import FormFlex from "../../../../components/form/FormFlex";
import IGSInput from "../../../../components/inputs/IGSInput";

const EmployeeAddStepOne = (): React.ReactElement => {
  return (
    <CustomForm id="employee-add-step1" title="General Info">
      <FormFlex column>
        <FormFlex>
          <IGSInput label="First Name" />
          <IGSInput label="Last Name" />
        </FormFlex>
        <IGSInput type="email" label="Email Address" />
        <IGSInput type="phone" label="Phone" />
        <IGSInput type="ssn" label="SSN" />
        <IGSInput type="text" label="Address" />
      </FormFlex>
    </CustomForm>
  );
};

export default EmployeeAddStepOne;
