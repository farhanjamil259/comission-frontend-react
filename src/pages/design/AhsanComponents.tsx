import React from "react";
import FormFlex from "../../components/form/FormFlex";
import IGSInput from "../../components/inputs/IGSInput";
import SelectInput, {
  SelectOptions,
} from "../../components/inputs/SelectInput";
import Wizard from "../../components/wizards/Wizard";

const options: SelectOptions[] = [
  {
    label: "asd",
    value: "asd",
  },
  {
    label: "asd2",
    value: "asd2",
  },
  {
    label: "asd3",
    value: "asd3",
  },
];

const AhsanComponents = (): React.ReactElement => {
  return (
    <Wizard title="asdasd">
      <form id="create-employee-1">
        <FormFlex column>
          <FormFlex>
            <IGSInput label="First Name" />
            <IGSInput label="Last Name" />
          </FormFlex>
          <IGSInput
            type="email"
            label="Email Address"
            placeholder="someone@example.com"
          />
          <IGSInput label="Business Address" />
        </FormFlex>
      </form>
      <form id="create-employee-2">
        <div></div>
      </form>
    </Wizard>
  );
};

export default AhsanComponents;
