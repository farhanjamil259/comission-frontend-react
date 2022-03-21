import React from "react";
import Card from "../../../components/card/Card";
import { IconTypes } from "../../../components/icon/Icons";
import IGSIcon from "../../../components/icon/IGSIcon";
import IGSText from "../../../components/text/IGSText";

type PerformanceCardProps = {
  icon: IconTypes;
  label: string;
  value: string;
};

const PerformanceCard = (props: PerformanceCardProps): React.ReactElement => {
  return (
    <Card fullWidth>
      <div className="performance-card">
        <div className="performance-card__label">
          <IGSIcon width="16px" height="16px" type={props.icon} />
          <IGSText type="stylize-small">{props.label}</IGSText>
        </div>
        <div className="performance-card__value">
          <IGSText type="heading-4">{props.value}</IGSText>
        </div>
      </div>
    </Card>
  );
};

export default PerformanceCard;
