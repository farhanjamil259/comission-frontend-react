import React, { useState } from "react";
import CustomForm from "../../../../components/form/CustomForm";
import XFlex from "../../../../components/form/FormFlex";
import Checkbox from "../../../../components/inputs/CheckboxInput";
import IGSInput from "../../../../components/inputs/IGSInput";
import RangeInput from "../../../../components/inputs/RangeInput";
import SelectInput from "../../../../components/inputs/SelectInput";
import { TypoText } from "../../../../components/typography/XText";

type CustomFormProps = {
  id: string;
};

const ContractAddStepEight = (props: CustomFormProps): React.ReactElement => {
  const [val, setVal] = useState(12);
  const [val2, setVal2] = useState(50);
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
      <IGSInput type="currency" label="TEAM LEAD COMMISSIONARGET" />

      <RangeInput
        label="CLAWBACK RULE"
        description="Clawback is applicable when service is canceled before the minimum
        service duration (in weeks)."
        step={1}
        min={1}
        max={48}
        type="slider"
        sliderValue={val}
        onChange={(event): void => {
          setVal(event as number);
        }}
        color="primary"
        marks={{
          1: "1W",
          4: "4W",
          8: "8W",
          12: "12W",
          16: "16W",
          20: "20W",
          24: "24W",
          28: "28W",
          32: "32W",
          36: "25W",
          40: "40W",
          44: "44W",
          48: "48W",
        }}
      />
      <RangeInput
        label="CLAWBACK PERCENT"
        step={1}
        min={1}
        max={100}
        type="slider"
        sliderValue={val2}
        onChange={(event): void => {
          setVal2(event as number);
        }}
        color="primary"
        marks={{
          1: "1%",
          25: "25%",
          50: "50%",
          75: "75%",
          100: "100%",
        }}
      />
    </CustomForm>
  );
};

export default ContractAddStepEight;
