import React from "react";
import IGSIcon from "../../icon/IGSIcon";

const Steps = (): React.ReactElement => {
  return (
    <div className="steps">
      <section className="step-indicator">
        <div className="step step1 active">
          <div className="step-icon ">
            <IGSIcon type="user" />
          </div>
          <p className="step-text">Delivery</p>
        </div>
        <div className="indicator-line active"></div>
        <div className="step step2 active">
          <div className="step-icon ">
            <IGSIcon type="setting" />
          </div>
          <p className="step-text">Payment</p>
        </div>
        <div className="indicator-line "></div>
        <div className="step step3 ">
          <div className="step-icon">
            <IGSIcon type="tick3" />
          </div>
          <p className="step-text">Confirmation</p>
        </div>
      </section>
    </div>
  );
};

export default Steps;
