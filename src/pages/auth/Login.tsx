import React from "react";
import ActionLink from "../../components/button/ActionLink";
import Button from "../../components/button/Button";
import CustomForm from "../../components/form/CustomForm";
import XFlex from "../../components/form/FormFlex";
import Checkbox from "../../components/inputs/CheckboxInput";
import IGSInput from "../../components/inputs/IGSInput";
import Logo from "../../components/logo/Logo";
import IGSText from "../../components/text/IGSText";
import { TypoText } from "../../components/typography/XText";

const Login = (): React.ReactElement => {
  return (
    <div className="login-page">
      <div className="login-page-section-left">IMAGE</div>
      <div className="login-page-section-right">
        <div className="register__logo">
          <Logo size="medium" />
        </div>
        <CustomForm
          textLeft
          id="login-form"
          title="Welcome Back"
          subtitle="We are excited to see you again!"
        >
          <XFlex column>
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
            <XFlex>
              <Checkbox label="Remeber Me" value={true} />
              <ActionLink text="Forgot Password?" />
            </XFlex>
            <br />
            <XFlex>
              <Button text="Login" variant="primary" rounded />
              <div>
                <TypoText size="small">Do not have an account.</TypoText>
                <ActionLink text="Create Account" />
              </div>
            </XFlex>
          </XFlex>
        </CustomForm>
      </div>
    </div>
  );
};

export default Login;
