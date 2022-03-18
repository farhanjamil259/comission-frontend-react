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

const ContractAddStepFive = (props: CustomFormProps): React.ReactElement => {
  const serviceTypeOptions = [
    {
      label: "Seasonal",
      value: "Seasonal",
    },
    {
      label: "Discount",
      value: "Discount",
    },
  ];
  return (
    <CustomForm id={props.id} title="Define Decelearators">
      <XFlex column>
        <IGSInput label="DECELERATOR" />
        {/* TODO: replace with input field */}
        <SelectInput
          label="DECELERATOR MODE"
          searcheable
          options={serviceTypeOptions}
        />
        <XFlex>
          <IGSInput type="currency" label="TARGET MISSED" />
          <IGSInput type="percent" label="Commission Cut" />
        </XFlex>
      </XFlex>
    </CustomForm>
  );
};

export default ContractAddStepFive;
