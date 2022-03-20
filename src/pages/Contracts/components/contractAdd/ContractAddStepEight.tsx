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

const ContractAddStepEight = (props: CustomFormProps): React.ReactElement => {
  const serviceDurationOptions = [
    {
      label: "Month",
      value: "Month",
    },
    {
      label: "Three Months",
      value: "Three Months",
    },
    {
      label: "Six Months",
      value: "Six Months",
    },
    {
      label: "Year",
      value: "Year",
    },
  ];
  return (
    <CustomForm id={props.id} title="Finalize">
      <XFlex column>
        <IGSInput type="currency" label="TEAM LEAD COMMISSIONARGET" />
        {/* TODO: replace with input field */}
        <SelectInput
          label="Minimum Service Duration"
          searcheable
          options={serviceDurationOptions}
        />
        <div>
          <TypoText color="dark-100" marginBottom="small">
            CLAWBACK RULE
          </TypoText>
          <TypoText size="small" color="dark-200">
            Clawback is applicable when service is canceled before the minimum
            service duration.
          </TypoText>
        </div>
      </XFlex>
    </CustomForm>
  );
};

export default ContractAddStepEight;
