import React from "react";
import REGISTERBG from "../../assets/images/registerbg.png";
import ActionLink from "../../components/button/ActionLink";
import Button from "../../components/button/Button";
import CustomForm from "../../components/form/CustomForm";
import XFlex from "../../components/form/FormFlex";
import Checkbox from "../../components/inputs/CheckboxInput";
import IGSInput from "../../components/inputs/IGSInput";
import Logo from "../../components/logo/Logo";
import IGSText from "../../components/text/IGSText";

const Register = (): React.ReactElement => {
  return (
    <div className="register">
      <div className="register__form">
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
            <XFlex>
              <IGSInput label="First Name" placeholder="John" />
              <IGSInput label="Last Name" placeholder="Doe" />
            </XFlex>
            <IGSInput
              type="email"
              label="Email Address"
              placeholder="someone@example.com"
            />
            <IGSInput type="password" label="Password" placeholder="secret" />
            <XFlex>
              <Checkbox label="Remeber Me" value={true} />
              <ActionLink text="Forgot Password?" />
            </XFlex>
            <br />
            <XFlex>
              <Button text="Create Account" variant="primary" rounded />
              <div>
                <IGSText type="label-medium">Already have an account.</IGSText>
                <ActionLink text="Login" />
              </div>
            </XFlex>
          </XFlex>
        </CustomForm>
      </div>
      <img className="register-bg" src={REGISTERBG} alt="" />
    </div>
  );
};

export default Register;
