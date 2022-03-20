import classNames from "classnames";
import React from "react";

type CalcCardData = {
  heading: string;
  data: string;
};

const CalcCardDataComponent = (props: CalcCardData): React.ReactElement => {
  return (
    <div className="igs-timeline__details">
      <span className="igs-timeline__dh">{props.heading}</span>
      <span className="igs-timeline__dd">{props.data}</span>
    </div>
  );
};

interface Dictionary {
  [index: string]: string;
}
const colorConverter = {} as Dictionary;
colorConverter["comcriteria"] = "warning";
colorConverter["payout"] = "primary";
colorConverter["tier"] = "warning";
colorConverter["accelerator"] = "success";
colorConverter["decelerator"] = "danger";
colorConverter["bonus"] = "success";
colorConverter["result"] = "dark-2";
colorConverter["sale"] = "dark";
colorConverter["clawback"] = "danger";
colorConverter["reserve"] = "danger";
colorConverter["drawrecovery"] = "danger";

export type CalcCard = {
  index?: number;
  title: string;
  lead?: string;
  data?: CalcCardData[];
  applied?: boolean;
  type:
    | "sale"
    | "result"
    | "clawback"
    | "salary"
    | "comcriteria"
    | "tier"
    | "accelerator"
    | "decelerator"
    | "bonus"
    | "reserve"
    | "drawrecovery"
    | "payout";
};

const CalcCardComponent = (props: CalcCard): React.ReactElement => {
  const coreClass = "igs-timeline__card";
  const timelineCardClass = classNames(coreClass, {
    [`${coreClass}--dark`]: !props.applied,
    [`${coreClass}--${colorConverter[props.type]}`]: props.applied,
  });
  return (
    <li className={timelineCardClass}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="igs-timeline__title">
          {`${props.index}. ${props.title}`}
        </p>
        <p className="igs-timeline__index"></p>
      </div>
      {props.lead && <p className="igs-timeline__lead">{props.lead}</p>}
      {props.data &&
        props.data.map((item, index) => (
          <CalcCardDataComponent
            key={index}
            heading={item.heading}
            data={item.data}
          />
        ))}
    </li>
  );
};

type CommisionCalculatorProps = {
  cards: CalcCard[];
};

const CommisionCalculator = (
  props: CommisionCalculatorProps
): React.ReactElement => {
  let count: number = 0;
  return (
    <div>
      <ol className="igs-timeline">
        {props.cards.map((item, index) => (
          <CalcCardComponent
            key={index}
            title={item.title}
            lead={item.lead}
            data={item.data}
            type={item.type}
            applied={item.applied}
            index={(count += 1)}
          />
        ))}
      </ol>
    </div>
  );
};

export default CommisionCalculator;
