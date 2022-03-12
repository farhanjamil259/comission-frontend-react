import React from "react";
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
    </div>
  );
};

export default FarhanComponents;
