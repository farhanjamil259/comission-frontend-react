import React from "react";
import CustomForm from "../../../../components/form/CustomForm";
import FormFlex from "../../../../components/form/FormFlex";
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
      <FormFlex column>
        <RadioInput options={radioOptions} />
        <SelectInput searcheable options={searchOptions} />
      </FormFlex>
    </CustomForm>
  );
};

export default EmployeeAddStepTwo;
