import React from "react";
import Slider, { Range } from "rc-slider";

import "rc-slider/assets/index.css";

type RangeInputProps = {
  rangeValues?: number[];
  sliderValue?: number;
  onchange?: (e: number[] | number) => void;
  min?: number;
  max?: number;
  step?: number;
  color?: "green" | "orange" | "blue";
  type?: "range" | "slider";
};

const generateGradient = (color: RangeInputProps["color"]): string => {
  if (color === "green")
    return "linear-gradient(147.14deg, #00cfde 6.95%, #05a660 93.05%)";
  if (color === "orange")
    return "linear-gradient(147.14deg, #f80 6.95%, #e63535 93.05%)";
  return "linear-gradient(147.14deg, #73dfe7 6.95%, #0063f7 93.05%)";
};

const RangeInput = (props: RangeInputProps): React.ReactElement => {
  const handleStyle: React.CSSProperties = {
    width: "20px",
    height: "20px",
    borderRadius: "2rem",
    border: "none",
    position: "absolute",
    top: "-20px",
    marginLeft: "-10px",
    borderBottomRightRadius: "0",
  };

  if (props.type === "range") {
    return (
      <Range
        dots
        step={20}
        trackStyle={[{ background: generateGradient(props.color), height: 10 }]}
        railStyle={{
          backgroundColor: "#555770",
          height: "10px",
          padding: "0",
          margin: "0",
        }}
        handleStyle={[
          { background: generateGradient(props.color), ...handleStyle },
          { background: generateGradient(props.color), ...handleStyle },
        ]}
        dotStyle={{
          borderRadius: 0,
          backgroundColor: "#555770",
          border: "none",
          width: "2px",
          top: "10px",
        }}
        onChange={props.onchange}
        value={props.rangeValues}
        min={props.min}
        max={props.max}
      />
    );
  } else {
    return (
      <Slider
        dots
        step={20}
        trackStyle={{ background: generateGradient(props.color), height: 10 }}
        railStyle={{
          backgroundColor: "#555770",
          height: "10px",
          padding: "0",
          margin: "0",
        }}
        handleStyle={{
          background: generateGradient(props.color),
          ...handleStyle,
        }}
        dotStyle={{
          borderRadius: 0,
          backgroundColor: "#555770",
          border: "none",
          width: "2px",
          top: "10px",
        }}
        onChange={props.onchange}
        value={props.sliderValue}
        min={props.min}
        max={props.max}
      />
    );
  }
};

export default RangeInput;
