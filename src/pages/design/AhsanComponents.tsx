import React from "react";
import IGSInput from "../../components/inputs/IGSInput";

const AhsanComponents = (): React.ReactElement => {
  return (
    <div>
      <IGSInput label="Business Name" placeholder="ex: Company ABC" />
      <IGSInput
        type="email"
        label="Email Address"
        placeholder="someone@example.com"
      />
    </div>
  );
};

export default AhsanComponents;
