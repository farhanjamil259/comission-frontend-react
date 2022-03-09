import React from "react";
import classNames from "classnames";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  type:
    | "label-small"
    | "label-medium"
    | "label-large"
    | "body-1"
    | "body-2"
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "heading-5"
    | "heading-6"
    | "display-1"
    | "display-2"
    | "stylize-capitalize"
    | "stylize-blockquote"
    | "stylize-lead"
    | "stylize-small"
    | "stylize-tiny";
}

const generateTag = (type: TextProps["type"]): string => {
  switch (type) {
    case "heading-1":
      return "h1";
    case "heading-2":
      return "h2";
    case "heading-3":
      return "h3";
    case "heading-4":
      return "h4";
    case "heading-5":
      return "h5";
    case "heading-6":
      return "h6";
    case "label-small":
    case "label-medium":
    case "label-large":
      return "label";
    case "stylize-blockquote":
      return "blockquote";
    default:
      return "p";
  }
};

const text = ({
  type,
  children,
  className,
  ...otherProps
}: TextProps): React.ReactElement => {
  const parts = type?.split("-");
  const modifledClassName = "igs-text igs-" + parts[0] + "--" + parts[1];
  const customClassName = classNames(modifledClassName);

  return React.createElement(
    generateTag(type),
    { ...otherProps, className: customClassName },
    children
  );
};

export default text;
