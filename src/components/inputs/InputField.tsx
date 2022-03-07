import React from "react";

type InputFieldProps = {
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  label,
  placeholder,
  onChange,
}: InputFieldProps): React.ReactElement => {
  return (
    <div className="igs-input">
      <label className="igs-input--label">{label}</label>
      <input
        onChange={onChange}
        className="igs-input--field"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
