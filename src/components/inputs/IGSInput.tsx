// import React from "react";

// type InputFieldProps = {
//   label?: string;
//   placeholder?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };

// const InputField = ({
//   label,
//   placeholder,
//   onChange,
// }: InputFieldProps): React.ReactElement => {
//   return (
//     <div className="igs-input">
//       <label className="igs-input--label">{label}</label>
//       <input
//         onChange={onChange}
//         className="igs-input--field"
//         placeholder={placeholder}
//       />
//     </div>
//   );
// };

// export default InputField;

import React from "react";

interface IData {
  key: string;
  val: string;
}

interface IIGSInputProps extends React.HTMLProps<HTMLInputElement> {
  options?: IData[];
}

const IGSInput = ({
  type,
  label,
  placeholder,
}: IIGSInputProps): React.ReactElement => {
  return (
    <div className="igs-input">
      <div className="igs-icon--addon"></div>
      <div className="igs-input--container">
        <label className="igs-input--label">{label}</label>
        <input
          type={type ?? "text"}
          className="igs-input--field"
          placeholder={placeholder}
        />
      </div>
      <div className="igs-icon--addon"></div>
    </div>
  );
};

export default IGSInput;
