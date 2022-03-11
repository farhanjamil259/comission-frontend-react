import React from "react";
import IGSInput from "../../components/inputs/IGSInput";
import SelectInput, {
  SelectOptions,
} from "../../components/inputs/SelectInput";

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
    <div>
      <input />
      <IGSInput label="Amount" placeholder="ex: 10,000" />
      <IGSInput
        type="email"
        label="Email Address"
        placeholder="someone@example.com"
      />
      <SelectInput options={options} searcheable />
      <SelectInput options={options} />
      <h1>asdasdasd</h1>
    </div>
  );
};

export default AhsanComponents;
