import React from "react";
import { Icon, IconProps } from "@iconify/react";
import { icon, IconTypes } from "./Icons";

type IGSIconProps = {
  type?: IconTypes;
} & Omit<IconProps, "icon">;

const IGSIcon = ({
  type,
  width = 26,
  height = 26,
  ...otherProps
}: IGSIconProps): React.ReactElement => {
  return (
    <Icon width={width} height={height} {...otherProps} icon={icon(type)} />
  );
};

export default IGSIcon;
