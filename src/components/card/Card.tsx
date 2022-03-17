import classNames from "classnames";
import React from "react";

type CardProps = {
  children?: React.ReactElement | React.ReactElement[];
  radius?: "half" | "none";
  border?: boolean;
  noShadow?: boolean;
};

const Card = ({
  children,
  radius,
  border,
  noShadow,
}: CardProps): React.ReactElement => {
  const coreClass = "igs-card";
  return (
    <div
      className={classNames(coreClass, [
        {
          [`${coreClass}--radius-half`]: radius === "half",
          [`${coreClass}--radius-none`]: radius === "none",
          [`${coreClass}--no-shadow`]: noShadow,
          [`${coreClass}--border`]: border,
        },
      ])}
    >
      {children}
    </div>
  );
};

export default Card;
