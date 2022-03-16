import classNames from "classnames";
import React from "react";

type CustomFormProps = {
  id: string;
  title: string;
  subtitle?: string;
  children?: React.ReactElement | React.ReactElement[];
  textLeft?: boolean;
};

const CustomForm = (props: CustomFormProps): React.ReactElement => {
  const coreClass = "custom-form";
  const bodyClass = `${coreClass}__body`;
  const titleClass = classNames(`${coreClass}__title`, [
    {
      [`${coreClass}__text-left`]: props.textLeft,
    },
  ]);
  const subtitleClass = classNames(`${coreClass}__subtitle`, [
    {
      [`${coreClass}__text-left`]: props.textLeft,
    },
  ]);
  return (
    <form id={props.id} className={coreClass}>
      <h1 className={titleClass}>{props.title}</h1>
      {props.subtitle && <h6 className={subtitleClass}>{props.subtitle}</h6>}
      <div className={bodyClass}>{props.children}</div>
    </form>
  );
};

export default CustomForm;
