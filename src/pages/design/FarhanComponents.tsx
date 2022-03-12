import React from "react";
import ActionLink from "../../components/button/ActionLink";
import RadioInput from "../../components/inputs/RadioInput";

const FarhanComponents = (): React.ReactElement => {
  return (
    <div
      style={{
        margin: "30px",
      }}
    >
      <RadioInput
        options={[
          { label: "Val 1", value: "val1" },
          { label: "Val 2", value: "val2" },
        ]}
      />
      <h1>Inputs</h1>
      <h2>Radio</h2>

      <h2>Action Link</h2>
      <ActionLink text="Forgot password" />
    </div>
  );
};

export default FarhanComponents;
