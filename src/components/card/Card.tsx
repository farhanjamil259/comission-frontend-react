import classNames from "classnames";
import React from "react";

type CardProps = {
  children?: React.ReactElement | React.ReactElement[];
  radius?: "half" | "none";
};

const Card = ({ children, radius }: CardProps): React.ReactElement => {
  const coreClass = "igs-card";
  return (
    <div
      className={classNames(coreClass, [
        {
          [`${coreClass}--radius-half`]: radius === "half",
          [`${coreClass}--radius-none`]: radius === "none",
        },
      ])}
    >
      {children}
    </div>
  );
};

export default Card;
