import classNames from "classnames";
import React from "react";

const createClass = (
  color: string,
  weight: string,
  align: string,
  transform?: string,
  marginBottom?: string,
  size?: string
): string => {
  const coreClass = "igs-text";
  const colorClass = `${coreClass}--${color}`;
  const weightClass = `${coreClass}--${weight}`;
  const alignClass = `${coreClass}--${align}`;
  const transformClass = `${coreClass}--${transform}`;
  return classNames(
    coreClass,
    colorClass,
    weightClass,
    alignClass,
    transformClass,
    {
      [`${coreClass}--${size}`]: size,
      [`${coreClass}--mb-${marginBottom}`]: marginBottom,
    }
  );
};

type TypoProps = {
  children: string;
  color?:
    | "light-100"
    | "light-200"
    | "light-300"
    | "light-400"
    | "light-500"
    | "dark-100"
    | "dark-200"
    | "dark-300"
    | "dark-400"
    | "dark-500";
  weight?: "regular" | "medium" | "bold";
  align?: "left" | "right" | "center" | "justify";
  transform?: "uppercase" | "capitalize" | "lowercase";
  marginBottom?: "small" | "medium" | "large" | "big" | "giant";
};

type TextProps = TypoProps & {
  size?: "tiny" | "small" | "lead" | "large" | "blockquote" | "big" | "giant";
  tag?: "p" | "blockquote" | "span" | "label";
};

export const TypoText = (props: TextProps): React.ReactElement => {
  return React.createElement(
    props.tag ?? "p",
    {
      className: createClass(
        props.color ?? "light-100",
        props.weight ?? "medium",
        props.align ?? "left",
        props.transform,
        props.marginBottom,
        props.size ?? "lead"
      ),
    },
    props.children
  );
};

type HeadingProps = TypoProps & {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const HeadingBody = (props: HeadingProps): React.ReactElement => {
  return React.createElement(
    props.tag ?? "span",
    {
      className: createClass(
        props.color ?? "light-100",
        props.weight ?? "bold",
        props.align ?? "left",
        props.transform ?? "lowercase",
        props.marginBottom
      ),
    },
    props.children
  );
};
