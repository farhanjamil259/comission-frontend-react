import React, { useState } from "react";
import CustomForm from "../../../../components/form/CustomForm";
import XFlex from "../../../../components/form/FormFlex";
import Checkbox from "../../../../components/inputs/CheckboxInput";
import IGSInput from "../../../../components/inputs/IGSInput";
import RadioInput from "../../../../components/inputs/RadioInput";
import RangeInput from "../../../../components/inputs/RangeInput";
import SelectInput from "../../../../components/inputs/SelectInput";
import { TypoText } from "../../../../components/typography/XText";

type CustomFormProps = {
  id: string;
};

const ContractAddStepFive = (props: CustomFormProps): React.ReactElement => {
  const [range, setRange] = useState([7, 11]);
  const [val, setVal] = useState(25);
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
      <IGSInput label="DECELERATOR" />
      <RadioInput options={serviceTypeOptions} />
      <IGSInput type="currency" label="Allowed Discount" />
      <IGSInput type="percent" label="Commission Cut" />
      <RangeInput
        label="MIN SALE TARGET"
        step={5}
        min={0}
        max={100}
        type="slider"
        sliderValue={val}
        onChange={(event): void => {
          setVal(event as number);
        }}
        color="danger"
        marks={{ 0: "0M", 25: "25M", 50: "50M", 75: "75M", 100: "100M" }}
      />
      <RangeInput
        label="SEASON"
        min={1}
        max={12}
        type="range"
        rangeValues={range}
        onChange={(event): void => {
          setRange(event as number[]);
        }}
        color="danger"
        marks={{
          1: "Jan",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "May",
          6: "Jun",
          7: "Jul",
          8: "Aug",
          9: "Sep",
          10: "Oct",
          11: "Nov",
          12: "Dec",
        }}
      />
    </CustomForm>
  );
};

export default ContractAddStepFive;
