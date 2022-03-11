import React from "react";
import Avatar from "../../../../components/avatar/Avatar";
import Card from "../../../../components/card/Card";
import Text from "../../../../components/text/IGSText";

const employees = [1, 2, 3, 4, 5];

const EmployeeIdCard = (): React.ReactElement => {
  return (
    <Card>
      <div className="employee-id-card">
        <div className="employee-id-card-id">
          <Avatar className="employee-id-card-id-img" />

          <Text type="heading-5">Welcome</Text>
          <Text type="heading-5">back, Eric.</Text>
        </div>
        <div className="employee-id-card-recomendation">
          <p className="employee-id-card-recomendation-name">NEW ROOKIE</p>
          <Text
            type="label-medium"
            className="employee-id-card-recomendation-desc"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeclarae
          </Text>

          <div className="employee-id-card-recomendation-recommendations">
            {employees.map((e) => {
              return (
                <div
                  key={e}
                  className="employee-id-card-recomendation-recommendations-img"
                />
              );
            })}
            <div className="employee-id-card-recomendation-recommendations-img">
              +
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EmployeeIdCard;
