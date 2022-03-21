import React, { useState } from "react";
import CustomForm from "../../../../components/form/CustomForm";
import XFlex from "../../../../components/form/FormFlex";
import Checkbox from "../../../../components/inputs/CheckboxInput";
import IGSInput from "../../../../components/inputs/IGSInput";
import RangeInput from "../../../../components/inputs/RangeInput";
import { TypoText } from "../../../../components/typography/XText";

type CustomFormProps = {
  id: string;
};

const ContractAddStepFour = (props: CustomFormProps): React.ReactElement => {
  const [range, setRange] = useState([5, 15]);
  const [range2, setRange2] = useState([1, 25]);
  return (
    <CustomForm id={props.id} title="Define ACCELERATORS">
      <Checkbox
        formColumn
        label=" Enable Retroactive Accelerators?"
        description="Apply upper accelerator on all sales."
      />
      <IGSInput label="ACCELERATOR" />
      <IGSInput type="percent" label="Extra Commission" />
      <RangeInput
        label="SALE TARGET"
        step={5}
        min={0}
        max={100}
        type="range"
        rangeValues={range2}
        onChange={(event): void => {
          setRange2(event as number[]);
        }}
        color="success"
        marks={{ 0: "0M", 25: "25M", 50: "50M", 75: "75M", 100: "100M" }}
      />
      <RangeInput
        label="MONTH DAYS"
        min={1}
        max={30}
        type="range"
        rangeValues={range}
        onChange={(event): void => {
          setRange(event as number[]);
        }}
        color="success"
        marks={{
          1: "1st",
          5: "5th",
          10: "10th",
          15: "15th",
          20: "20th",
          25: "25th",
          30: "30th",
        }}
      />
    </CustomForm>
  );
};

export default ContractAddStepFour;
