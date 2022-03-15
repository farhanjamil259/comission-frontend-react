import React, { Children, createRef, useEffect, useState } from "react";
import Button from "../button/Button";
import IGSIcon from "../icon/IGSIcon";
import IGSText from "../text/IGSText";

type WizardType = {
  title: string;
  children: React.ReactElement<HTMLFormElement>[];
  show?: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
  cancelText?: string;
};

const Wizard = (props: WizardType): React.ReactElement => {
  const [step, setStep] = useState(Math.round(100 / props.children.length));

  const [currentChild, setCurrentChild] = useState(0);

  const handleSubmit = (): void => {
    if (currentChild === props.children.length - 1) {
      console.log("Last Step");
      props.onSubmit && props.onSubmit();
      return;
    }
    setCurrentChild(currentChild + 1);
    setStep(step + Math.round(100 / props.children.length));
  };

  const handlePrevious = (): void => {
    if (currentChild === 0) return;
    setCurrentChild(currentChild - 1);
    setStep(step - Math.round(100 / props.children.length));
  };

  useEffect(() => {
    document
      .getElementById(props.children[currentChild].props.id)
      ?.addEventListener("submit", (e): void => {
        e.preventDefault();
        handleSubmit();
      });
  }, [currentChild]);

  return (
    <div
      className={`wizard-container ${
        props.show ? "wizard-container--show" : ""
      }`}
    >
      <div className="wizard">
        <div className="wizard__header">
          <IGSText type="heading-6" className="wizard__header--title">
            {props.title}
          </IGSText>

          <IGSText type="heading-6" className="wizard__header--step">
            step {currentChild + 1}
          </IGSText>
        </div>
        <div className="wizard__progress">
          <div
            style={{
              width: `${step}%`,
            }}
            className="wizard__progress--bar"
          ></div>
          <div className="wizard__progress--bg" />
        </div>
        <div className="wizard__child">{props.children[currentChild]}</div>

        <div className="wizard__footer">
          <IGSText className="wizard__footer--text" type="stylize-lead">
            <IGSIcon type="left" className="wizard__footer--icon" />
            {props.cancelText || "Cancel"}
          </IGSText>
          <Button
            rounded
            variant="primary"
            text="Previous"
            type="button"
            onClick={(): void => {
              handlePrevious();
            }}
          />
          <Button
            rounded
            form={props.children[currentChild].props.id}
            variant="success"
            text="Next"
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default Wizard;