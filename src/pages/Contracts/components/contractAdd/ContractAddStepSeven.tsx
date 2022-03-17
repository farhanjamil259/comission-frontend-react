import React from "react";
import CustomForm from "../../../../components/form/CustomForm";
import XFlex from "../../../../components/form/FormFlex";
import Checkbox from "../../../../components/inputs/CheckboxInput";
import IGSInput from "../../../../components/inputs/IGSInput";
import SelectInput from "../../../../components/inputs/SelectInput";
import { TypoText } from "../../../../components/typography/XText";

type CustomFormProps = {
  id: string;
};

const ContractAddStepSeven = (props: CustomFormProps): React.ReactElement => {
  const bonusTypeOptions = [
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
    <CustomForm id={props.id} title="Define Bonus">
      <XFlex column>
        <IGSInput label="Bonus" />
        <SelectInput
          label="Bonus Type"
          searcheable
          options={bonusTypeOptions}
        />
        <XFlex>
          <IGSInput type="currency" label="TARGET" />
          <IGSInput type="currency" label="Amount" />
        </XFlex>
      </XFlex>
    </CustomForm>
  );
};

export default ContractAddStepSeven;
