import React from "react";
import CustomForm from "../../../../components/form/CustomForm";
import XFlex from "../../../../components/form/FormFlex";
import Checkbox from "../../../../components/inputs/CheckboxInput";
import IGSInput from "../../../../components/inputs/IGSInput";
import RadioInput from "../../../../components/inputs/RadioInput";
import SelectInput from "../../../../components/inputs/SelectInput";
import { TypoText } from "../../../../components/typography/XText";

type CustomFormProps = {
  id: string;
};

const ContractAddStepTwo = (props: CustomFormProps): React.ReactElement => {
  const metricOptions = [
    {
      label: "Fixed",
      value: "Fixed",
    },
    {
      label: "Percentage",
      value: "Percentage",
    },
  ];
  const saleOptions = [
    {
      label: "Net Sale",
      value: "Net Sale",
    },
    {
      label: "Gross Sale",
      value: "Gross Sale",
    },
  ];
  const commissionOptions = [
    {
      label: "Total Sale",
      value: "Total Sale",
    },
    {
      label: "Per Sale",
      value: "Per Sale",
    },
  ];
  return (
    <CustomForm id={props.id} title="Commission Criteria per Solution">
      <SelectInput
        label="COMMISSION METRIC"
        searcheable
        options={metricOptions}
      />
      <IGSInput type="percent" label="Base Commission" />

      <SelectInput label="SALE MODE" searcheable options={saleOptions} />

      <SelectInput
        label="COMMISSION AGAINST"
        searcheable
        options={metricOptions}
      />
      <RadioInput options={commissionOptions} />
      <Checkbox
        label="Target Based Contract?"
        description="Sale accelerators and decelerators will be enabled if this option
              is set enabled."
        formColumn
      />
    </CustomForm>
  );
};

export default ContractAddStepTwo;
