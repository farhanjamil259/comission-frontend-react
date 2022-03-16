import classNames from "classnames";
import React from "react";
import LOGO from "../../assets/images/Logo.png";

type LogoProps = {
  size?: "small" | "medium" | "large";
};

const Logo = ({ size = "medium" }: LogoProps): React.ReactElement => {
  const coreClass = "logo";

  const cssClasses = classNames(coreClass, { [`${coreClass}--${size}`]: size });

  return <img className={cssClasses} src={LOGO} alt="" />;
};

export default Logo;
