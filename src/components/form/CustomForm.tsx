import classNames from "classnames";
import React from "react";

type CustomFormProps = {
  id: string;
  title: string;
  subtitle?: string;
  children?: React.ReactElement | React.ReactElement[];
};

const CustomForm = (props: CustomFormProps): React.ReactElement => {
  const coreClass = "custom-form";
  return (
    <form id={props.id} className="custom-form">
      <h1 className={`${coreClass}__title`}>{props.title}</h1>
      {props.subtitle && (
        <h6 className={`${coreClass}__subtitle`}>{props.subtitle}</h6>
      )}
      <div className={`${coreClass}__body`}>{props.children}</div>
    </form>
  );
};

export default CustomForm;
