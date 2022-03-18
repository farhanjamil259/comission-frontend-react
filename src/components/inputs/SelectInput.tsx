import React, { useEffect, useMemo, useRef, useState } from "react";
import IGSIcon from "../icon/IGSIcon";
import IGSText from "../text/IGSText";

export interface SelectOptions {
  label: string;
  value: string;
}

type SelectInputProps = {
  label: string;
  searcheable?: boolean;
  onChange?: (value: string) => void;
  value?: string;
  options?: SelectOptions[];
};

const SelectInput = (props: SelectInputProps): React.ReactElement => {
  const [open, setOpen] = useState(true);

  return (
    <div
      onClick={(): void => setOpen(!open)}
      className={`select-input ${open ? "select-input--active" : ""}`}
    >
      <IGSIcon
        width="18px"
        height="18px"
        className="select-input--icon"
        type="close"
      />
      <div className="select-input__information">
        <IGSText className="select-input__label" type="label-medium">
          {props.label}
        </IGSText>
        <IGSText className="select-input__value" type="body-2">
          {props.value ? props.value : " Please select an option"}
        </IGSText>
      </div>
      <div className="select-input__dropdown">
        {props.options?.map((option, optionIndex) => {
          return (
            <div
              key={optionIndex + option.label + "OptionDropdown"}
              className="select-input__dropdown--item"
              onClick={(): void => {
                props.onChange && props.onChange(option.value);
              }}
            >
              <IGSIcon
                className="select-input__dropdown--arrow"
                width="12px"
                height="12px"
                type="right"
              />
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectInput;
