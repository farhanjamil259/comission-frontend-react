import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "success" | "primary" | "dark" | "danger";
  rounded?: boolean;
}

const Button = ({
  text,
  variant,
  rounded,
  ...otherProps
}: ButtonProps): React.ReactElement => {
  const coreClass = "igs-button";

  const buttonClass = classNames(coreClass, {
    [`${coreClass}--${variant}`]: variant,
    [`${coreClass}--rounded`]: rounded,
  });

  return (
    <button {...otherProps} className={buttonClass}>
      {text}
    </button>
  );
};

export default Button;
