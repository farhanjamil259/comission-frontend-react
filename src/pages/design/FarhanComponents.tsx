import React, { useState } from "react";
import ActionLink from "../../components/button/ActionLink";
import CheckboxInput from "../../components/inputs/CheckboxInput";
import RadioInput from "../../components/inputs/RadioInput";
import CommisionCalculator from "../comissionCalculator/CommisionCalculator";

const FarhanComponents = (): React.ReactElement => {
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        margin: "30px",
      }}
    >
      <h1>Inputs</h1>
      <h3>Radio</h3>
      <RadioInput
        options={[
          { label: "Val 1", value: "val1" },
          { label: "Val 2", value: "val2" },
        ]}
      />

      <h3>Action Link</h3>
      <ActionLink text="Forgot password" />

      <h3>Checkbox</h3>
      <CheckboxInput
        value={checked}
        onChange={(e): void => setChecked(e)}
        label="Test Label"
      />

      <CommisionCalculator />
    </div>
  );
};

export default FarhanComponents;
