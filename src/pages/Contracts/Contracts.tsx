import React from "react";
import Card from "../../components/card/Card";
import CalenderImage from "../../assets/images/Calender.png";
import CounterCard from "./components/CounterCard";

const Contracts = (): React.ReactElement => {
  return (
    <div className="contracts-page">
      <div className="contracts-page-section--header">
        <Card radius="none">
          <div className="contracts-page-section--header-container">
            <CounterCard value="120" title="Total Projects" />
            <CounterCard value="120" title="Total Projects" />
            <CounterCard value="120" title="Total Projects" />
            <CounterCard value="120" title="Total Projects" noBorder />

            <img
              className="contracts-page-section--header-container-image"
              src={CalenderImage}
              alt=""
            />
          </div>
        </Card>
      </div>
      <div className="contracts-page-section--actions"></div>
      <div className="contracts-page-section--contracts"></div>
    </div>
  );
};

export default Contracts;
