import React from "react";
import Button from "../../../components/button/Button";
import IGSText from "../../../components/text/IGSText";
import DealItem from "../components/DealItem";

const EmployeeDetails = (): React.ReactElement => {
  return (
    <div className="employee-details">
      <div className="employee-details__deals">
        <div className="employee-details__header">
          <IGSText type="heading-6">Deals</IGSText>
        </div>

        <div>
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
          <DealItem />
        </div>
      </div>
      <div className="employee-details__solutions">
        <div className="employee-details__header">
          <IGSText type="heading-6">Solutions</IGSText>
          <div className="employee-details__buttons">
            <Button variant="primary" text="New Sale" />
            <Button variant="danger" text="Cancellation" />
          </div>
        </div>

        <div>
          <h1>TABLE HERE</h1>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
