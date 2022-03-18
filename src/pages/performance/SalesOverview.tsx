import React from "react";
import Chart from "../../components/chart/Chart";
import SelectInput from "../../components/inputs/SelectInput";
import IGSText from "../../components/text/IGSText";
import PerformanceCard from "./components/PerformanceCard";

const SalesOverview = (): React.ReactElement => {
  return (
    <div className="sales-overview">
      <div className="sales-overview__header">
        <div className="sales-overview__title">
          <IGSText className="sales-overview__title--text" type="heading-6">
            Sales Overview
          </IGSText>
        </div>
        <div className="sales-overview__fields">
          <SelectInput label="Contact StormFiber" />
          <SelectInput label="Date" />
        </div>
      </div>
      <div className="sales-overview__cards">
        <PerformanceCard icon="calender" label="Target" value="50.0M" />
        <PerformanceCard icon="calender" label="Sales" value="76.0M" />
        <PerformanceCard
          icon="calender"
          label="Commision Earned"
          value="450K"
        />
        <PerformanceCard
          icon="calender"
          label="Available Balance"
          value="500K"
        />
        <PerformanceCard
          icon="calender"
          label="Reserved Balance"
          value="500K"
        />
      </div>
      <div className="sales-overview__sales">
        <IGSText type="heading-4">
          More 3 Sales, You will earn +2% commission.{" "}
        </IGSText>
      </div>
      <div className="sales-overview__chart">
        <Chart />
      </div>
    </div>
  );
};

export default SalesOverview;
