import React from "react";
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
    | "calendar-day";
  placeholder?: string;
  options?: IData[];
  required?: boolean;
  disabled?: boolean;
  preIcon?: IconTypes;
  postIcon?: IconTypes;
  postIconClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// TODO: Suggest and append is must
const IGSInputDropDown = (): React.ReactElement => {
  return <div></div>;
};

const IGSInput = (props: IIGSInputProps): React.ReactElement => {
  return (
    <div className="igs-input">
      {!!props.preIcon && (
        <div className="igs-input__icon igs-input__icon--pre">
          <IGSIcon type={props.preIcon} />
        </div>
      )}
      <div className="igs-input__container">
        <label className="igs-input__label">{props.label}</label>
        <input
          onChange={props.onChange}
          type={props.type ?? "text"}
          className="igs-input__field"
          placeholder={props.placeholder}
        />
        <IGSInputDropDown />
      </div>
      {!!props.postIcon && (
        <div
          className="igs-input__icon igs-input__icon--post igs-input__icon--clickable"
          onClick={props.postIconClick}
        >
          <IGSIcon type={props.postIcon} />
        </div>
      )}
    </div>
  );
};

export default IGSInput;
