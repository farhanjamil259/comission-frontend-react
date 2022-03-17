import React from "react";
import CustomForm from "../../../../components/form/CustomForm";
import XFlex from "../../../../components/form/FormFlex";
import Checkbox from "../../../../components/inputs/CheckboxInput";
import IGSInput from "../../../../components/inputs/IGSInput";
import { TypoText } from "../../../../components/typography/XText";

type CustomFormProps = {
  id: string;
};

const ContractAddStepFour = (props: CustomFormProps): React.ReactElement => {
  return (
    <CustomForm id={props.id} title="Define ACCELERATORS">
      <XFlex column>
        <XFlex>
          <div>
            <TypoText color="dark-100" marginBottom="small">
              Enable Retroactive Accelerators?
            </TypoText>
            <TypoText size="small" color="dark-200" marginBottom="medium">
              Apply upper tier commission on all sales.
            </TypoText>
          </div>
          <Checkbox />
        </XFlex>
        <IGSInput label="ACCELERATOR" />
        <XFlex>
          <IGSInput type="currency" label="Target" />
          <IGSInput type="percent" label="Extra Commission" />
        </XFlex>
      </XFlex>
    </CustomForm>
  );
};

export default ContractAddStepFour;
