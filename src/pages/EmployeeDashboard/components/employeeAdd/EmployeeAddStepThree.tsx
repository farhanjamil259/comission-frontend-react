import React from "react";
import CustomForm from "../../../../components/form/CustomForm";
import XFlex from "../../../../components/form/FormFlex";
import Checkbox from "../../../../components/inputs/CheckboxInput";
import IGSInput from "../../../../components/inputs/IGSInput";
import RadioInput from "../../../../components/inputs/RadioInput";

type CustomFormProps = {
  id: string;
};

const EmployeeAddStepThree = (props: CustomFormProps): React.ReactElement => {
  const radioOptions = [
    {
      label: "Draw",
      value: "Loan to be repaid",
    },
    {
      label: "Sales",
      value: "Direct compensation",
    },
  ];
  return (
    <CustomForm id={props.id} title="Payroll Account">
      <RadioInput options={radioOptions} />
      <Checkbox
        label="Recoverable Draw?"
        description="When the commission earned is more than the draw, the salesperson return the draw amount."
        formColumn
      />
      <IGSInput type="currency" label="Amount" />
      <IGSInput type="calendar-day" label="Pay Day" />
      <IGSInput type="currency" label="Reserve Limit" />
    </CustomForm>
  );
};

export default EmployeeAddStepThree;
