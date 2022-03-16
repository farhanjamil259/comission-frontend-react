import React from "react";
import { IconTypes } from "../../icon/Icons";
import IGSIcon from "../../icon/IGSIcon";

export interface Step {
  icon: IconTypes;
  label: string;
}

type StepsProps = {
  options?: Step[];
};

const Steps = (props: StepsProps): React.ReactElement => {
  return (
    <div className="steps">
      <section className="step-indicator">
        {props.options?.map((option, optionIndex) => {
          if (!props.options) return;
          if (optionIndex === props.options?.length - 1) {
            return (
              <div className="step  active">
                <div className="step-icon ">
                  <IGSIcon type={option.icon} />
                </div>
                <p className="step-text">{option.label}</p>
              </div>
            );
          }
          return (
            <React.Fragment key={optionIndex + "StepIndex"}>
              <div className="step  active">
                <div className="step-icon ">
                  <IGSIcon type={option.icon} />
                </div>
                <p className="step-text">{option.label}</p>
              </div>

              <div className="indicator-line active"></div>
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default Steps;
