import classNames from "classnames";
import React, { createRef, useEffect, useMemo, useState } from "react";
import { IconTypes } from "../icon/Icons";
import IGSIcon from "../icon/IGSIcon";
import IGSText from "../text/IGSText";

export interface SelectOptions {
  label: string;
  value: string;
}

interface IIGSInputProps {
  label?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "ssn"
    | "phone"
    | "currency"
    | "calendar-day"
    | "search"
    | "rate"
    | "percent";
  placeholder?: string;
  showIcon?: boolean;
  onChange?: (value: string) => void;
  value?: string;
  underline?: boolean;
  searchable?: boolean;
  options?: SelectOptions[];
}

const generateIcon = (type: IIGSInputProps["type"]): IconTypes | undefined => {
  if (type === "password") return "lock";
  if (type === "email") return "email";
  if (type === "search") return "search";
};

// TODO: implement format for currency
const IGSInput = (props: IIGSInputProps): React.ReactElement => {
  const inputRef = createRef<HTMLInputElement>();

  const [active, setActive] = useState(false);

  const [value, setValue] = useState("");

  useEffect(() => {
    if (props.value) setValue(props.value);
  }, [props.value]);

  const filteredOptions = useMemo(() => {
    return props.options?.filter((option) => {
      return option.label.includes(value) || option.value.includes(value);
    });
  }, [props.options, value]);

  const coreClass = "igs-input";
  const inputClass = classNames(coreClass, [
    {
      [`${coreClass}--underline`]: props.underline,
      [`${coreClass}--searchable`]: props.options?.length,
      [`${coreClass}--active`]: active && props.options?.length,
    },
  ]);

  const preIconClass = `${coreClass}__icon ${coreClass}__icon--pre`;
  const postIconClass = `${coreClass}__icon ${coreClass}__icon--post`;

  return (
    <div className={inputClass}>
      {props.showIcon && !props.underline && (
        <IGSIcon className={preIconClass} type={generateIcon(props.type)} />
      )}

      <div
        className="igs-input__container"
        onClick={(): void => {
          inputRef.current?.focus();
        }}
      >
        <IGSText className="igs-input__label" type="label-medium">
          {props.label}
        </IGSText>
        <input
          value={props.value}
          onChange={(e): void => {
            setValue(e.target.value);
            props.onChange && props.onChange(e.target.value);
          }}
          type={(props.type === "password" && "password") || undefined}
          ref={inputRef}
          className="igs-input__field"
          placeholder={props.placeholder}
          onFocus={(): void => setActive(true)}
          onBlur={(): void => {
            setTimeout(() => {
              inputRef.current?.blur();
              setActive(false);
            }, 50);
          }}
        />
      </div>

      {filteredOptions?.map((option, optIndex) => {
        return (
          <div key={optIndex} className="igs-input__dropdown">
            <div
              className="igs-input__dropdown--item"
              onClick={(): void => {
                props.onChange && props.onChange(option.value);
              }}
            >
              <IGSIcon
                className="igs-input__dropdown--arrow"
                width="12px"
                height="12px"
                type="right"
              />
              {option.label}
            </div>
          </div>
        );
      })}

      {props.type === "password" && (
        <IGSIcon className={postIconClass} type="eye" />
      )}
      {props.type === "currency" && (
        <IGSIcon className={postIconClass} type="dollar" />
      )}
      {props.type === "calendar-day" && (
        <IGSIcon className={postIconClass} type="calender" />
      )}
      {props.type === "percent" && (
        <IGSIcon className={postIconClass} type="percent" />
      )}
    </div>
  );
};

export default IGSInput;
