import React from "react";
import SelectInput from "../../components/inputs/SelectInput";

const FarhanComponents = (): React.ReactElement => {
  return (
    <div>
      <SelectInput
        label="Options"
        options={[
          {
            label: "Test 1",
            value: "asd1",
          },
        ]}
      />
    </div>
  );
};

export default FarhanComponents;
