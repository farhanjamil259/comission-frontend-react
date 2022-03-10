import React from "react";
import Avatar from "../../../../components/avatar/Avatar";
import Card from "../../../../components/card/Card";
import Text from "../../../../components/text/IGSText";

const EmployeeCard = (): React.ReactElement => {
  return (
    <Card radius="half">
      <div className="employee-card">
        <div className="employee-card--icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            id="footer-sample-full"
            width="24"
            height="24"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 144a64 64 0 1 0-64-64a64.072 64.072 0 0 0 64 64Zm0-96a32 32 0 1 1-32 32a32.036 32.036 0 0 1 32-32Zm0 320a64 64 0 1 0 64 64a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32Zm0-272a64 64 0 1 0 64 64a64.072 64.072 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32Z"
            ></path>
          </svg>
        </div>

        <Avatar className="employee-card--avatar" />

        <p className="employee-card--name">Courtney Wilson</p>
        <p className="employee-card--title">Sales Rep</p>

        <div className="employee-card-buttons">
          <div className="employee-card-buttons--button">
            <Text type="label-small">Performance</Text>
          </div>
          <div className="employee-card-buttons--button">
            <Text type="label-small">Contracts</Text>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EmployeeCard;
