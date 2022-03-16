import React, { createRef, useRef, useState } from "react";
import ActionLink from "../../components/button/ActionLink";
import CheckboxInput from "../../components/inputs/CheckboxInput";
import RadioInput from "../../components/inputs/RadioInput";
import Wizard from "../../components/wizards/Wizard";
import CommisionCalculator from "../comissionCalculator/CommisionCalculator";

import RangeInput from "../../components/inputs/RangeInput";
import Steps, { Step } from "../../components/wizards/components/Steps";
import Logo from "../../components/logo/Logo";

const FarhanComponents = (): React.ReactElement => {
  const [checked, setChecked] = useState(false);

  interface MyFormValues {
    firstName: string;
  }

  const initialValues: MyFormValues = { firstName: "" };

  const ref = createRef<HTMLFormElement>();

  const stepOptions: Step[] = [
    {
      icon: "calender",
      label: "step 1",
    },
    {
      icon: "calender",
      label: "step 2",
    },
    {
      icon: "calender",
      label: "step 3",
    },
    {
      icon: "calender",
      label: "step 4",
    },
    {
      icon: "calender",
      label: "step 5",
    },
  ];

  return (
    <div
      style={{
        margin: "30px",
      }}
    >
      <Logo size="small" />
      <Logo size="medium" />
      <Logo />
      <Logo size="large" />
    </div>
  );
};

export default FarhanComponents;
