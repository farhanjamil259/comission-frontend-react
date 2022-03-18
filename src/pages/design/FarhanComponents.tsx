import React from "react";
import RangeInput from "../../components/inputs/RangeInput";

const FarhanComponents = (): React.ReactElement => {
  return (
    <div>
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
