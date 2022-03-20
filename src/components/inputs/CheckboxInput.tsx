import classNames from "classnames";
import React from "react";
import IGSIcon from "../icon/IGSIcon";
import IGSText from "../text/IGSText";

type CheckboxProps = {
  value?: boolean;
  label?: string;
  description?: string;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  formColumn?: boolean;
};

const Checkbox = (props: CheckboxProps): React.ReactElement => {
  const coreClassName = "checkbox__input";
  const cssClassNames = classNames(coreClassName, {
    [`${coreClassName}--checked`]: props.value,
    [`${coreClassName}--disabled`]: props.disabled,
  });

  return (
    <div
      className="checkbox"
      onClick={(): void => {
        props.onChange && props.onChange(!props.value);
      }}
    >
      {props.formColumn && (
        <div>
          <IGSText tag="p" type="label-large" className="checkbox__label">
            {props.label}
          </IGSText>
          <IGSText type="label-medium" className="checkbox__description">
            {props.description}
          </IGSText>
        </div>
      )}
      <div className={cssClassNames}>
        <IGSIcon className="checkbox__icon" type="tick2" />
      </div>
      {!props.formColumn && (
        <IGSText type="label-medium" className="checkbox__label">
          {props.label}
        </IGSText>
      )}
    </div>
  );
};

export default Checkbox;
