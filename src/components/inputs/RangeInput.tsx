import React from "react";
import Slider, { Range as RCRange } from "rc-slider";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(RCRange);
const NewSlider = createSliderWithTooltip(Slider);

import "rc-slider/assets/index.css";
import IGSText from "../text/IGSText";
import classNames from "classnames";

type RangeInputProps = {
  rangeValues?: number[];
  sliderValue?: number;
  onChange?: (e: number[] | number) => void;
  min?: number;
  max?: number;
  step?: number;
  color?: "success" | "danger" | "primary";
  type?: "range" | "slider";
  small?: boolean;
  noHandle?: boolean;
  marks?: {};
  tipPrefix?: string;
  tipPostfix?: string;
  label?: string;
  description?: string;
};

const generateGradient = (color: RangeInputProps["color"]): string => {
  if (color === "success")
    return "linear-gradient(147.14deg, #00cfde 6.95%, #05a660 93.05%)";
  if (color === "danger")
    return "linear-gradient(147.14deg, #f80 6.95%, #e63535 93.05%)";
  return "linear-gradient(147.14deg, #73dfe7 6.95%, #0063f7 93.05%)";
};

const RangeInput = (props: RangeInputProps): React.ReactElement => {
  const handleStyle: React.CSSProperties = {
    width: "20px",
    height: "20px",
    borderRadius: "100",
    border: "none",
    position: "absolute",
    zIndex: "3",
    top: "-20px",
    marginLeft: "-10px",
    borderBottomRightRadius: "0",
    display: props.noHandle ? "none" : "block",
  };

  const coreClass = "igs-range";
  const textClass = classNames(`${coreClass}__text`, {
    [`${coreClass}__text--small`]: props.noHandle,
  });

  const TextSection = (): React.ReactElement => {
    return (
      <div>
        {(props.label || props.description) && (
          <div className={textClass}>
            <IGSText type="label-large" tag="p" className="igs-range__label">
              {props.label}
            </IGSText>
            <IGSText type="label-medium" className="igs-range__description">
              {props.description}
            </IGSText>
          </div>
        )}
      </div>
    );
  };

  const tipFormatter = (value: number): React.ReactNode => {
    return (
      !props.noHandle && (
        <div>
          {props.tipPrefix}
          {value}
          {props.tipPostfix}
        </div>
      )
    );
  };

  if (props.type === "range") {
    return (
      <div className="igs-range">
        <TextSection />
        <Range
          tipFormatter={tipFormatter}
          tipProps={{
            visible: true,
            placement: "top",
            prefixCls: "rc-slider-tooltip",
          }}
          marks={props.marks}
          step={props.step}
          trackStyle={[
            {
              background: generateGradient(props.color),
              height: props.small ? 5 : 10,
              borderRadius: "0",
            },
          ]}
          railStyle={{
            backgroundColor: "#555770",
            height: props.small ? "5px" : "10px",
            borderRadius: "0px",
          }}
          handleStyle={[
            { background: generateGradient(props.color), ...handleStyle },
            { background: generateGradient(props.color), ...handleStyle },
          ]}
          dotStyle={{
            display: "none",
            // borderRadius: 0,
            // backgroundColor: "#555770",
            // border: "none",
            // width: "1px",
            // top: props.small ? "4px" : "8px",
            // marginLeft: "0px",
          }}
          onChange={props.onChange}
          value={props.rangeValues}
          min={props.min}
          max={props.max}
        />
      </div>
    );
  } else {
    return (
      <div className="igs-range">
        <TextSection />
        <NewSlider
          tipFormatter={tipFormatter}
          tipProps={{
            visible: true,
            placement: "top",
            prefixCls: "rc-slider-tooltip",
          }}
          marks={props.marks}
          step={props.step}
          trackStyle={{
            background: generateGradient(props.color),
            height: props.small ? 5 : 10,
            borderRadius: "0",
          }}
          railStyle={{
            backgroundColor: "#555770",
            height: props.small ? "5px" : "10px",
            borderRadius: "0px",
          }}
          handleStyle={{
            background: generateGradient(props.color),
            ...handleStyle,
          }}
          dotStyle={{
            display: "none",
            // borderRadius: 0,
            // backgroundColor: "#555770",
            // border: "none",
            // width: "1px",
            // top: props.small ? "4px" : "8px",
            // marginLeft: "0px",
          }}
          onChange={props.onChange}
          value={props.sliderValue}
          min={props.min}
          max={props.max}
        />
      </div>
    );
  }
};

export default RangeInput;
