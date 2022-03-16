import classNames from "classnames";
import React from "react";

type FormFlexProps = {
  children?: React.ReactElement | React.ReactElement[];
  column?: boolean;
};

const FormFlex = (props: FormFlexProps): React.ReactElement => {
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

export default FormFlex;
