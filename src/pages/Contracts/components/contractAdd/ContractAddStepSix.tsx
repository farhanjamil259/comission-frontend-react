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

const ContractAddStepSix = (props: CustomFormProps): React.ReactElement => {
  const [val, setVal] = useState(500);
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
      <IGSInput label="Bonus" />
      <SelectInput label="Bonus Type" searcheable options={bonusTypeOptions} />
      <IGSInput type="currency" label="Amount" />
      <RangeInput
        label="SALE TARGET"
        step={5}
        min={0}
        max={1000}
        type="slider"
        sliderValue={val}
        onChange={(event): void => {
          setVal(event as number);
        }}
        color="primary"
        marks={{
          0: "0M",
          250: "250M",
          500: "500M",
          750: "750M",
          1000: "1000M",
        }}
      />
    </CustomForm>
  );
};

export default ContractAddStepSix;
