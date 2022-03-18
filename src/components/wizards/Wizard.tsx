import React, {
  Children,
  createRef,
  useEffect,
  useMemo,
  useState,
} from "react";
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
  const initialStep = Math.round(100 / props.children.length);

  const [currentChild, setCurrentChild] = useState(0);

  const step = useMemo(() => {
    return currentChild * initialStep;
  }, [currentChild]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setCurrentChild(0);

    return (): void => {
      document.body.style.overflow = "auto";
    };
  }, [props.show]);

  const handleSubmit = (): void => {
    if (currentChild === props.children.length - 1) {
      console.log("Last Step");
      props.onSubmit && props.onSubmit();
      return;
    }
    setCurrentChild(currentChild + 1);
  };

  const handlePrevious = (): void => {
    if (currentChild === 0) return;
    setCurrentChild(currentChild - 1);
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
    <div className={`wizard ${props.show ? "wizard--show" : ""}`}>
      <div className="wizard__header">
        <IGSText type="heading-6" className="wizard__header--title">
          {props.title}
        </IGSText>

        <IGSText type="heading-6" className="wizard__header--step">
          step {currentChild + 1}
        </IGSText>
      </div>

      <div className="wizard__body">
        <div className="wizard__progress">
          <div
            style={{
              width: `${step}%`,
            }}
            className="wizard__progress--bar"
          ></div>
          <div className="wizard__progress--bg" />
        </div>

        {props.children[currentChild]}
      </div>
      <div className="wizard__footer">
        <IGSText
          className="wizard__footer--text"
          type="stylize-lead"
          onClick={props.onCancel}
        >
          <IGSIcon type="left" className="wizard__footer--icon" />
          {props.cancelText || "Cancel"}
        </IGSText>

        {currentChild !== 0 && (
          <Button
            rounded
            variant="dark"
            text="Previous"
            type="button"
            onClick={(): void => {
              handlePrevious();
            }}
          />
        )}
        <Button
          rounded
          form={props.children[currentChild].props.id}
          // TODO: move to alert component
          onClick={(): void => {
            if (!props.children[currentChild].props.id)
              throw new Error("No child id in wizard");
          }}
          variant={
            currentChild == props.children.length - 1 ? "success" : "primary"
          }
          text={currentChild == props.children.length - 1 ? "Finish" : "Next"}
          type="submit"
        />
      </div>
    </div>
  );
};

type WizardItemProps = {
  id: string;
  children?: React.ReactElement | React.ReactElement[];
};

export const WizardItem = (props: WizardItemProps): React.ReactElement => {
  return <form id={props.id}>{props.children}</form>;
};

export default Wizard;
