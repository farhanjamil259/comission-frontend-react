import React, { createRef, useEffect, useState } from "react";

type customForm = {
  submit: () => boolean;
};

type WizardType = {
  children: React.ReactElement<HTMLFormElement>[];
  onLastClick?: () => void;
};

const Wizard = ({ children }: WizardType): React.ReactElement => {
  const [step, setStep] = useState(Math.round(100 / children.length));

  const [currentChild, setCurrentChild] = useState(0);

  const handleSubmit = (): void => {
    setCurrentChild(currentChild + 1);
    setStep(step + Math.round(100 / children.length));
  };

  useEffect(() => {
    document
      .getElementById(children[currentChild].props.id)
      ?.addEventListener("submit", (e): void => {
        e.preventDefault();
        handleSubmit();
      });
  }, [currentChild]);

  return (
    <div className="wizard-container">
      <div className="wizard">
        <div className="wizard__header">
          <p className="wizard__header--title">asdasd</p>
          <p className="wizard__header--step">Step {currentChild + 1}</p>
        </div>
        <div
          style={{
            width: `${step}%`,
          }}
          className="wizard__progress"
        />
        <div className="wizard__child">
          {children[currentChild]}

          <div>
            <button type="submit" form={children[currentChild].props.id}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wizard;
