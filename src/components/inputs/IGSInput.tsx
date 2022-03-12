import React, { createRef, useEffect } from "react";
import { IconTypes } from "../icon/Icons";
import IGSIcon from "../icon/IGSIcon";

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
}

const generateIcon = (type: IIGSInputProps["type"]): IconTypes | undefined => {
  if (type === "password") return "lock";
  if (type === "email") return "email";
  if (type === "search") return "search";
};

// TODO: implement format for currency

const IGSInput = (props: IIGSInputProps): React.ReactElement => {
  const inputRef = createRef<HTMLInputElement>();

  return (
    <div
      className="igs-input"
      onClick={(): void => {
        inputRef.current?.focus();
      }}
    >
      {props.showIcon && <IGSIcon type={generateIcon(props.type)} />}
      <div className="igs-input__container">
        <label className="igs-input__label">{props.label}</label>
        <input
          value={props.value}
          onChange={props.onChange}
          type={(props.type === "password" && "password") || undefined}
          ref={inputRef}
          className="igs-input__field"
          placeholder={props.placeholder}
        />
      </div>
      {props.type === "password" && <IGSIcon type="eye" />}
      {props.type === "currency" && <IGSIcon type="dollar" />}
      {props.type === "calendar-day" && <IGSIcon type="calender" />}
      {props.type === "calendar-day" && <IGSIcon type="calender" />}
      {props.type === "rate" && <IGSIcon type="percent" />}
    </div>
  );
};

export default IGSInput;
