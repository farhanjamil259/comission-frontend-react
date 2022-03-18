import React from "react";
import CustomForm from "../../../../components/form/CustomForm";
import XFlex from "../../../../components/form/FormFlex";
import IGSInput from "../../../../components/inputs/IGSInput";
import RadioInput from "../../../../components/inputs/RadioInput";
import SelectInput from "../../../../components/inputs/SelectInput";
type CustomFormProps = {
  id: string;
};

const EmployeeAddStepTwo = (props: CustomFormProps): React.ReactElement => {
  const radioOptions = [
    {
      label: "Sales Rep",
      value: "Team Member",
    },
    {
      label: "Manager",
      value: "Team Leader",
    },
  ];
  const searchOptions = [
    {
      label: "Alpha",
      value: "Alpha",
    },
    {
      label: "Bravo",
      value: "Bravo",
    },
  ];
  return (
    <CustomForm id={props.id} title="Select Role">
      <XFlex column>
        <RadioInput options={radioOptions} />
        <SelectInput label="Assign Team" searcheable options={searchOptions} />
      </XFlex>
    </CustomForm>
  );
};

export default EmployeeAddStepTwo;
