import React from "react";
import CustomForm from "../../../../components/form/CustomForm";
import XFlex from "../../../../components/form/FormFlex";
import IGSInput from "../../../../components/inputs/IGSInput";
import RadioInput from "../../../../components/inputs/RadioInput";
import SelectInput from "../../../../components/inputs/SelectInput";

type CustomFormProps = {
  id: string;
};

const ContractAddStepOne = (props: CustomFormProps): React.ReactElement => {
  const radioOptions = [
    {
      label: "Service",
      value: "Intangible Item",
    },
    {
      label: "Product",
      value: "Physical Item",
    },
  ];
  const serviceTypeOptions = [
    {
      label: "Marketing",
      value: "Marketing",
    },
    {
      label: "Internet",
      value: "Internet",
    },
    {
      label: "Sales",
      value: "Sales",
    },
  ];
  const frequencyOptions = [
    {
      label: "One Time",
      value: "One Time",
    },
    {
      label: "Monthly",
      value: "Monthly",
    },
    {
      label: "Quarterly",
      value: "Quarterly",
    },
    {
      label: "Yearly",
      value: "Yearly",
    },
  ];
  return (
    <CustomForm id={props.id} title="Add Product">
      <XFlex column>
        <RadioInput options={radioOptions} />
        <SelectInput
          label="Service Type"
          searcheable
          options={serviceTypeOptions}
        />
        <SelectInput label="Fequency" searcheable options={frequencyOptions} />
        <IGSInput label="Name" />
        <IGSInput label="ACTUAL COST" type="currency" />
        <IGSInput label="OPERATIONAL COST" type="currency" />
        <IGSInput label="SALE PRICE" type="currency" />
        <IGSInput label="ALLOWED DISCOUNT" type="currency" />
      </XFlex>
    </CustomForm>
  );
};

export default ContractAddStepOne;
