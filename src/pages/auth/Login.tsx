import React from "react";
import ActionLink from "../../components/button/ActionLink";
import Button from "../../components/button/Button";
import CustomForm from "../../components/form/CustomForm";
import FormFlex from "../../components/form/FormFlex";
import CheckboxInput from "../../components/inputs/CheckboxInput";
import IGSInput from "../../components/inputs/IGSInput";
import IGSText from "../../components/text/IGSText";

const Login = (): React.ReactElement => {
  return (
    <div className="login-page">
      <div className="login-page-section-left">IMAGE</div>
      <div className="login-page-section-right">
        <CustomForm
          textLeft
          id="login-form"
          title="Welcome Back"
          subtitle="We are excited to see you again!"
        >
          <FormFlex column>
            <IGSInput
              type="email"
              label="Email Address"
              showIcon
              placeholder="someone@example.com"
            />
            <IGSInput
              type="password"
              label="Password"
              showIcon
              placeholder="secret"
            />
            <FormFlex>
              <CheckboxInput label="Remeber Me" value={true} />
              <ActionLink text="Forgot Password?" />
            </FormFlex>
            <br />
            <FormFlex>
              <Button text="Login" variant="primary" rounded />
              <div>
                <IGSText type="label-medium">Do not have an account.</IGSText>
                <ActionLink text="Create Account" />
              </div>
            </FormFlex>
          </FormFlex>
        </CustomForm>
      </div>
    </div>
  );
};

export default Login;
