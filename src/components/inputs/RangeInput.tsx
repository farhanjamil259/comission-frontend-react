import React from "react";
import Slider, { Range as RCRange } from "rc-slider";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(RCRange);
const NewSlider = createSliderWithTooltip(Slider);

import "rc-slider/assets/index.css";

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

  if (props.type === "range") {
    return (
      <div className="igs-range">
        <Range
          tipFormatter={(value): React.ReactNode => {
            return (
              <div>
                {props.tipPrefix}
                {value}
                {props.tipPostfix}
              </div>
            );
          }}
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
        <NewSlider
          tipFormatter={(value): React.ReactNode => {
            return (
              <div>
                {props.tipPrefix}
                {value}
                {props.tipPostfix}
              </div>
            );
          }}
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
