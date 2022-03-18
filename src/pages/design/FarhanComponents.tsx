import React from "react";
import SelectInput from "../../components/inputs/SelectInput";
import RangeInput from "../../components/inputs/RangeInput";

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
      <RangeInput
        type="range"
        min={0}
        max={100}
        rangeValues={[2, 80]}
        step={10}
        marks={{ 0: "25M", 100: "100M" }}
      />
    </div>
  );
};

export default FarhanComponents;
