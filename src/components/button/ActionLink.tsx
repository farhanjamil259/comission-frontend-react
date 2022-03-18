import React from "react";
import { IconTypes } from "../icon/Icons";
import IGSIcon from "../icon/IGSIcon";
import IGSText from "../text/IGSText";

type ActionLinkProps = {
  icon?: IconTypes;
  text?: string;
  onClick?: () => void;
};

const ActionLink = (props: ActionLinkProps): React.ReactElement => {
  return (
    <div className="action-link" onClick={props.onClick}>
      {props.icon && (
        <IGSIcon
          width="16px"
          height="16px"
          className="action-link__icon"
          type={props.icon}
        />
      )}
      <IGSText
        className="action-link__text"
        type="label-medium"
        style={{ fontWeight: "bold" }}
      >
        {props.text}
      </IGSText>
    </div>
  );
};

export default ActionLink;
