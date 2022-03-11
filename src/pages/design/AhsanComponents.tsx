import React from "react";
import IGSInput from "../../components/inputs/IGSInput";

const AhsanComponents = (): React.ReactElement => {
  return (
    <div>
      <input />
      <IGSInput label="Amount" placeholder="ex: 10,000" />
      <IGSInput
        preIcon="email"
        postIcon="lock"
        type="email"
        label="Email Address"
        placeholder="someone@example.com"
      />
    </div>
  );
};

export default AhsanComponents;
