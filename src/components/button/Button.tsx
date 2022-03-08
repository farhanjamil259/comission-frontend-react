import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "success" | "primary";
  rounded?: boolean;
}

const Button = ({
  text,
  variant,
  rounded,
  ...otherProps
}: ButtonProps): React.ReactElement => {
  const coreClassName = "igs-button";

  const newClassName = classNames(coreClassName, {
    [`${coreClassName}--${variant}`]: variant,
    [`${coreClassName}--rounded`]: rounded,
  });

  return (
    <button {...otherProps} className={newClassName}>
      {text}
    </button>
  );
};

export default Button;
