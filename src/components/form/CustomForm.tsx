import React from "react";
import { TypoText } from "../typography/XText";

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
  return (
    <form id={props.id} className={coreClass}>
      <TypoText
        size="blockquote"
        align={props.textLeft ? "left" : "center"}
        weight="bold"
        transform="uppercase"
      >
        {props.title}
      </TypoText>
      {props.subtitle && (
        <TypoText
          size="lead"
          align={props.textLeft ? "left" : "center"}
          weight="medium"
          color="dark-200"
        >
          {props.subtitle}
        </TypoText>
      )}
      <div className={bodyClass}>{props.children}</div>
    </form>
  );
};

export default CustomForm;
