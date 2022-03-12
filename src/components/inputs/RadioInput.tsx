import React, { useState } from "react";
import { IconTypes } from "../icon/Icons";
import IGSIcon from "../icon/IGSIcon";

interface RadioOption {
  label: string;
  value: string;
}

type RadioInputProps = {
  options: [RadioOption, RadioOption];
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
              <label className="radio-input__option--label">
                {option.label}
              </label>
              <label className="radio-input__option--text">
                Nice to get started
              </label>
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
