import classNames from "classnames";
import React from "react";

type XFlexProps = {
  children?: React.ReactElement | React.ReactElement[];
  column?: boolean;
};

const XFlex = (props: XFlexProps): React.ReactElement => {
  const coreClass = "form-flex";
  const directionClasses = [
    {
      [`${coreClass}--column`]: props.column,
    },
  ];
  const className = classNames(coreClass, directionClasses);
  return (
    <div className={className} style={{ width: "100%" }}>
      {props.children}
    </div>
  );
};

export default XFlex;
