import React from "react";

type SplitInputProps = {
  children: React.ReactElement | React.ReactElement[];
};

const SplitInput = (props: SplitInputProps): React.ReactElement => {
  return <div className="split-input">{props.children}</div>;
};

export default SplitInput;
