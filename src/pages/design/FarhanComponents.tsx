import React, { createRef, useRef, useState } from "react";
import ActionLink from "../../components/button/ActionLink";
import CheckboxInput from "../../components/inputs/CheckboxInput";
import RadioInput from "../../components/inputs/RadioInput";
import Wizard from "../../components/wizards/Wizard";
import CommisionCalculator from "../comissionCalculator/CommisionCalculator";

import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import RangeInput from "../../components/inputs/RangeInput";

const FarhanComponents = (): React.ReactElement => {
  const [checked, setChecked] = useState(false);

  interface MyFormValues {
    firstName: string;
  }

  const initialValues: MyFormValues = { firstName: "" };

  const ref = createRef<HTMLFormElement>();

  return (
    <div
      style={{
        margin: "30px",
      }}
    >
      <RangeInput />
      <Wizard title="asdasd">
        <form id="fid1">
          <input type="text" required />
        </form>
        <form id="fid2" ref={undefined}>
          <input type="text" required />
          <input type="text" required />
        </form>
      </Wizard>

      <br />
      <br />

      <h1>Inputs</h1>
      <h3>Radio</h3>
      <RadioInput
        options={[
          { label: "Val 1", value: "val1" },
          { label: "Val 2", value: "val2" },
        ]}
      />

      <h3>Action Link</h3>
      <ActionLink text="Forgot password" />

      <h3>Checkbox</h3>
      <CheckboxInput
        value={checked}
        onChange={(e): void => setChecked(e)}
        label="Test Label"
      />

      <CommisionCalculator />
    </div>
  );
};

export default FarhanComponents;
