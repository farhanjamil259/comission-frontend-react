import React, { useState } from "react";
import { IconTypes } from "../icon/Icons";
import IGSIcon from "../icon/IGSIcon";
import IGSText from "../text/IGSText";

interface RadioOption {
  label: string;
  value: string;
}

type RadioInputProps = {
  options: RadioOption[];
  icon?: IconTypes;
};

const RadioInput = (props: RadioInputProps): React.ReactElement => {
  const [val, setVal] = useState(props.options[0].value);

  return (
    <div className="radio-input">
      {props.options.map((option, optionIndex) => {
        return (
          <div
            key={optionIndex}
            className={`radio-input__options ${
              option.value === val ? "radio-input__options--checked" : ""
            }`}
            onClick={(): void => setVal(option.value)}
          >
            {props.icon && (
              <IGSIcon
                type={props.icon}
                className="radio-input__options--checked--icon"
              />
            )}
            <div className="radio-input__option">
              <IGSText
                className="radio-input__option--label"
                type="label-large"
              >
                {option.label}
              </IGSText>

              <IGSText
                className="radio-input__option--text"
                type="label-medium"
              >
                {option.value}
              </IGSText>
            </div>

            {!props.icon && option.value === val && (
              <IGSIcon
                type="tick"
                className="radio-input__options--checked--icon"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RadioInput;
