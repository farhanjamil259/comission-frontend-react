import classNames from "classnames";
import React, { createRef, useEffect } from "react";
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
    | "rate";
  placeholder?: string;
  showIcon?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  underline?: boolean;
}

const generateIcon = (type: IIGSInputProps["type"]): IconTypes | undefined => {
  if (type === "password") return "lock";
  if (type === "email") return "email";
  if (type === "search") return "search";
};

// TODO: implement format for currency

const IGSInput = (props: IIGSInputProps): React.ReactElement => {
  const inputRef = createRef<HTMLInputElement>();
  const coreClass = "igs-input";
  const inputClass = classNames(coreClass, [
    {
      [`${coreClass}--underline`]: props.underline,
    }, // A cat doesn't bark, so it will return never// A cat doesn't bark, so it will return never
  ]);
  const preIconClass = `${coreClass}__icon ${coreClass}__icon--pre`;
  const postIconClass = `${coreClass}__icon ${coreClass}__icon--post`;
  return (
    <div
      className={inputClass}
      onClick={(): void => {
        inputRef.current?.focus();
      }}
    >
      {props.showIcon && !props.underline && (
        <IGSIcon className={preIconClass} type={generateIcon(props.type)} />
      )}
      <div className="igs-input__container">
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
        />
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
      {props.type === "rate" && (
        <IGSIcon className={postIconClass} type="percent" />
      )}
    </div>
  );
};

export default IGSInput;
