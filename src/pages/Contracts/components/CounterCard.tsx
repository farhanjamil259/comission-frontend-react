import classNames from "classnames";
import React from "react";
import IGSText from "../../../components/text/IGSText";

type CounterCardProps = {
  title?: string;
  value?: string;
  noBorder?: boolean;
};

const CounterCard = ({
  noBorder = false,
  title,
  value,
}: CounterCardProps): React.ReactElement => {
  const coreClass = "counter-card";
  const cssClasses = classNames(coreClass, [
    {
      [`${coreClass}--no-border`]: noBorder,
    },
  ]);

  return (
    <div className={cssClasses}>
      <IGSText className={`${coreClass}--value`} type="heading-4">
        {value}
      </IGSText>
      <IGSText className={`${coreClass}--title`} type="label-medium">
        {title}
      </IGSText>
    </div>
  );
};

export default CounterCard;
