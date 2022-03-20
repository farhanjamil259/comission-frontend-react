import React from "react";
import CustomForm from "../../../../components/form/CustomForm";
import XFlex from "../../../../components/form/FormFlex";
import SplitInput from "../../../../components/form/SplitInput";
import IGSInput from "../../../../components/inputs/IGSInput";

type CustomFormProps = {
  id: string;
};

const EmployeeAddStepOne = (props: CustomFormProps): React.ReactElement => {
  return (
    <CustomForm id={props.id} title="General Info">
      <SplitInput>
        <IGSInput label="First Name" />
        <IGSInput label="Last Name" />
      </SplitInput>
      <IGSInput type="email" label="Email Address" />
      <IGSInput type="phone" label="Phone" />
      <IGSInput type="ssn" label="SSN" />
      <IGSInput type="text" label="Address" />
    </CustomForm>
  );
};

export default EmployeeAddStepOne;
