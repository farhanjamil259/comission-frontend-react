import classNames from "classnames";
import React, { createRef, useEffect, useState } from "react";
import { IconTypes } from "../icon/Icons";
import IGSIcon from "../icon/IGSIcon";
import IGSText from "../text/IGSText";

interface IData {
  key: string;
  val: string;
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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  underline?: boolean;
  searchable?: boolean;
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

  const coreClass = "igs-input";
  const inputClass = classNames(coreClass, [
    {
      [`${coreClass}--underline`]: props.underline,
      [`${coreClass}--searchable`]: props.searchable,
      [`${coreClass}--active`]: active,
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
          onChange={props.onChange}
          type={(props.type === "password" && "password") || undefined}
          ref={inputRef}
          className="igs-input__field"
          placeholder={props.placeholder}
          onFocus={(): void => setActive(true)}
          onBlur={(): void => {
            setTimeout(() => {
              inputRef.current?.blur();
              setActive(false);
            }, 200);
          }}
        />
      </div>

      <div className="igs-input__dropdown">
        <div className="igs-input__dropdown--item">
          <IGSIcon
            className="igs-input__dropdown--arrow"
            width="12px"
            height="12px"
            type="right"
          />
          asdasd
        </div>
      </div>

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
