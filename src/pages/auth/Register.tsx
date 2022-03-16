import React from "react";
import REGISTERBG from "../../assets/images/registerbg.png";

const Register = (): React.ReactElement => {
  return (
    <div className="register">
      <div className="register__form">
        <h1>FORM</h1>
      </div>
      <img className="register-bg" src={REGISTERBG} alt="" />
    </div>
  );
};

export default Register;
