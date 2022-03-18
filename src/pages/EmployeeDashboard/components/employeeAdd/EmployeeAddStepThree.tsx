import React from "react";
import CustomForm from "../../../../components/form/CustomForm";
import XFlex from "../../../../components/form/FormFlex";
import IGSInput from "../../../../components/inputs/IGSInput";
import RadioInput from "../../../../components/inputs/RadioInput";

type CustomFormProps = {
  id: string;
};

const EmployeeAddStepThree = (props: CustomFormProps): React.ReactElement => {
  const radioOptions = [
    {
      label: "Sales",
      value: "Direct compensation",
    },
    {
      label: "Draw",
      value: "Loan to be repaid",
    },
  ];
  return (
    <CustomForm id={props.id} title="Payroll Account">
      <XFlex column>
        <RadioInput options={radioOptions} />
        <IGSInput type="currency" label="Amount" />
        <IGSInput type="calendar-day" label="Pay Day" />
        <IGSInput type="currency" label="Reserve Limit" />
      </XFlex>
    </CustomForm>
  );
};

export default EmployeeAddStepThree;
