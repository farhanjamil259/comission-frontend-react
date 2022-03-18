import React from "react";
import IGSInput from "../../components/inputs/IGSInput";
import SelectInput from "../../components/inputs/SelectInput";

const FarhanComponents = (): React.ReactElement => {
  return (
    <div>
      <SelectInput
        label="test"
        options={[
          {
            label: "asd",
            value: "asd2",
          },
        ]}
      />

      <IGSInput label="Test" />
    </div>
  );
};

export default FarhanComponents;
